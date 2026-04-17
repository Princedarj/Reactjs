import { Link } from "react-router-dom";
import Dropdown from "../Pages/Dropdown";

const Navbar = () => {
  return (
    <div className="navb">
      <div className="Nav">
        <Link to="/" className="logo">
          <h2>Clothify Fashions</h2>
        </Link>

        <div className="navbtn">
          <Link to={'/'}>Home</Link>
          <Link to={'/shop'}>Shop</Link>
          <Link to={'/cart'}>Cart</Link>
          <Link to={'/contact'}>Contact</Link>
        </div>
        
      <Dropdown />
      </div>
    </div>
  )
}

export default Navbar
