
const App = () => {
  
  function btnClicked(){
    console.log("Button Clicked")
  }
  return (
    <div>
      <button onClick={btnClicked}>Click</button>      
    </div>
  )
}

export default App
