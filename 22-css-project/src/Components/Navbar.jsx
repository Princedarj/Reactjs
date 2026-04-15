import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navb">
      <div className="Nav">
      <h2>Clothify Fashions</h2>

      <div className="navbtn">
        <Link to={'/'}>Home</Link>
        <Link to={'/shop'}>Shop</Link>
        <Link to={'/cart'}>Cart</Link>
        <Link to={'/contact'}>Contact</Link>
      </div>
    </div>
    </div>
  )
}

export default Navbar
