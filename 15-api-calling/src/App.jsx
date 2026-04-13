///////////////////////////////////////------------ASYNC-------------////////////////////////////////////
// const App = () => {

//   async function getData() {
//    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  
//     console.log(response);
    
//   }

//   const getData = async() => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')

//     const data = await response.json()

//     console.log(data);
    
//   }
//   return (
//     <div>
//       <h1>async</h1>
//       <button onClick={getData}>Click Me</button>
//     </div>
    
//   )
// }

// export default App

////////////////////////////////////----------------AXIOS-----------------/////////////////////////////////

// import axios from 'axios'

// const App = () => {

//   const getdata = async() => {
//     const response = await axios.get('https://jsonplaceholder.typicode.com/users')
//     console.log(response.data);

//     destruchering

//     const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
//     console.log(data);
    

//   }

//   return (
//     <div>
//       <button onClick={getdata}>Get Data</button>
//     </div>
//   )
// }

// export default App


import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const [data, setdata] = useState([])

  const getdata = async() => {
  const response = await axios.get('https://picsum.photos/v2/list')
  
    setdata(response.data)
    
}

  return (
    <div>
      <button onClick={getdata}>Get Data</button>
      <div>
        {data.map(function(elem,idx,author){

          return <h3>Hello, {elem.author} {idx+1}</h3>
        })}
      </div>
    </div>
  )
}

export default App