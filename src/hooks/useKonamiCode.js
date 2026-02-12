import { useState, useEffect, useCallback } from 'react'

const KONAMI_SEQUENCE = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight',
  'b', 'a'
]

export function useKonamiCode(onActivate) {
  const [index, setIndex] = useState(0)

  const handleKeyDown = useCallback((e) => {
    const key = e.key.toLowerCase ? e.key : e.key
    const expected = KONAMI_SEQUENCE[index]

    if (key === expected || key === expected.toLowerCase()) {
      if (index + 1 === KONAMI_SEQUENCE.length) {
        onActivate()
        setIndex(0)
      } else {
        setIndex(prev => prev + 1)
      }
    } else {
      setIndex(0)
    }
  }, [index, onActivate])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])
}
