import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='pb-20 pt-10 flex gap-10 items-center h-[90vh] px-18 '>
      <LeftContent />
      <RightContent users={props.Users} />
    </div>
  )
}

export default Page1Content
