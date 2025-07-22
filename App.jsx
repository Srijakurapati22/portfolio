import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home'
import Contact from './pages/contact'
import About from './pages/about'
import Projects from './pages/projects';


import {Routes, Route} from 'react-router-dom'
import Navbar from './nav'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<p>Main Page</p>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='*' element={<p>Invalid</p>} />
      </Routes>
    </>
  )
}

export default App
