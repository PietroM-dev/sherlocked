import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProgress } from '../hooks/useProgress'
import { useKonamiCode } from '../hooks/useKonamiCode'
import puzzles from '../data/puzzles'
import secretPuzzles from '../data/secretPuzzles'
import SecretToast from './SecretToast'

export default function CaseSelect() {
  const navigate = useNavigate()
  const {
    isSolved, isUnlocked, totalSolved, totalSecretsSolved,
    resetProgress, unlockSecret, isSecretUnlocked, unlockedSecrets
  } = useProgress()

  const allSolved = totalSolved === puzzles.length

  // Easter egg: Konami Code
  const [showSecretToast, setShowSecretToast] = useState(false)
  const [secretToastName, setSecretToastName] = useState('')

  const handleKonami = useCallback(() => {
    if (!isSecretUnlocked('konami')) {
      unlockSecret('konami')
      setSecretToastName('Il Codice del Hacker')
      setShowSecretToast(true)
    }
  }, [unlockSecret, isSecretUnlocked])

  useKonamiCode(handleKonami)

  // Easter egg: hidden scroll element
  const handleShadowClick = useCallback(() => {
    if (!isSecretUnlocked('shadow')) {
      unlockSecret('shadow')
      setSecretToastName('Il Fantasma della Mezzanotte')
      setShowSecretToast(true)
    }
  }, [unlockSecret, isSecretUnlocked])

  // Get unlocked secret puzzles
  const visibleSecrets = secretPuzzles.filter(sp =>
    isSecretUnlocked(sp.secretTrigger)
  )

  return (
    <div className="case-select">
      <header className="case-header">
        <button className="btn-back" onClick={() => navigate('/')}>
          ← Indietro
        </button>
        <div className="header-center">
          <h1 className="case-title">Fascicolo dei Casi</h1>
          <p className="case-subtitle">
            {totalSolved} di {puzzles.length} casi risolti
            {totalSecretsSolved > 0 && ` · ${totalSecretsSolved} segreti`}
          </p>
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

      {/* Secret Cases Section */}
      {visibleSecrets.length > 0 && (
        <div className="secret-section">
          <div className="secret-section-header">
            <div className="secret-section-line" />
            <h2 className="secret-section-title">🔓 Fascicoli Segreti</h2>
            <div className="secret-section-line" />
          </div>
          <p className="secret-section-subtitle">
            {visibleSecrets.length} di {secretPuzzles.length} segreti scoperti
          </p>
          <div className="cases-grid">
            {visibleSecrets.map((puzzle) => {
              const solved = isSolved(puzzle.id)
              return (
                <div
                  key={puzzle.id}
                  className={`case-card secret-card ${solved ? 'solved' : 'unlocked'}`}
                  onClick={() => navigate(`/case/${puzzle.id}`)}
                >
                  <div className="case-card-header">
                    <span className="case-number secret-label">Segreto</span>
                    <span className="case-difficulty">
                      {'★'.repeat(puzzle.difficulty)}{'☆'.repeat(5 - puzzle.difficulty)}
                    </span>
                  </div>

                  <div className="case-card-icon">
                    {puzzle.icon}
                  </div>

                  <h3 className="case-card-title">
                    {puzzle.title}
                  </h3>

                  <p className="case-card-subtitle">
                    {puzzle.subtitle}
                  </p>

                  {solved && (
                    <div className="case-solved-badge">
                      ✓ Risolto
                    </div>
                  )}

                  <div className="case-card-type">
                    <span className="type-badge secret-trigger-badge">
                      🔑 {puzzle.triggerLabel}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Hidden easter egg element at the very bottom */}
      <div className="hidden-shadow" onClick={handleShadowClick}>
        {isSecretUnlocked('shadow') ? '👻' : 'Non c\'è niente qui... o forse sì?'}
      </div>

      <SecretToast
        show={showSecretToast}
        secretName={secretToastName}
        onClose={() => setShowSecretToast(false)}
      />
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
