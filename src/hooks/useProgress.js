import { useState, useEffect } from 'react'

const STORAGE_KEY = 'sherlocked-progress'

export function useProgress() {
  const [solvedCases, setSolvedCases] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(solvedCases))
  }, [solvedCases])

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

  return { solvedCases, solveCase, isSolved, isUnlocked, resetProgress, totalSolved }
}
