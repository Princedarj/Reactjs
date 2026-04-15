
import { MapPinned } from 'lucide-react';

const Shop = (props) => {
  console.log(props)
  return (
    <div className='ca'>

        {props?.shop?.map(function(elem,idx) {
          return (<div className='card' key={idx}>

        <div className='top'>
            <div className='img'>
              <img src={elem.img} alt="Image Note Found...." className='imgcard'/>
            </div>
          
          <div>
            <h3 className='cardh3'>{elem.title}</h3>
            <p className='cardp'>{elem.size}</p>
            
            <div className='prl'>
              <h2>{elem.price}</h2>
              <p className='quantity'>x15</p>
            </div>
          </div>
        </div>

        <div className='bottom'>
          <div>
            <h4>Estimate Total</h4>
            <h2 className='bh2'>$750</h2>
          </div>

          <div className='btn'>
            <button>Order Recived</button>
            <button><MapPinned /></button>
          </div>
        </div>
        </div>)
        })}
    </div>
  )
}

export default Shop
