import { useState, useEffect } from 'react'

const STORAGE_KEY = 'sherlocked-progress'
const VISIT_KEY = 'sherlocked-last-visit'

export function useProgress() {
  const [solvedCases, setSolvedCases] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  const [lastVisit, setLastVisit] = useState(() => {
    try {
      return localStorage.getItem(VISIT_KEY) || null
    } catch {
      return null
    }
  })

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(solvedCases))
  }, [solvedCases])

  // Update last visit timestamp on mount
  useEffect(() => {
    const now = new Date().toISOString()
    localStorage.setItem(VISIT_KEY, now)
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

  const resetProgress = () => {
    setSolvedCases([])
    localStorage.removeItem(STORAGE_KEY)
  }

  const totalSolved = solvedCases.length

  // Find the next unsolved case id
  const nextUnsolvedCase = (() => {
    for (let i = 1; i <= 24; i++) {
      if (!solvedCases.includes(i)) return i
    }
    return null
  })()

  // Format the last visit date for display
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
    resetProgress,
    totalSolved,
    nextUnsolvedCase,
    lastVisit,
    lastVisitFormatted,
  }
}
