import NaveBar from './Component/NavBar'
import About from './Component/About'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import AboutContent from './Component/AboutContent'
import Skill from './Component/skill'
import Project from './Component/project'
import Footer from './Component/Footer'

function App() {
  return (
    <div>
      <Router>
      <NaveBar />
      </Router>
      <About />
      <AboutContent />
      <Skill />
      <Project />
      <Footer />
    </div>
  )
}

export default App
