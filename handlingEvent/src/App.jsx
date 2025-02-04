import './App.css'
import { useState } from 'react'

function App() {

  const [Name, setName] = useState("Rahul")
  const [Form, setForm] = useState({email : "" , phone : ""})

  const handleClick = () =>{
    alert("hey , I am Clicked")
  }

  // const handleMouseOver = () =>{
  //   alert("hey , MouseOver is Clicked")
  // }

  // const handleChange = (e)=>{
  //   setName(e.target.value)
  // }


  const handleChange = (e)=>{
    setForm({...Form , [e.target.name]: e.target.value})
  }


  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click Me</button>
      </div>

      {/* <div className='red' onMouseOver={handleMouseOver}>
        Hey , I am a red 
      </div> */}

      {/* <div>
        <input type="text" value={Name} onChange={handleChange} />
      </div> */}


        <div>
          <input type="text" name='email' value={Form.email} onChange={handleChange} />
          <input type="phone" name='phone' value={Form.phone} onChange={handleChange} />

        </div>

    </>
  )
}

export default App
