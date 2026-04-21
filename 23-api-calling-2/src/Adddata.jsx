import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Adddata = ({ onSuccess, editItem, onUpdate }) => {

  const [formData, setFormData] = useState({
    title: '',
    body: ''
  })

  // Fill form when editing
  useEffect(() => {
    if (editItem) {
      setFormData({
        title: editItem.title,
        body: editItem.body
      })
    }
  }, [editItem])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      // EDIT MODE
      if (editItem) {
        const response = await axios.put(
          `https://jsonplaceholder.typicode.com/posts/${editItem.id}`,
          formData
        )

        alert("Data Updated!")

        // send updated data to parent
        onUpdate({ ...response.data, id: editItem.id })

      } else {
        // ADD MODE
        const response = await axios.post(
          'https://jsonplaceholder.typicode.com/posts',
          formData
        )

        alert("Data Added!")

        onSuccess(response.data)
      }

      // reset form
      setFormData({ title: '', body: '' })

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <h3>{editItem ? "Edit Post" : "Add Post"}</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Enter Title"
          value={formData.title}
          onChange={handleInputChange}
        />

        <br /><br />

        <input
          type="text"
          name="body"
          placeholder="Enter Body"
          value={formData.body}
          onChange={handleInputChange}
        />

        <br /><br />

        <button type="submit">
          {editItem ? "Update" : "Add"}
        </button>
      </form>
    </div>
  )
}

export default Adddata