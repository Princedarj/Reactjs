
const Product = (props) => {
  return (
    
      <div className='block'>
        <div className='inner'>
          <img src={props.img} alt="Note found"  />
      
          <div className='desc' >
            <h1 className='desch1'>{props.name}</h1>
            <p>{props.details}</p>
          </div>
        </div>
      </div>
    
  )
}

export default Product
