import Hero from './components/Hero'
import Navigation from './components/Navigation'
import Research from './components/Research'
import Publications from './components/Publications'
import Metrics from './components/Metrics'
import PeptideVisualization from './components/PeptideVisualization'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <Research />
      <PeptideVisualization />
      <Publications />
      <Metrics />
      <Contact />
    </div>
  )
}

export default App