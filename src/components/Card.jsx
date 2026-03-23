import React from 'react'
 
const Card = (props) => {
  return (
    <div>
      {props.children}
      <button onClick={props.handle}>{props.text}</button>

    </div>
  )
}

export default Card