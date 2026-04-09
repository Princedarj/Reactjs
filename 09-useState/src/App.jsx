import React, { useState } from "react"

const App = () => {

  const [num, setNum] = useState(2)

  function increase() {
  setNum(num+1)
  }
  function decrease() {
  setNum(num-1)
  }
  function jump(){
  setNum(num+5)
  }
  return (
    <div id="box"> 
      <h1>{num}</h1>
      <div>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={jump}>Jump by 5</button>
    </div>
    </div>
  )
}

export default App
