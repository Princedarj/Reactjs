import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center bg-cyan-500 text-taupe-950 justify-between px-8 py-3 ">
        <h2 className="font-serif font-extrabold text-3xl">Clothify Fashions</h2>
        <div className="flex items-center gap-5 font-sans font-bold underline ">
          <Link to={'/'} className="active:scale-95 ">Home</Link>
          <Link to={'/product'} className="active:scale-95 ">Product</Link>
          <Link to={'/courses'} className="active:scale-95 ">Courses</Link>
          <Link to={'/about'} className="active:scale-95 ">About</Link>
          <Link to={'/contact'} className="active:scale-95 ">Contact</Link>
        </div>
      </div>
  )
}

export default Navbar
