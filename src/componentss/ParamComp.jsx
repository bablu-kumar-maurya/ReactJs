import React from 'react'
import { useParams } from 'react-router-dom'

const ParamComp = () => {
    // useParams ko execute karna zaroori hai () ke saath
    const { id } = useParams(); 

  return (
    <div>
        <h2>Student ID: {id}</h2>
    </div>
  )
}

export default ParamComp