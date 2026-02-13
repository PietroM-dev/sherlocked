import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProgress } from '../hooks/useProgress'
import { getLeaderboard } from '../services/leaderboard'
import { isConfigured } from '../firebase'
import puzzles from '../data/puzzles'

export default function Leaderboard() {
  const navigate = useNavigate()
  const { user, username, totalSolved, totalSecretsSolved, totalMetaSolved, totalHintsUsed, totalScore } = useProgress()
  const [entries, setEntries] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    let cancelled = false

    async function fetchData() {
      setLoading(true)
      setError(false)

      const data = await getLeaderboard(50)

      if (cancelled) return

      if (data === null) {
        setError(true)
      } else {
        setEntries(data)
      }
      setLoading(false)
    }

    fetchData()
    return () => { cancelled = true }
  }, [])

  const myTotalScore = totalScore

  return (
    <div className="leaderboard">
      <header className="leaderboard-header">
        <button className="btn-back" onClick={() => navigate('/cases')}>
          ← Indietro
        </button>
        <div className="header-center">
          <h1 className="leaderboard-title">🏆 Classifica Detective</h1>
          <p className="leaderboard-subtitle">I migliori investigatori di Sherlocked</p>
        </div>
        <div className="header-right" />
      </header>

      {/* Current player stats */}
      {username && (
        <div className="leaderboard-my-stats">
          <div className="my-stats-name">
            {user?.photoURL ? (
              <img className="my-stats-avatar" src={user.photoURL} alt="" referrerPolicy="no-referrer" />
            ) : (
              <span className="my-stats-icon">🕵️</span>
            )}
            <span>{username}</span>
          </div>
          <div className="my-stats-scores">
            <div className="my-stat">
              <span className="my-stat-value">{totalSolved}</span>
              <span className="my-stat-label">/ {puzzles.length} casi</span>
            </div>
            {totalSecretsSolved > 0 && (
              <div className="my-stat">
                <span className="my-stat-value">{totalSecretsSolved}</span>
                <span className="my-stat-label">segreti</span>
              </div>
            )}
            {totalMetaSolved > 0 && (
              <div className="my-stat">
                <span className="my-stat-value">{totalMetaSolved}</span>
                <span className="my-stat-label">collegati</span>
              </div>
            )}
            {totalHintsUsed > 0 && (
              <div className="my-stat my-stat-penalty">
                <span className="my-stat-value">−{totalHintsUsed}</span>
                <span className="my-stat-label">indizi</span>
              </div>
            )}
            <div className="my-stat my-stat-total">
              <span className="my-stat-value">{myTotalScore}</span>
              <span className="my-stat-label">punti</span>
            </div>
          </div>
        </div>
      )}

      {/* Scoring explanation */}
      <div className="scoring-info">
        <span>Caso = 3 pt · Segreto = 5 pt · Collegato = 7 pt · Ogni indizio = −1 pt</span>
      </div>

      {/* Leaderboard table */}
      <div className="leaderboard-table-container">
        {loading && (
          <div className="leaderboard-loading">
            <div className="loading-spinner" />
            <p>Caricamento classifica...</p>
          </div>
        )}

        {error && !loading && (
          <div className="leaderboard-error">
            <p className="leaderboard-error-icon">⚠️</p>
            <p>Classifica non disponibile.</p>
            {!isConfigured && (
              <p className="leaderboard-error-hint">
                Firebase non è configurato. La classifica online richiede una connessione a Firebase.
              </p>
            )}
          </div>
        )}

        {!loading && !error && entries && (
          entries.length === 0 ? (
            <div className="leaderboard-empty">
              <p className="leaderboard-empty-icon">📋</p>
              <p>Nessun detective in classifica.</p>
              <p className="leaderboard-empty-hint">Risolvi il tuo primo caso per entrare!</p>
            </div>
          ) : (
            <table className="leaderboard-table">
              <thead>
                <tr>
                  <th className="col-rank">#</th>
                  <th className="col-name">Detective</th>
                  <th className="col-cases">Casi</th>
                  <th className="col-secrets">Segreti</th>
                  <th className="col-meta">Collegati</th>
                  <th className="col-hints">Indizi</th>
                  <th className="col-score">Punti</th>
                </tr>
              </thead>
              <tbody>
                {entries.map((entry) => {
                  const isMe = user && entry.id === user.uid
                  return (
                    <tr
                      key={entry.id}
                      className={`leaderboard-row ${isMe ? 'is-me' : ''} ${entry.rank <= 3 ? `top-${entry.rank}` : ''}`}
                    >
                      <td className="col-rank">
                        {entry.rank === 1 ? '🥇' : entry.rank === 2 ? '🥈' : entry.rank === 3 ? '🥉' : entry.rank}
                      </td>
                      <td className="col-name">
                        <span className="entry-name-cell">
                          {entry.photoURL && (
                            <img className="entry-avatar" src={entry.photoURL} alt="" referrerPolicy="no-referrer" />
                          )}
                          <span>{entry.name}</span>
                          {isMe && <span className="me-badge">tu</span>}
                        </span>
                      </td>
                      <td className="col-cases">{entry.puzzlesSolved || 0}</td>
                      <td className="col-secrets">{entry.secretsSolved || 0}</td>
                      <td className="col-meta">{entry.metaSolved || 0}</td>
                      <td className="col-hints">{entry.hintsUsed ? `−${entry.hintsUsed}` : '0'}</td>
                      <td className="col-score">{entry.totalScore || 0}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          )
        )}
      </div>
    </div>
  )
}
