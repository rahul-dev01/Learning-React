import React from 'react'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'

import './App.css'
import Navbar from './components/navbar'
import Home from './components/home'
import Login from './components/login'
import About from './components/About'
import User from './components/user'
function App() {

  const router = createBrowserRouter([
    {
      path :"/",
      element :  <Navbar />
    },
    
    {
      path :"/home",
      element :  <><Navbar /><Home/></>
    },
    {
      path :"/login",
      element : <><Navbar /><Login/></>  
    },
    {
      path :"/about",
      element : <><Navbar /><About/></>   
    },

    {
      path :"/user/:userName",
      element : <><Navbar /><User/></>  
    },

  ])

  return (
    <>

        <RouterProvider router={router}/>
    </>
  )
}

export default App
