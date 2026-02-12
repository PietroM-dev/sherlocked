import { useNavigate } from 'react-router-dom'
import { useProgress } from '../hooks/useProgress'
import puzzles from '../data/puzzles'

export default function Victory() {
  const navigate = useNavigate()
  const { totalSolved, resetProgress } = useProgress()
  const allSolved = totalSolved === puzzles.length

  if (!allSolved) {
    return (
      <div className="victory">
        <div className="victory-content">
          <div className="victory-icon">🔍</div>
          <h1>L'indagine non è ancora conclusa</h1>
          <p>Hai risolto {totalSolved} casi su {puzzles.length}. Continua a investigare!</p>
          <button className="btn btn-primary" onClick={() => navigate('/cases')}>
            Torna ai Casi
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="victory">
      <div className="victory-confetti">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="confetti-piece"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              backgroundColor: ['#d4a853', '#c9302c', '#2d5a27', '#1a3a5c', '#7b2d8e'][Math.floor(Math.random() * 5)],
            }}
          />
        ))}
      </div>
      
      <div className="victory-content">
        <div className="victory-badge">Caso Chiuso</div>
        
        <div className="victory-icon">🏆</div>
        
        <h1 className="victory-title">Congratulazioni, Detective!</h1>
        
        <div className="victory-divider">
          <span>◆</span>
        </div>
        
        <p className="victory-text">
          Hai risolto tutti i {puzzles.length} casi con successo.<br />
          La verità è stata portata alla luce e la giustizia è stata fatta.
        </p>

        <div className="victory-quote">
          <blockquote>
            "Il mondo è pieno di cose ovvie che nessuno<br />
            si prende mai la briga di osservare."
          </blockquote>
          <cite>— Sherlock Holmes</cite>
        </div>

        <div className="victory-stats">
          <div className="stat-card">
            <div className="stat-value">{totalSolved}</div>
            <div className="stat-name">Casi Risolti</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">🧠</div>
            <div className="stat-name">Mente Brillante</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">🏅</div>
            <div className="stat-name">Detective Supremo</div>
          </div>
        </div>

        <div className="victory-actions">
          <button 
            className="btn btn-primary"
            onClick={() => {
              resetProgress()
              navigate('/cases')
            }}
          >
            🔄 Gioca di Nuovo
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => navigate('/')}
          >
            Torna alla Home
          </button>
        </div>
      </div>
    </div>
  )
}
