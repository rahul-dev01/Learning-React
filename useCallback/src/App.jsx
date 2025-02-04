import './App.css'
import Navbar from './component/Navbar'
import { useState } from 'react'

function App() {
  const [adjective, setadjective] = useState("Good")

  const getAdjective = ()=>{
      setadjective("Another")
  }
  return (
    <>
      <div>
        <Navbar adjective={"Good"}  getAdjective={getAdjective}/>

      </div>

    </>
  )
}

export default App


// it is like Usememo it is rembering the function and useMomo remembering the varibale 