import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProgress } from '../hooks/useProgress'
import puzzles from '../data/puzzles'
import SecretToast from './SecretToast'

export default function Landing() {
  const navigate = useNavigate()
  const { totalSolved, lastVisitFormatted, unlockSecret, isSecretUnlocked } = useProgress()
  const isReturning = totalSolved > 0 && lastVisitFormatted

  // Easter egg: click magnifying glass 5 times
  const [lensClicks, setLensClicks] = useState(0)
  const [showSecretToast, setShowSecretToast] = useState(false)

  const handleLensClick = useCallback(() => {
    const newCount = lensClicks + 1
    setLensClicks(newCount)
    if (newCount >= 5 && !isSecretUnlocked('lens')) {
      unlockSecret('lens')
      setShowSecretToast(true)
    }
  }, [lensClicks, unlockSecret, isSecretUnlocked])

  return (
    <div className="landing">
      <div className="landing-content">
        <div className="landing-badge">Enigmi Investigativi</div>
        
        <h1 className="landing-title">
          <span className="title-icon">🔍</span>
          <span className="title-text">SHERLOCKED</span>
        </h1>

        {isReturning ? (
          <div className="welcome-back">
            <p className="welcome-back-text">
              Bentornato, Detective.
            </p>
            <p className="welcome-back-sub">
              Ultima visita: {lastVisitFormatted}
            </p>
          </div>
        ) : (
          <p className="landing-subtitle">
            Ventiquattro enigmi. Una sola verità.<br />
            Hai la mente per risolvere il caso?
          </p>
        )}

        <div className="landing-stats">
          {totalSolved > 0 && (
            <div className="stat-badge">
              <span className="stat-number">{totalSolved}</span>
              <span className="stat-label">/ {puzzles.length} casi risolti</span>
            </div>
          )}
        </div>

        <div className="landing-actions">
          <button 
            className="btn btn-primary"
            onClick={() => navigate('/cases')}
          >
            <span className="btn-icon">🕵️</span>
            {totalSolved > 0 ? 'Continua l\'Indagine' : 'Inizia l\'Indagine'}
          </button>
        </div>

        <div className="landing-quote">
          <blockquote>
            "Quando hai eliminato l'impossibile, ciò che resta,<br />
            per quanto improbabile, deve essere la verità."
          </blockquote>
          <cite>— Sherlock Holmes</cite>
        </div>
      </div>

      <div className="landing-decoration">
        <div className="deco-line" />
        <div
          className={`deco-magnifier ${lensClicks > 0 ? 'clicked' : ''}`}
          onClick={handleLensClick}
          title=""
          style={{ cursor: 'default' }}
        >
          🔎
        </div>
        <div className="deco-line" />
      </div>

      <SecretToast
        show={showSecretToast}
        secretName="L'Occhio del Detective"
        onClose={() => setShowSecretToast(false)}
      />
    </div>
  )
}
