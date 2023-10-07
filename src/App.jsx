// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Outlet } from 'react-router-dom'
import './App.css'
import Landing from './components/Landing'
import Nav from './components/Nav'
import Foot from './components/Foot'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
    <Outlet/>
    <Foot/>
    </>
  )
}

export default App
