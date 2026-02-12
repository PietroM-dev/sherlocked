import { useNavigate } from 'react-router-dom'
import { useProgress } from '../hooks/useProgress'
import puzzles from '../data/puzzles'

export default function Landing() {
  const navigate = useNavigate()
  const { totalSolved, nextUnsolvedCase, lastVisitFormatted } = useProgress()
  const isReturning = totalSolved > 0 && lastVisitFormatted

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
          {isReturning && nextUnsolvedCase ? (
            <>
              <button 
                className="btn btn-primary"
                onClick={() => navigate(`/case/${nextUnsolvedCase}`)}
              >
                <span className="btn-icon">🕵️</span>
                Continua — Caso #{nextUnsolvedCase}
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => navigate('/cases')}
              >
                Vedi tutti i Casi
              </button>
            </>
          ) : totalSolved === puzzles.length ? (
            <>
              <button 
                className="btn btn-primary"
                onClick={() => navigate('/victory')}
              >
                <span className="btn-icon">🏆</span>
                Rivedi il Finale
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => navigate('/cases')}
              >
                Vedi tutti i Casi
              </button>
            </>
          ) : (
            <button 
              className="btn btn-primary"
              onClick={() => navigate('/cases')}
            >
              <span className="btn-icon">🕵️</span>
              Inizia l'Indagine
            </button>
          )}
        </div>

        {isReturning && (
          <div className="save-indicator">
            <span className="save-icon">💾</span>
            <span>Il tuo progresso è salvato automaticamente</span>
          </div>
        )}

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
        <div className="deco-magnifier">🔎</div>
        <div className="deco-line" />
      </div>
    </div>
  )
}
