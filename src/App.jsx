// import UserCard from "./components/UserCard.jsx";
// import "./App.css"
// import hero from "./assets/hero.png"
// import react from"./assets/react.svg"
// import vite from "./assets/vite.svg"
// import Counter from "./components/Counter.jsx";
// function App() {
//   return (
//     <div className="container">
//       {/* <UserCard name="Charli" desc = "desc1" image = {hero} />
//       <UserCard name = "Stark" desc = "desc2" image = {react} />
//       <UserCard name = "Peter" desc = "desc3" image = {vite} /> */}
//       <Counter />
//     </div>
//   )
// }
// export default App

// useEffect

// import { useEffect, useState } from "react"
// import "./App.css"
// const App = () => {
// const [count, setCount] = useState(0);
// const [total , setTotal] = useState(1);
// function handleClick() {
//   setCount(count + 1);
// }

// function handleTotal(){
//   setTotal(total+1);
// }
// first = side-effect function
// second = clean-up function
// third = comma seperated dep list


// variation 1
// runs on each render
// useEffect(() => {
// alert("I wil run on every render");
// },
// )

// // variation-2
// // runs on only one render
// useEffect(() => {
//  alert("i will run on only 1st render");
// }, []);

// variation-3
// useEffect(() => {
//   alert("i will run on every render when count is updated")
// }, [count])

//   // variation-4
  //  useEffect(() => {
  //   alert("i will run on every render when count/total is updated")
  // }, [count , total])


//   return (
//     <div>
//       <button onClick={handleClick}>click me</button>
//       <h1>count is : {count}</h1>
//       <br />
//        <button onClick={handleTotal}>click me</button>
//       <h1>count total : {count}</h1>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import LoggerComponet from './components/LoggerComponet'
// import TimerComponent from './components/TimerComponent'

// const App = () => {

//   return (
//     <div>
//       <LoggerComponet />
//       <TimerComponent />
//     </div>
//   )
// }

// export default App

// import { useState } from "react";
// import Card from "./components/Card.jsx";
// const App = () => {
//    const[count , setCount] = useState(0);
//   function handleclick(){
//     setCount(count+1);
//   }
//   return (
//     <div>
//       <Card handle={handleclick} text="click me">
//          <h1>{count}</h1>
//       </Card>
//     </div>
//   )
// }

// export default App



// import React from 'react'
// import { useState } from 'react';
// import LogoutButton from './components/LogoutButton';
// import LoginButton from './components/LoginButton';
// const App = () => {
//  const[isLogin , setIsLogin] = useState(false);

// // # if-else condition

//  if(isLogin){
//   return <LogoutButton />
// }
// else{
//   return <LoginButton />
// }

// // # ternary operator
// return(
//   <div>
// {isLogin ? <LogoutButton /> : <LogoutButton />}
//   </div>
// )

// //  # logical operator
// return(
//   <div>
//     <h1>if user is login then would show logout button</h1>
//     {isLogin && <LogoutButton />}
//   </div>
// )

// if(!isLogin){
// return <LoginButton />
// }

// }

// export default App



// import React from 'react'

// function showalert(){
//   alert("this is alert message")
// }

// function handleInput(e){
//   console.log("this is actual input value" , e.target.value);
// }

// function handleSubmit(e){
//    e.preventDefault(); // ye server pr request jane se rokta hai 
//    alert("this is stoping ")
// }

// const App = () => {
//   return (
// <div>
{/* <button onClick = {showalert}>click me </button>  */}
{/* ise bolte hai immediate invoked  */}
 {/* <button onClick = {alert("this is show alert")}>click me </button> */}
  {/* hmesha aisa likho  */}
 {/* <button onClick = {()=>{alert("this is show alert")}}>click me </button> */}
{/* <button onMouseOver={showalert}>this is button for mouseover</button>  */}
 {/* <form onSubmit={handleSubmit} action=""> 
 <input type = "text" onChange={handleInput}/> 
<button >submit</button> 
 </form> 
 </div>
  )

}

export default App */}


// import React, { createContext ,useState} from 'react'
// import ChildA from './component/ChildA'
// // step-1 create context
// const userContext = createContext();
// // step-2 Wrap all the child inside the provider
// // step-3 pass value
// // step-4 consumer ke andar jake consume kr lo
// const App = () => {

// const[user , setUser] = useState({name:"Love"})

//   return (
//     <div>
//       <userContext.Provider value = {user}>
//        <ChildA />
//       </userContext.Provider>

//     </div>
//   )
// }

// export default App
// export {userContext}



// import React from 'react'
// import { createBrowserRouter, RouterProvider } from "react-router-dom"
// import Home from './componentss/Home'
// import About from './componentss/About'
// import Dashboard from './componentss/Dashboard'
// import Navbar from './componentss/Navbar'
// import ParamComp from './componentss/ParamComp'
// import Reports from './componentss/Reports'
// import MockTest from './componentss/MockTest'
// import Courses from './componentss/Courses'
// import NotFount from './componentss/NotFount'
// const router = createBrowserRouter([
//   {
//     path: "/", element:
//       <div>
//         <Navbar />
//         <Home />
//       </div>
//   },
//   { path: "/about", element: <div>
//         <Navbar />
//         <About />
//       </div> },
//   { path: "/dashboard", element: <div>
//         <Navbar />
//         <Dashboard />
//       </div>,
//       children :[
//         {
//           path:"courses",
//           element:<Courses />
//         },
//         {
//           path:"mocktests",
//           element :<MockTest />
//         },
//         {
//           path:"reports",
//           element : <Reports />
//         }
//       ]
//        },
//       {
//         path: "/student/:id" , 
//         element : 
//          <div>
//         <Navbar />
//         <ParamComp />
//       </div> 
//       },
//       {
//         path :"*",
//         element:<NotFount />
//       }
// ])

// const App = () => {
//   return (
//     <div>
//       <RouterProvider router={router} />
//     </div>
//   )
// }

// export default App




// import React from 'react'
// import { useState, useEffect, useRef } from 'react';
// const App = () => {
//   const [count, setCount] = useState(0);  // ye ui ko rerender krwata hai 
//   // let val = 1;
//   let val = useRef(1); // ye ui ko rerender nahi krwata hai 
//   let btnRef = useRef();
//   function handleclick() {
//     val.current = val.current + 1;
//     console.log("value is:", val.current)
//     setCount(count + 1);
//   }

//   function changecolor(){
//     btnRef.current.style.backgroundColor = "red"
//   }

//   useEffect(() => {
//     console.log("mai fir se render ho gya hu")
//   })
//   return (
//     <div>
//       <button 
//       ref = {btnRef}
//       onClick={handleclick}>Increment</button>
//       <br />
//       <button onClick={changecolor}><h1>When will i click then change the color of first button </h1></button>
//       <br />
//       <h1>count:{count}</h1>
//     </div>
//   )
// }

// export default App


import React, { useState, useMemo } from 'react'; // 1. 'u' small hoga hooks mein

const App = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  // Ye function simulate kar raha hai ek bhari kaam (Expensive Task)
  function expensiveTask(num) {
    console.log("Expensive Task Running...");
    for (let i = 0; i < 1000000000; i++) { } // Loop ko thoda bada kiya taaki fark mehsoos ho
    return num * 2;
  }

let doubleValue = useMemo(() => expensiveTask(input), [input]);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>
      <p>Count (No re-calculation): {count}</p>
      
      <hr />
      
      <input 
        type="number"
        placeholder='Enter number'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <p>Double Value (Memoized): {doubleValue}</p>
    </div>
  )
}

export default App;