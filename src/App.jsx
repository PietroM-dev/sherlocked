import { Routes, Route } from 'react-router-dom'
import Landing from './components/Landing'
import CaseSelect from './components/CaseSelect'
import PuzzleView from './components/PuzzleView'
import Victory from './components/Victory'

function App() {
  return (
    <div className="app">
      <div className="fog fog-1" />
      <div className="fog fog-2" />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/cases" element={<CaseSelect />} />
        <Route path="/case/:id" element={<PuzzleView />} />
        <Route path="/victory" element={<Victory />} />
      </Routes>
    </div>
  )
}

export default App
