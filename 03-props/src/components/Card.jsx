import React from 'react'

const Card = (props) => {
    console.log(props);
  return (
     <div className='Card'>
       <img src={props.img} alt={props.user} />
       <h1>{props.user},{props.age}</h1>
        <p>Hii I am {props.user}.<br/><br />I am IT Student.</p>
        <button>View</button>
    </div>
  )
}

export default Card
