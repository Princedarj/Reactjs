import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [data, setData ] = useState([])
  const [deldata, setDeldata ] = useState([])

  const getdata = async() => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setData(response.data)
    // console.log(response.data);
      }

      useEffect(() => {
        getdata()
      }, [])
      
  const deletedata = async(idx) => {
    try {
    const response = await axios.delete('https://jsonplaceholder.typicode.com/posts')
    setDeldata(response.data)
    console.log(response.idx);
    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <div>
      <table className='custom-table'>
        <thead>
          <tr>
            <th>User Id</th>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((elem, idx)=>(
            <tr key={elem.id}>
              <td>{elem.userId}</td>
              <td>{idx+1}</td>
              <td>{elem.title}</td>
              <td>{elem.body}</td>
              <td><button onClick={()=>deletedata(idx)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App