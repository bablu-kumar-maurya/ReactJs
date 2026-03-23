// import React from 'react'

// const Home = () => {
//   return (
//     <div>Home</div>
//   )
// }

// export default Home

import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate();
    function handleClick(){
        navigate("/about");
    }
  return (
    <div>
        {/* Home */}
        <button onClick={handleClick}><h1>Go to about page</h1></button>
    </div>
  )
}

export default Home