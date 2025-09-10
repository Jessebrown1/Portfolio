import React from 'react'
import Home from '../Pages/Home/Home'
import Contact from '../Pages/Contact/Contact'
import About from '../Pages/About/About'
import Portfolio from '../Pages/Portfolio/Portfolio'
import {RouterProvider, createBrowserRouter} from "react-router"
import Applayout from './Components/Applayout'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Applayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        }, 

        {
          path: '/about',
          element: <About />,
        },

        {
          path: '/portfolio',
          element: <Portfolio />,
        },

        {
          path: '/contact',
          element: <Contact />,
        },
      ]
    }
  ])
  return <RouterProvider router={router} />; 
}

export default App 