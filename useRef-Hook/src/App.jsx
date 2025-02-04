import { useRef, useState, useEffect } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const btnref = useRef()

  useEffect(() => {
    console.log(`first randering..... `)

    btnref.current.style.backgroundColor = "red";

  },)


  return (
    <>
      <div className="card"> 
        <button ref={btnref} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
