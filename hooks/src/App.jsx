import { useEffect, useState } from 'react'
import './App.css'

function App() {


    // Use State 

    const [num, setNum] = useState(0)

    const IncraseCount = () => {
        setNum(num + 1)
    }

    // Case 1 : Run on every rander 
    useEffect(() =>{
        alert("I will run on evey render")
    })

    // Case 2 : Run only on first rander

    useEffect(() =>{
        alert("Hey Welcome to my page ")
    },[])

    // return is used as cleanUp function 
    useEffect(() =>{
        alert("Hey Welcome to my Unmounted page ")
        
        return()=>{
            alert(" Component is unmounted  ")
        }
    },[])

    // useEffect(() => {
    //   first
    
    //   return () => {
    //     second
    //   }
    // }, [third])
    



    useEffect(() =>{
        alert(" hey i am runnig because count is change  ")
    },[num])


    return (
        <>
         <div className="main">
                <div>
                    <div>
                        The count of number is : {num}
                    </div>

                    <div>
                        <button onClick={IncraseCount}>Click Me</button>
                    </div>
                </div>
            </div>

        </>
    )
}


export default App
