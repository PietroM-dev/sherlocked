import { Routes, Route } from 'react-router-dom'
import { useProgress } from './hooks/useProgress'
import Landing from './components/Landing'
import CaseSelect from './components/CaseSelect'
import PuzzleView from './components/PuzzleView'
import Victory from './components/Victory'
import Leaderboard from './components/Leaderboard'
import NameInput from './components/NameInput'

function App() {
  const { username, setUsername } = useProgress()

  return (
    <div className="app">
      <div className="fog fog-1" />
      <div className="fog fog-2" />

      {!username && (
        <NameInput onSubmit={setUsername} />
      )}

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
