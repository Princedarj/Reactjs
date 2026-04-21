  import React, { useEffect, useState } from 'react'
  import axios from 'axios'
  import Adddata from './Adddata'

  const App = () => {

    const [data, setData ] = useState([])
    const [deldata, setDeldata ] = useState([])



    const addPostdata = (postData) => {
    console.log("Parent received:", postData);
      setData([...data, postData]);
    }

    const getdata = async() => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setData(response.data)
        }

        useEffect(() => {
          getdata()
        }, [])
        
    const deletedata = async(id) => {
      try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/{id}`)
      const updatedlist = data.filter(data => data.id !== id)
      setData(updatedlist)

      console.log("Deleted id:",id);
      } catch (error) {
        console.error("Delete error:", error);
      }
    }
    
    return (
      <div>
        

        <Adddata onSuccess={addPostdata}/>

        <div>
          <table className='custom-table'>
            <thead>
              <tr>
                <th>User Id</th>
                <th>Id</th>
                <th>Title</th>
                <th>Body</th>
                <th>Delete</th>
                <th>Edit</th>
              </tr>
            </thead>

            <tbody>
              {data.map((elem, idx)=>(
                <tr key={elem.id}>
                  <td>{elem.userId}</td>
                  <td>{idx+1}</td>
                  <td>{elem.title}</td>
                  <td>{elem.body}</td>
                  <td><button onClick={()=>deletedata(elem.id)}>Delete</button></td>
                  <td><button>Edit</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  export default App