import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Profile from './pages/Profile';

function App() {

  return (
    <Router>
      <Routes>
      <Route path="/:id" element={<Profile />} />
        <Route path="/" element={<Profile/>} />
      </Routes>
    </Router>
  )
}

export default App
