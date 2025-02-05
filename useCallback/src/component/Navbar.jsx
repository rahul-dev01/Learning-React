import React from 'react'
import { memo } from 'react'

const Navbar = ({ adjective ,getAdjective }) => {
    console.log("Navnar is rendering... ")
    
    return (
        <>
            <div>
                <h1>I am a {adjective} Navbar</h1>
                <button onClick={()=>{getAdjective}}>Change Me</button>
            </div>
        </>
    )
}

export default memo(Navbar)