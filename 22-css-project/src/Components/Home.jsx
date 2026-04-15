
import Product from '../Pages/Product'

const Home = (props) => {
  return (
    <div className='card2'> 

        {props.product.map(function(elem,idx){
          return < Product key={idx} id={idx} img={elem.img} name={elem.name} details={elem.details}/>
        })}
    </div>
    
  )
}

export default Home
