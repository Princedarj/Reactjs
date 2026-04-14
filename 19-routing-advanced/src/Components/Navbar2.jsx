import { useNavigate } from "react-router-dom"

const Navbar2 = () => {

    let navigate = useNavigate()

  return (
    <div className="bg-cyan-600 " >
      <button 
      onClick={()=>{
        navigate('/')
      }}
      className="bg-cyan-800 px-2 py-2 m-2 cursor-pointer active:scale-95 rounded-2xl">
      Back To The Home Page </button>

      <button 
      onClick={()=>{
        navigate(-1)
      }}
      className="bg-cyan-800 px-5 py-2 m-2  cursor-pointer active:scale-95 rounded-2xl">
      Back </button>
    </div>
  )
}

export default Navbar2
