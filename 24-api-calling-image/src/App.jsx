import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [data, setData] = useState([])
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  })
  const [editItem, setEditItem] = useState(null)
  const [nextId, setNextId] = useState(1)

  const API_URL = 'https://jsonplaceholder.typicode.com/users'

  const getData = async () => {
    try {
      const response = await axios.get(API_URL)
      setData(response.data)

       const ids = response.data.map(item => Number(item.id) || 0)
    const maxId = ids.length ? Math.max(...ids) : 0
    setNextId(maxId + 1)
    } catch (error) {
      console.error("Fetch error:", error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    if (editItem) {
      setFormData({
        name: editItem.name,
        email: editItem.email
      })
    }
  }, [editItem])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (editItem) {
      // 🔥 UPDATE
      setData(prev =>
        prev.map(item =>
          item.id === editItem.id
            ? { ...item, ...formData }
            : item
        )
      )

      alert("Data Updated!")
      setEditItem(null)

    } else {
      const newUser = {
        id: nextId,   
        ...formData
      }

      setData(prev => [...prev, newUser])
      setNextId(prev => prev + 1) 
      alert("Data Added!")
    }

    setFormData({ name: '', email: '' })
  }

  const handleEdit = (item) => {
    setEditItem(item)
  }

  const handleDelete = (id) => {
    setData(prev => prev.filter(item => item.id !== id))
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>{editItem ? "Edit User" : "Add User"}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <button type="submit">
          {editItem ? "Update" : "Add"}
        </button>

        {editItem && (
          <button
            type="button"
            onClick={() => {
              setEditItem(null)
              setFormData({ name: '', email: '' })
            }}
          >
            Cancel
          </button>
        )}
      </form>

        <hr/>

      <table className='custom-table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleEdit(user)}>Edit</button>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App