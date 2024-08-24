import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home'
import CodingSkills from './pages/CodingSkills/CodingSkills'

function App() {
  return (
    <>
      <div>
       <Home/>
       <CodingSkills/>
      </div>
    </>
  )
}

export default App
