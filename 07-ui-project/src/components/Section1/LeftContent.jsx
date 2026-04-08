import React from 'react'
import Arrow from './Arrow'
import HeroText from './HeroText'


const LeftContent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3 rounded-2xl' >
        <HeroText />
        <Arrow />
    </div>
  )
}

export default LeftContent
