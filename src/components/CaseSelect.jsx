import { useNavigate } from 'react-router-dom'
import { useProgress } from '../hooks/useProgress'
import puzzles from '../data/puzzles'

export default function CaseSelect() {
  const navigate = useNavigate()
  const { isSolved, isUnlocked, totalSolved, resetProgress } = useProgress()

  const allSolved = totalSolved === puzzles.length

  return (
    <div className="case-select">
      <header className="case-header">
        <button className="btn-back" onClick={() => navigate('/')}>
          ← Indietro
        </button>
        <div className="header-center">
          <h1 className="case-title">Fascicolo dei Casi</h1>
          <p className="case-subtitle">{totalSolved} di {puzzles.length} casi risolti</p>
        </div>
        <div className="header-right">
          {totalSolved > 0 && (
            <button className="btn-reset" onClick={resetProgress}>
              Ricomincia
            </button>
          )}
        </div>
      </header>

      <div className="progress-bar-container">
        <div 
          className="progress-bar-fill" 
          style={{ width: `${(totalSolved / puzzles.length) * 100}%` }}
        />
      </div>

      {allSolved && (
        <div className="all-solved-banner" onClick={() => navigate('/victory')}>
          <span>🏆</span> Tutti i casi sono risolti! Visualizza il finale →
        </div>
      )}

      <div className="cases-grid">
        {puzzles.map((puzzle) => {
          const solved = isSolved(puzzle.id)
          const unlocked = isUnlocked(puzzle.id)

          return (
            <div
              key={puzzle.id}
              className={`case-card ${solved ? 'solved' : ''} ${unlocked ? 'unlocked' : 'locked'}`}
              onClick={() => unlocked && navigate(`/case/${puzzle.id}`)}
            >
              <div className="case-card-header">
                <span className="case-number">Caso #{puzzle.id}</span>
                <span className="case-difficulty">
                  {'★'.repeat(puzzle.difficulty)}{'☆'.repeat(5 - puzzle.difficulty)}
                </span>
              </div>

              <div className="case-card-icon">
                {unlocked ? puzzle.icon : '🔒'}
              </div>

              <h3 className="case-card-title">
                {unlocked ? puzzle.title : '???'}
              </h3>

              <p className="case-card-subtitle">
                {unlocked ? puzzle.subtitle : 'Risolvi il caso precedente per sbloccare'}
              </p>

              {solved && (
                <div className="case-solved-badge">
                  ✓ Risolto
                </div>
              )}

              <div className="case-card-type">
                {unlocked && (
                  <span className="type-badge">{getTypeLabel(puzzle.type)}</span>
                )}
              </div>
            </div>
          )
        })}
      </div>
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
  }
  return labels[type] || '🔍 Enigma'
}
