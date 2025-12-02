import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Project from './pages/Project'
import Agence from './pages/Agence'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/projects' element={<Project />}/>
        <Route path='/agence' element={<Agence />}/>
      </Routes>
    </div>
  )
}

export default App
