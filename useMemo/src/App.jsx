import { useState , useMemo } from 'react'
import './App.css'

const nums = new Array(30_000_000).fill(0).map((_ , i) =>{
  return{
    index : i ,
    isMagical : i === 29_000_000
  }
}) 
                             


function App() {

  const [numbers, setnumbers] = useState(nums)
  // const magical = numbers.find(item => item.isMagical === true)

  const magical = useMemo(() => numbers.find(item => item.isMagical === true), [])

  // it is going to store the value of large computation and store in sate . it is not calculating 
  // value on every render
 
  return (
    <>
    <div>
      <h1>Magical Number is {magical.index}</h1>
    </div>
    
    </>
  )
}

export default App
