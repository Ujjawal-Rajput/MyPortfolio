// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Outlet } from 'react-router-dom'
import './App.css'
import ParticlesComponent from './components/particles'
import Nav from './components/Nav'
import Foot from './components/Foot'

function App() {

  return (
    <>
      <ParticlesComponent id="particles "/>
      <Nav />
      <Outlet />
      <Foot />
    </>
  )
}

export default App
