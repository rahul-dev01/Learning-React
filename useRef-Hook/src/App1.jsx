import { useRef, useState, useEffect } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const a = useRef(1);
  useEffect(() => {
    a.current = a.current + 1
    console.log(`Randering and the value of a is : ${a.current}`)
  },)


  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>{a.current}</p>
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
