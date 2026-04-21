import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [data, setData] = useState([])

  const [formData, setFormData] = useState({
    name: '',
    email: ''
  })

  const [editItem, setEditItem] = useState(null)

  


  //API Calling
  const getdata = async () => {
    const response = await axios.get
    ('https://jsonplaceholder.typicode.com/users')
    setData(response.data)
    console.log(response.data);
    
  }

  useEffect(() => {
    getdata();
    if (editItem){
      setFormData({
        name: editItem.name,
        email: editItem.email
      })
    }
  },[editItem])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({[name]:value, ...formData})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try{
      //EDIT MODE
    if(editItem){
      const response = await axios.put
      (`https://jsonplaceholder.typicode.com/users/${editItem.id}`,
        formData)
        
        alert("Data Updated..!")

        onUpdate({id: editItem.id, ...response.data})
    }
    else
    {
      // ADD MODE
      const response = await axios.post
      ('https://jsonplaceholder.typicode.com/users',formData)
    
      alert("DATA ADDED..!")

      onSuccess(response.data)
    }
    setFormData({name:'',email:''})
    }
    catch(error)
    {
      console.error(error);
      
    }
  }
    //Edit Clicked
    const handleEdit = (item) => {
      setEditItem(item)
    }
    
    // Delete
  const deletedata = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      setData(data.filter((item) => item.id !== id))
    } catch (error) {
      console.error("Delete error:", error);
    }
  }


  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          
          <input 
          type="text" 
          name='name'
          placeholder='Enter Your Name'
          value={formData.name}
          onChange={handleInputChange}
          />

          <input type="text" 
          type='text'
          name='email'
          placeholder='Enter Your Email'
          value={formData.email}
          onChange={handleInputChange}
          />

          <button type='submit'>
            {editItem ? "UPDATE":"ADD"}
          </button>
        </form>
      </div>

      <div>  
        <table className="custom-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>

          <tbody>
            {data.map((elem,idx)=>(
              <tr key={elem.id}>
                <td>{elem.id}</td>
                <td>{elem.name}</td>
                <td>{elem.email}</td>
                <td>
                  <button onClick={() => deletedata(elem.id)}>Delete</button>
                </td>
                <td>
                  <button onClick={() => handleEdit(elem)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
