import React, { useContext } from 'react'
import { ThemeDataContext } from '../Context/ThemeContext';

const Button = () => {
    const changeTheme = ()=> {
        setTheme(theme === 'light' ?'dark' : 'light')
        
    }

    const [theme,setTheme] = useContext(ThemeDataContext)
  return (
    <div>
      <button
      onClick={changeTheme}
      className='bg-amber-500 text-black rounded-2xl m-2 px-3 py-1 
      hover:text-white hover:underline active:scale-95 cursor-pointer '
      >Change Theme </button>
    </div>
  )
}

export default Button
