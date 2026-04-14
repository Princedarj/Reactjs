import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div className="flex items-center bg-cyan-500 text-taupe-950 justify-between p-5 rounded-b-4xl">
        <h2 className="font-medium">Clothify Fashions</h2>
        <div className="flex items-center gap-5 font-bold underline ">
          <Link to={'/'} className="active:scale-95 ">Home</Link>
          <Link to={'/about'} className="active:scale-95 ">About</Link>
          <Link to={'/contact'} className="active:scale-95 ">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Nav
