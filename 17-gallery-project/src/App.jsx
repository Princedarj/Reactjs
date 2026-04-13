import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from './Components/Card';

const App = () => {

  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1)

  const getData = async() => {
  const response =await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=15`)   
   
  setUserData(response.data)
  
}

useEffect(function(){
  getData()
},[index])

  let printUserData = <h3 className='text-gray-300 font-semibold text-xs absolute top-1/2 left-1/2 -translate-x-1/2 
  -translate-y-1/2'>Loading...</h3>
  if (userData.length>0){
    printUserData = userData.map(function(elem,idx){
      return <div key={idx}>
              <Card elem={elem} />
              </div>
    })
  }
  return (
    <div className='bg-black  overflow-auto h-screen text-white'>
      {/* <button
      onClick={getData} 
      className='bg-green-600 mb-3 active:scale-95 px-5 py-2 rounded text-white'>
        Get Data
        </button> */}

        <div className='flex h-full flex-wrap gap-4 m-5'>
          {printUserData}
        </div>
        <div className='flex  justify-center gap-6 item-center p-4'>
        <button 
        style={{ opacity: index == 1 ? 0.6 : 1}}
        className='bg-amber-400 text-black text-sm font-semibold rounded-2xl px-5 py-2 
        active:scale-95 cursor-pointer'
        onClick={()=>{
          if(index>1){
            setIndex(index-1)
            setUserData([])
          }
        }}
        >
          Prev
          </button>

          <h4>Page{index}</h4>
        
        <button 
        className='bg-amber-400 text-black text-sm font-semibold rounded-2xl px-5 py-2 
        active:scale-95 cursor-pointer'
        onClick={()=>{
          setUserData([])

          setIndex(index+1)
        }}
        >
          Next
          </button>
        </div>
    </div>
  )
}

export default App
