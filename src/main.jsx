import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import Nav from './components/Nav'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Landing from './components/Landing.jsx'
import About from './components/About.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'',
        element:<Landing/>
      },
      {
        path:'about',
        element:<About/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <Nav/> */}
    {/* <App /> */}
  </React.StrictMode>,
)
