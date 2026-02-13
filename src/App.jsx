import { Routes, Route } from 'react-router-dom'
import { useAuth } from './hooks/useAuth'
import Landing from './components/Landing'
import CaseSelect from './components/CaseSelect'
import PuzzleView from './components/PuzzleView'
import Victory from './components/Victory'
import Leaderboard from './components/Leaderboard'
import SignIn from './components/SignIn'

function App() {
  const { isAuthenticated, loading } = useAuth()

  // Show nothing while Firebase checks auth state
  if (loading) {
    return (
      <div className="app">
        <div className="fog fog-1" />
        <div className="fog fog-2" />
        <div className="auth-loading">
          <div className="loading-spinner" />
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      <div className="fog fog-1" />
      <div className="fog fog-2" />

      {!isAuthenticated && <SignIn />}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/cases" element={<CaseSelect />} />
        <Route path="/case/:id" element={<PuzzleView />} />
        <Route path="/victory" element={<Victory />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </div>
  )
}

export default App
