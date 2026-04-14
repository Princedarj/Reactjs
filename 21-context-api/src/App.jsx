
// import { useState } from 'react'
import Button from './Components/Button'
import Navbar from './Components/Navbar'

const App = () => {

  // const [theme, setTheme] = useState('light')
  
  return (
    <div className='bg-black h-screen w-screen text-white'>
      <Navbar />
     <Button /> 
    </div>
  )
}

export default App   
