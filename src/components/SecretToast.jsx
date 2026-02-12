import { useState, useEffect } from 'react'

export default function SecretToast({ show, secretName, onClose }) {
  const [visible, setVisible] = useState(false)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    if (show) {
      setVisible(true)
      setExiting(false)
      const timer = setTimeout(() => {
        setExiting(true)
        setTimeout(() => {
          setVisible(false)
          setExiting(false)
          onClose?.()
        }, 500)
      }, 4000)
      return () => clearTimeout(timer)
    }
  }, [show, onClose])

  if (!visible) return null

  return (
    <div className={`secret-toast-overlay ${exiting ? 'exiting' : ''}`}>
      <div className="secret-toast">
        <div className="secret-toast-glitch">
          <span className="secret-toast-icon">🔓</span>
        </div>
        <div className="secret-toast-content">
          <p className="secret-toast-title">Fascicolo Segreto Scoperto</p>
          <p className="secret-toast-name">{secretName}</p>
        </div>
        <div className="secret-toast-hint">
          Controlla la sezione segreta nei Casi
        </div>
      </div>
    </div>
  )
}
