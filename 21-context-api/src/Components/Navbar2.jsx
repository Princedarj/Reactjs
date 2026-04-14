import { useContext } from "react"
import { ThemeDataContext } from "../Context/ThemeContext"


const Navbar2 = () => {
  const [theme, setTheme] = useContext(ThemeDataContext)
  return (
    <div className="flex capitalize gap-5 cursor-pointer font-bold">
      <h4 className="active:scale-95 hover:underline hover:text-black">Home</h4>
      <h4 className="active:scale-95 hover:underline hover:text-black">About</h4>
      <h4 className="active:scale-95 hover:underline hover:text-black">Contact</h4>
      <h4 className="active:scale-95 hover:underline hover:text-black">Services</h4>
      <h4 className="active:scale-95 hover:underline hover:text-black">{theme}</h4>
    </div>
  )
}

export default Navbar2
