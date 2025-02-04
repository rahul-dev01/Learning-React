import React, { useState } from 'react';
import "./../src/App.css"
function App() {
  const [showbtn, setShowbtn] = useState(false)

  // const Todo = () =>{
  //   return(
  //   <>
  //   Hey i am todo
  //   </>
  //   )
  // }

  return (
    <>
      <div className="btn1">
        {showbtn?<button>I Will only show when second button is True</button> : <button>I Will only show when second button is false</button>}

        {/* {showbtn && <button>I Will only show when second button is clicked</button>} */}


      </div>
      {/* <div>
        <Todo/>
      </div> */}
      

      <div className="btn2">
          <button onClick={()=>setShowbtn(!showbtn)}>
            click me 
          </button>
      </div>
    </>
  )
}

export default App;
