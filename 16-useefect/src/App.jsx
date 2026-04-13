// import { useState } from 'react'
// import { useEffect } from 'react'

// const App = () => {
  
//     const [num, setNum] = useState(0)
//     const [num2, setNum2] = useState(100)

//     useEffect(function(){
//       console.log('use effect is runing...');
      
//     },[num])
  
//   return (
//     <div>
//       <h1>Value of Num{num}</h1>

//       <button onClick={()=>{
//         setNum(num+1)
//       }}>
//         Click
//       </button> 

//       <h1>Value of Num2 {num2}</h1>

//       <button onClick={()=>{
//         setNum2(num2+10)
//       }}>
//         Click
//       </button>
//     </div>
//   )
// }

// export default App


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { useEffect } from "react";
import { useState } from "react";

const App = () => {

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  function aChanging(){
    console.log('A Value changed');
    
  }

  function bChanging(){
    console.log('B Value changed');
  }

  useEffect(function(){
    aChanging()
  },[a])

  useEffect(function(){
    bChanging()
  },[b])

  return (
    <div>
      <h1>Value of A is {a}</h1>
      <h1>Value of B is {b}</h1>
      
      <button onClick={()=>{
        setA(a + 1)
      }}>
        Change A</button>
      
      <button onClick={() => {
        setB(b - 1)
      }}>
        Change B</button>
      
    </div>
  )
}

export default App
