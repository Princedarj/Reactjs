import { useContext } from 'react'
import { ThemeDataContext } from '../Context/ThemeContext'

import Navbar2 from './Navbar2'

const Navbar = () => {
  // const data = useContext(ThemeDataContext)
const [theme] = useContext(ThemeDataContext)
  return (
    // <div className="bg-cyan-300 dark:bg-cyan-800 justify-between items-center flex p-4">
    <div className={`${theme === 'light'? 'bg-cyan-600' : 'bg-cyan-800'} justify-between items-center flex p-4`}>
      <h2 className='text-3xl font-serif font-bold capitalize'>Prince</h2>
      
      <Navbar2 />      
    </div>
  )
}

export default Navbar

