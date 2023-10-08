import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import Nav from './components/Nav'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Landing from './components/Landing.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'

const router = createBrowserRouter([
  {
    path:'/MyPortfolio',
    element:<App/>,
    children:[
      {
        path:'',
        element:<Landing/>
      },
      {
        path:'about',
        element:<About/>
      },
      {
        path:'projects',
        element:<Projects/>
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
