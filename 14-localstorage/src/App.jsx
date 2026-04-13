
// const App = () => {

//   const First = {
//     User : 'Prince',
//     age :  21,
//     City: 'Ahmedabad'
//   }
   
//   localStorage.setItem('First',JSON.stringify(First))

//   const first = JSON.parse(localStorage.getItem('First'))

//   console.log("First: ", first);


//   return (
//     <div>
      
//     </div>
//   )
// }

// export default App


const App = () => {

  
  const User = {
    User : 'JP',
    age :  21,
    City: 'BanashKantha'
  }
   
  localStorage.setItem('JP',JSON.stringify(User))


  const first = JSON.parse(localStorage.getItem('user'))

  console.log("user: ", first);

  return (
    <div>
      
    </div>
  )
}

export default App
