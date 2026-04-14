import { Route, Routes } from "react-router-dom";
import Nav from './Components/Nav';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

const App = () => {
  return (
    <div className="bg-black text-white h-screen w-screen">
      <Nav />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
