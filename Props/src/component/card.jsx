import React from 'react'
import "./../component/card.css"

const Card = (props) => {
    return (
        <div className="card">
            <h1>{props.title}</h1>
            <img className='card-img' src="https://i.pinimg.com/736x/ce/55/12/ce551256a0de3e16db1168c60f0f86f8.jpg"
                alt="Image Error" width={233}  style={{border: "2px solid red" }}/>
            <p>{props.descritpion}</p>
        </div>
    )
}

export default Card