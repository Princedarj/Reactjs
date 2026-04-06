import React from 'react'
import Card from './components/card'
import navbar from './components/navbar'
const App = () => {
  
  return (
    <div>
      {Card()}
      {Card()}
      {navbar()}
    </div>
  )
}

export default App
