import { useNavigate } from 'react-router-dom'
import { useProgress } from '../hooks/useProgress'

export default function Landing() {
  const navigate = useNavigate()
  const { totalSolved } = useProgress()

  return (
    <div className="landing">
      <div className="landing-content">
        <div className="landing-badge">Enigmi Investigativi</div>
        
        <h1 className="landing-title">
          <span className="title-icon">🔍</span>
          <span className="title-text">SHERLOCKED</span>
        </h1>
        
        <p className="landing-subtitle">
          Otto enigmi. Una sola verità.<br />
          Hai la mente per risolvere il caso?
        </p>

        <div className="landing-stats">
          {totalSolved > 0 && (
            <div className="stat-badge">
              <span className="stat-number">{totalSolved}</span>
              <span className="stat-label">/ 8 casi risolti</span>
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
        <div className="deco-magnifier">🔎</div>
        <div className="deco-line" />
      </div>
    </div>
  )
}
