import { useState } from 'react'

export default function NameInput({ onSubmit }) {
  const [name, setName] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = () => {
    const trimmed = name.trim()
    if (trimmed.length < 2) {
      setError('Il nome deve avere almeno 2 caratteri.')
      return
    }
    if (trimmed.length > 20) {
      setError('Il nome non può superare i 20 caratteri.')
      return
    }
    onSubmit(trimmed)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && name.trim()) {
      handleSubmit()
    }
  }

  return (
    <div className="name-input-overlay">
      <div className="name-input-modal">
        <div className="name-input-icon">🕵️</div>
        <h2 className="name-input-title">Identità del Detective</h2>
        <p className="name-input-desc">
          Inserisci il tuo nome per entrare nel fascicolo e comparire nella classifica.
        </p>

        <div className="name-input-field">
          <input
            type="text"
            className="puzzle-input"
            placeholder="Il tuo nome..."
            value={name}
            onChange={(e) => { setName(e.target.value); setError('') }}
            onKeyDown={handleKeyDown}
            maxLength={20}
            autoFocus
          />
        </div>

        {error && <p className="name-input-error">{error}</p>}

        <button
          className="btn btn-primary name-input-btn"
          onClick={handleSubmit}
          disabled={!name.trim()}
        >
          Conferma Identità →
        </button>

        <p className="name-input-note">
          Il nome sarà visibile nella classifica pubblica.
        </p>
      </div>
    </div>
  )
}
