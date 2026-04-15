import {Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

import Home from './Components/Home'
import Shop from './Components/Shop'
import Cart from './Components/Cart'
import Contact from './Components/Contact'

const App = () => {
  const product = [
    {
      img:'src/Images/Black.jpg',
      name:'Black Blazer',
      details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laborum quisquam sapiente, maiores expedita fugiat.'
      
    },
    {
      img:'src/Images/BlueStraightFit.jpg',
      name:'Blue Jeans',
      details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laborum quisquam sapiente, maiores expedita fugiat.'

    },
    {
      img:'src/Images/GreenCordSet.jpg',
      name:'CorSet',
      details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laborum quisquam sapiente, maiores expedita fugiat.'

    },
    {
      img:'src/Images/jacket.jpg',
      name:'Denim Jacket',
      details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laborum quisquam sapiente, maiores expedita fugiat.'
    }
  ]
  const shop = [
    {
      img:'src/Images/Black.jpg',
      title:'Black Blazer',
      price:'$149', 
      size:'Size: M L XL XXL',

    },
    {
      img:'src/Images/BlueStraightFit.jpg',
      title:'Blue Jeans',
      price:'$39', 
      size:'Size: 38 40 42 44',
      
    },
    {
      img:'src/Images/GreenCordSet.jpg',
      title:'CorSet',
      price:'$69', 
      size:'Size: M L XL XXL',

    },
    {
      img:'src/Images/jacket.jpg',
      title:'Denim Jacket',
      price:'$49', 
      size:'Size: M L XL XXL',
    },
    {
      img:'src/Images/Black.jpg',
      title:'Black Blazer',
      price:'$149', 
      size:'Size: M L XL XXL',

    },
    {
      img:'src/Images/BlueStraightFit.jpg',
      title:'Blue Jeans',
      price:'$39', 
      size:'Size: 38 40 42 44',
      
    },
    {
      img:'src/Images/GreenCordSet.jpg',
      title:'CorSet',
      price:'$69', 
      size:'Size: M L XL XXL',

    },
    {
      img:'src/Images/jacket.jpg',
      title:'Denim Jacket',
      price:'$49', 
      size:'Size: M L XL XXL',
    },
  ]
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home product={product} />} />
        <Route path='/shop' element={<Shop shop={shop} />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>

      <Footer />
    </>
  )
}

export default App
