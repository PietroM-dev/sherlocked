import { useState, useEffect, useCallback } from 'react'
import { submitScore } from '../services/leaderboard'

const STORAGE_KEY = 'sherlocked-progress'
const SECRETS_KEY = 'sherlocked-secrets'
const VISIT_KEY = 'sherlocked-last-visit'
const NAME_KEY = 'sherlocked-username'

export function useProgress() {
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

  const [username, setUsernameState] = useState(() => {
    try {
      return localStorage.getItem(NAME_KEY) || ''
    } catch {
      return ''
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

  // Update last visit
  useEffect(() => {
    localStorage.setItem(VISIT_KEY, new Date().toISOString())
  }, [])

  // Computed scores
  const totalSolved = solvedCases.filter(id => typeof id === 'number').length
  const totalSecretsSolved = solvedCases.filter(id => typeof id === 'string' && id.startsWith('s')).length
  const totalMetaSolved = solvedCases.filter(id => typeof id === 'string' && id.startsWith('m')).length

  // Sync to leaderboard whenever scores or username change
  useEffect(() => {
    if (!username) return

    submitScore(username, {
      puzzlesSolved: totalSolved,
      secretsSolved: totalSecretsSolved,
      metaSolved: totalMetaSolved,
    })
  }, [username, totalSolved, totalSecretsSolved, totalMetaSolved])

  const setUsername = useCallback((name) => {
    setUsernameState(name)
    localStorage.setItem(NAME_KEY, name)
  }, [])

  const solveCase = (caseId) => {
    setSolvedCases(prev => {
      if (prev.includes(caseId)) return prev
      return [...prev, caseId]
    })
  }

  const isSolved = (caseId) => solvedCases.includes(caseId)

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
    localStorage.removeItem(STORAGE_KEY)
    localStorage.removeItem(SECRETS_KEY)
    // Note: we don't reset username on progress reset
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
    username,
    setUsername,
  }
}
