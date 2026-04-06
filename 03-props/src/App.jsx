import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
        <Card user='JP' img="https://images.unsplash.com/photo-1772528205616-e65dc0994c7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"/>
        <Card user='NP' img="https://images.unsplash.com/photo-1771261799195-466eb30d9669?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExMnxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8"/>
        <Card user='SP' img="https://plus.unsplash.com/premium_photo-1770682709359-4c770608765b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExOHxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8"/>
        <Card user='Prince' age={25} img="https://images.unsplash.com/photo-1768479397383-49806c934167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyNHxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8"/>
    </div>
    
  )
}

export default App
