import NaveBar from './Component/NavBar'
import About from './Component/About'
import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AboutContent from './Component/AboutContent'
import Skill from './Component/skill'
import Project from './Component/project'
import Footer from './Component/Footer'

function App() {
  return (
      <Router>
      <NaveBar />
      <About />
      <AboutContent />
      <Skill />
      <Project />
      <Footer />
      </Router>
  )
}

export default App
