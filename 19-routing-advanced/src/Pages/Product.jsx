import { Link, Outlet } from "react-router-dom";
const Product = () => {
  return (
    <div>

      {/* <h1 className='text-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      Welcome To The Product...</h1> */}

      <div className=" flex items-center justify-center gap-2">

        <Link to={'/product/men'} 
        className="font-bold text-2xl text-white px-5 py-2 mt-1"
        >Men</Link>

        <Link to={'/product/women'}
        className=" font-bold text-2xl text-white px-5 py-2 mt-1"
        >Women</Link>

        <Link to={''}
        className=" font-bold text-2xl text-white px-5 py-2 mt-1"
        >Kids</Link>

        <Outlet />
      </div>
    </div>
  )
}

export default Product
