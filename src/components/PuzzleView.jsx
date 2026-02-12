import { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useProgress } from '../hooks/useProgress'
import puzzles from '../data/puzzles'

export default function PuzzleView() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { solveCase, isSolved, isUnlocked } = useProgress()

  const puzzle = puzzles.find(p => p.id === Number(id))
  const [answer, setAnswer] = useState('')
  const [hintsUsed, setHintsUsed] = useState(0)
  const [feedback, setFeedback] = useState(null)
  const [solved, setSolved] = useState(false)
  const [shaking, setShaking] = useState(false)
  const [showLore, setShowLore] = useState(true)
  const [showSaveToast, setShowSaveToast] = useState(false)
  const inputRef = useRef(null)

  // Reset all state when puzzle id changes (navigating between cases)
  useEffect(() => {
    setAnswer('')
    setFeedback(null)
    setHintsUsed(0)
    setShaking(false)
    setShowLore(true)
    setShowSaveToast(false)
    const currentPuzzle = puzzles.find(p => p.id === Number(id))
    setSolved(currentPuzzle ? isSolved(currentPuzzle.id) : false)
  }, [id])

  useEffect(() => {
    if (!showLore && inputRef.current) {
      inputRef.current.focus()
    }
  }, [showLore])

  if (!puzzle) {
    return (
      <div className="puzzle-view">
        <div className="puzzle-not-found">
          <h2>Caso non trovato</h2>
          <button className="btn btn-primary" onClick={() => navigate('/cases')}>
            Torna ai Casi
          </button>
        </div>
      </div>
    )
  }

  if (!isUnlocked(puzzle.id) && !isSolved(puzzle.id)) {
    return (
      <div className="puzzle-view">
        <div className="puzzle-locked">
          <div className="locked-icon">🔒</div>
          <h2>Caso Bloccato</h2>
          <p>Devi risolvere il caso precedente per accedere a questo.</p>
          <button className="btn btn-primary" onClick={() => navigate('/cases')}>
            Torna ai Casi
          </button>
        </div>
      </div>
    )
  }

  const normalize = (str) => str.toLowerCase().trim()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '')

  const checkAnswer = () => {
    const normalizedInput = normalize(answer)
    const isCorrect = puzzle.acceptedAnswers.some(
      accepted => normalize(accepted) === normalizedInput
    )

    if (isCorrect) {
      setSolved(true)
      solveCase(puzzle.id)
      setFeedback({ type: 'success', message: puzzle.successMessage })
      setShowSaveToast(true)
      setTimeout(() => setShowSaveToast(false), 3000)
    } else {
      setFeedback({ type: 'error', message: 'Non è la risposta corretta. Riprova...' })
      setShaking(true)
      setTimeout(() => setShaking(false), 600)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && answer.trim()) {
      checkAnswer()
    }
  }

  const showHint = () => {
    if (hintsUsed < puzzle.hints.length) {
      setHintsUsed(prev => prev + 1)
    }
  }

  const nextCase = puzzles.find(p => p.id === puzzle.id + 1)

  if (showLore) {
    return (
      <div className="puzzle-view">
        <div className="lore-screen">
          <div className="lore-case-number">Caso #{puzzle.id}</div>
          <h1 className="lore-title">{puzzle.title}</h1>
          <div className="lore-divider">
            <span>◆</span>
          </div>
          <p className="lore-text">{puzzle.lore}</p>
          <p className="lore-description">{puzzle.description}</p>
          <button 
            className="btn btn-primary"
            onClick={() => setShowLore(false)}
          >
            Esamina l'Enigma →
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="puzzle-view">
      <header className="puzzle-header">
        <button className="btn-back" onClick={() => navigate('/cases')}>
          ← Casi
        </button>
        <div className="puzzle-header-center">
          <span className="puzzle-header-icon">{puzzle.icon}</span>
          <span className="puzzle-header-title">Caso #{puzzle.id} — {puzzle.title}</span>
        </div>
        <div className="puzzle-header-right">
          <span className="difficulty-stars">
            {'★'.repeat(puzzle.difficulty)}{'☆'.repeat(5 - puzzle.difficulty)}
          </span>
        </div>
      </header>

      <div className="puzzle-content">
        <div className="puzzle-question-card">
          <div className="question-type-badge">{getTypeLabel(puzzle.type)}</div>
          <pre className="puzzle-question">{puzzle.question}</pre>
        </div>

        {!solved && (
          <div className={`puzzle-input-section ${shaking ? 'shake' : ''}`}>
            <div className="input-group">
              <input
                ref={inputRef}
                type="text"
                className="puzzle-input"
                placeholder="Scrivi la tua risposta..."
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                onKeyDown={handleKeyDown}
                autoFocus
              />
              <button
                className="btn btn-submit"
                onClick={checkAnswer}
                disabled={!answer.trim()}
              >
                Verifica
              </button>
            </div>
          </div>
        )}

        {feedback && (
          <div className={`feedback ${feedback.type}`}>
            <div className="feedback-icon">
              {feedback.type === 'success' ? '✓' : '✗'}
            </div>
            <p className="feedback-message">{feedback.message}</p>
          </div>
        )}

        {!solved && (
          <div className="hints-section">
            {puzzle.hints.slice(0, hintsUsed).map((hint, i) => (
              <div key={i} className="hint-card">
                <span className="hint-label">Indizio {i + 1}:</span>
                <span className="hint-text">{hint}</span>
              </div>
            ))}
            {hintsUsed < puzzle.hints.length && (
              <button className="btn btn-hint" onClick={showHint}>
                💡 Mostra Indizio ({hintsUsed}/{puzzle.hints.length})
              </button>
            )}
          </div>
        )}

        {solved && (
          <div className="solved-actions">
            {nextCase ? (
              <button
                className="btn btn-primary"
                onClick={() => navigate(`/case/${nextCase.id}`)}
              >
                Prossimo Caso →
              </button>
            ) : (
              <button
                className="btn btn-primary"
                onClick={() => navigate('/victory')}
              >
                🏆 Vedi il Finale
              </button>
            )}
            <button
              className="btn btn-secondary"
              onClick={() => navigate('/cases')}
            >
              Torna ai Casi
            </button>
          </div>
        )}
      </div>

      {showSaveToast && (
        <div className="save-toast">
          <span className="save-toast-icon">💾</span>
          Progresso salvato
        </div>
      )}
    </div>
  )
}

function getTypeLabel(type) {
  const labels = {
    riddle: '🧩 Indovinello',
    cipher: '🔐 Cifrario',
    sequence: '🔢 Sequenza',
    anagram: '🔤 Anagramma',
    math: '🧮 Logica Matematica',
    hidden: '📜 Messaggio Nascosto',
    morse: '⚡ Codice Morse',
    mirror: '🪞 Lettura Speculare',
    lateral: '🧠 Pensiero Laterale',
    phone: '📞 Codice Telefonico',
    grid: '🏛️ Labirinto di Lettere',
    logic: '🤫 Deduzione Logica',
    equations: '⚖️ Sistema di Equazioni',
    vigenere: '🗝️ Cifrario di Vigenère',
    optimization: '🌉 Ottimizzazione',
    roman: '🏛️ Numeri Romani',
    multistep: '🏆 Enigma a Strati',
  }
  return labels[type] || '🔍 Enigma'
}
