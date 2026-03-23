import React from 'react'
import hero from "../assets/hero.png"
import "./UserCard.css"
const UserCard = (prop) => {
    return (
        // <div className='user-container'>
        //     <p id='user-name'>Love babbar</p>
        //     <img id='user-img' src={hero} alt="" />
        //     <p id='user-decs'>Description of love babbar</p>
        // </div>
        <div className='user-container'>
            <p id='user-name'>{prop.name}</p>
            <img id='user-img' src={prop.image} alt="love" />
            <p id='user-decs'>{prop.desc}</p>
        </div>
    )
}

export default UserCard