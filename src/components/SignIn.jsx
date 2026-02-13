import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'

export default function SignIn() {
  const { signIn, isConfigured } = useAuth()
  const [signingIn, setSigningIn] = useState(false)
  const [error, setError] = useState('')

  const handleSignIn = async () => {
    setSigningIn(true)
    setError('')
    const success = await signIn()
    if (!success) {
      setError('Accesso annullato o non riuscito. Riprova.')
    }
    setSigningIn(false)
  }

  return (
    <div className="name-input-overlay">
      <div className="name-input-modal">
        <div className="name-input-icon">🕵️</div>
        <h2 className="name-input-title">Identifica il Detective</h2>
        <p className="name-input-desc">
          Accedi con Google per entrare nel fascicolo e comparire nella classifica.
          La tua identità sarà verificata.
        </p>

        {!isConfigured ? (
          <div className="signin-error-box">
            <p>⚠️ Autenticazione non configurata.</p>
          </div>
        ) : (
          <>
            <button
              className="btn-google"
              onClick={handleSignIn}
              disabled={signingIn}
            >
              <svg className="google-icon" viewBox="0 0 24 24" width="20" height="20">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              {signingIn ? 'Accesso in corso...' : 'Accedi con Google'}
            </button>

            {error && <p className="name-input-error">{error}</p>}
          </>
        )}

        <p className="name-input-note">
          Il tuo nome Google sarà visibile nella classifica pubblica.
        </p>
      </div>
    </div>
  )
}
