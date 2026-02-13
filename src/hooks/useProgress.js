import { useState, useEffect, useCallback } from 'react'
import { submitScore } from '../services/leaderboard'
import { useAuth } from './useAuth'

const STORAGE_KEY = 'sherlocked-progress'
const SECRETS_KEY = 'sherlocked-secrets'
const HINTS_KEY = 'sherlocked-hints'
const VISIT_KEY = 'sherlocked-last-visit'

/**
 * Calculate points for a single puzzle based on hints used.
 * Regular: 3 base, Secret: 5 base, Meta: 7 base.
 * Each hint costs -1 pt. Minimum 0 per puzzle.
 */
function puzzleScore(puzzleId, hintsUsed = 0) {
  let base
  if (typeof puzzleId === 'string' && puzzleId.startsWith('s')) base = 5
  else if (typeof puzzleId === 'string' && puzzleId.startsWith('m')) base = 7
  else base = 3
  return Math.max(0, base - hintsUsed)
}

export function useProgress() {
  const { user, isAuthenticated } = useAuth()

  const [solvedCases, setSolvedCases] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  const [unlockedSecrets, setUnlockedSecrets] = useState(() => {
    try {
      const saved = localStorage.getItem(SECRETS_KEY)
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  // Map of puzzleId -> number of hints used when solved
  const [hintsRecord, setHintsRecord] = useState(() => {
    try {
      const saved = localStorage.getItem(HINTS_KEY)
      return saved ? JSON.parse(saved) : {}
    } catch {
      return {}
    }
  })

  const [lastVisit] = useState(() => {
    try {
      return localStorage.getItem(VISIT_KEY) || null
    } catch {
      return null
    }
  })

  // Save progress
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(solvedCases))
  }, [solvedCases])

  // Save secrets
  useEffect(() => {
    localStorage.setItem(SECRETS_KEY, JSON.stringify(unlockedSecrets))
  }, [unlockedSecrets])

  // Save hints record
  useEffect(() => {
    localStorage.setItem(HINTS_KEY, JSON.stringify(hintsRecord))
  }, [hintsRecord])

  // Update last visit
  useEffect(() => {
    localStorage.setItem(VISIT_KEY, new Date().toISOString())
  }, [])

  // Computed counts
  const totalSolved = solvedCases.filter(id => typeof id === 'number').length
  const totalSecretsSolved = solvedCases.filter(id => typeof id === 'string' && id.startsWith('s')).length
  const totalMetaSolved = solvedCases.filter(id => typeof id === 'string' && id.startsWith('m')).length

  // Computed scores (with hint penalties)
  const totalHintsUsed = Object.values(hintsRecord).reduce((sum, h) => sum + h, 0)

  const totalScore = solvedCases.reduce((sum, caseId) => {
    const key = String(caseId)
    const hints = hintsRecord[key] || 0
    return sum + puzzleScore(caseId, hints)
  }, 0)

  // Sync to leaderboard whenever scores or auth change
  useEffect(() => {
    if (!isAuthenticated || !user) return

    submitScore(user, {
      puzzlesSolved: totalSolved,
      secretsSolved: totalSecretsSolved,
      metaSolved: totalMetaSolved,
      hintsUsed: totalHintsUsed,
      totalScore,
    })
  }, [user, isAuthenticated, totalScore, totalSolved, totalSecretsSolved, totalMetaSolved, totalHintsUsed])

  const solveCase = useCallback((caseId, hintsUsed = 0) => {
    setSolvedCases(prev => {
      if (prev.includes(caseId)) return prev
      return [...prev, caseId]
    })
    setHintsRecord(prev => {
      const key = String(caseId)
      if (prev[key] !== undefined) return prev // already recorded
      return { ...prev, [key]: hintsUsed }
    })
  }, [])

  const isSolved = (caseId) => solvedCases.includes(caseId)

  const getHintsUsed = (caseId) => hintsRecord[String(caseId)] || 0

  const getCaseScore = (caseId) => {
    if (!solvedCases.includes(caseId)) return null
    return puzzleScore(caseId, hintsRecord[String(caseId)] || 0)
  }

  const isUnlocked = (caseId) => {
    if (caseId === 1) return true
    return solvedCases.includes(caseId - 1)
  }

  // Secret management
  const unlockSecret = useCallback((triggerId) => {
    setUnlockedSecrets(prev => {
      if (prev.includes(triggerId)) return prev
      return [...prev, triggerId]
    })
  }, [])

  const isSecretUnlocked = useCallback((triggerId) => {
    return unlockedSecrets.includes(triggerId)
  }, [unlockedSecrets])

  const isSecretNew = useCallback((triggerId) => {
    return unlockedSecrets.includes(triggerId) && !solvedCases.includes(`s${['konami', 'baker', 'lens', 'shadow'].indexOf(triggerId) + 1}`)
  }, [unlockedSecrets, solvedCases])

  const resetProgress = () => {
    setSolvedCases([])
    setUnlockedSecrets([])
    setHintsRecord({})
    localStorage.removeItem(STORAGE_KEY)
    localStorage.removeItem(SECRETS_KEY)
    localStorage.removeItem(HINTS_KEY)
  }

  const nextUnsolvedCase = (() => {
    for (let i = 1; i <= 24; i++) {
      if (!solvedCases.includes(i)) return i
    }
    return null
  })()

  const lastVisitFormatted = (() => {
    if (!lastVisit) return null
    try {
      const date = new Date(lastVisit)
      const now = new Date()
      const diffMs = now - date
      const diffMins = Math.floor(diffMs / 60000)
      const diffHours = Math.floor(diffMs / 3600000)
      const diffDays = Math.floor(diffMs / 86400000)

      if (diffMins < 2) return 'poco fa'
      if (diffMins < 60) return `${diffMins} minuti fa`
      if (diffHours < 24) return `${diffHours} or${diffHours === 1 ? 'a' : 'e'} fa`
      if (diffDays === 1) return 'ieri'
      if (diffDays < 7) return `${diffDays} giorni fa`
      return date.toLocaleDateString('it-IT', { day: 'numeric', month: 'long' })
    } catch {
      return null
    }
  })()

  return {
    solvedCases,
    solveCase,
    isSolved,
    isUnlocked,
    getHintsUsed,
    getCaseScore,
    hintsRecord,
    totalHintsUsed,
    totalScore,
    unlockedSecrets,
    unlockSecret,
    isSecretUnlocked,
    isSecretNew,
    resetProgress,
    totalSolved,
    totalSecretsSolved,
    totalMetaSolved,
    nextUnsolvedCase,
    lastVisit,
    lastVisitFormatted,
    user,
    username: user?.displayName || '',
  }
}
