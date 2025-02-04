import React, { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'

import { counterContext } from './context/context'

function App() {
  const [count, setcount] = useState(0)


  return (
    <>
      <counterContext.Provider value={count}>
        <div>
          <h1>{count}</h1>
        </div>

        <div>
          <button onClick={() => setcount(count + 1)} >Add me</button>
        </div>

        <div>
          <Navbar />
        </div>
        </counterContext.Provider>
    </>
  )
}

export default App


