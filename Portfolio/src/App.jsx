import React, { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Home from './Component/Home/Home'
import About from './Component/About/About'
import Skill from './Component/Skill/Skill'
import Project from './Component/Project/Project'
import Footer from './Component/Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/skill' element={<Skill/>}/>
          <Route path='/project' element={<Project/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
