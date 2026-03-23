import { useState  , useEffect } from "react"

const LoggerComponet = () => {
    const[count , setCount] = useState(0);
    function handleClick(){ 
        setCount(count+1);
    }
    useEffect(()=>{
        console.log("comment rerender or count changed" , count);
    })
  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default LoggerComponet