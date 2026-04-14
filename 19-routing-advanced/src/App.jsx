import { Route, Routes } from "react-router-dom";

import Foter from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product";
import NotFound from "./Pages/NotFound";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import Courses from "./Pages/Courses";
import CourseDetail from "./Pages/CourseDetail";
import Navbar2 from "./Components/Navbar2";


const App = () => {
  return (
    <div className="bg-black text-white h-screen w-screen">
      <Navbar />
      <Navbar2 />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />

        {/* Dynamic Route */}
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:CourseID' element={< CourseDetail/>} />
        
        <Route path='/contact' element={<Contact />} />

        {/* Nested Route */}
        <Route path='/product' element={<Product />}>
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>

      <Foter />
    </div>
  )
}

export default App
