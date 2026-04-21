import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Adddata from './Adddata'

const App = () => {

  const [data, setData] = useState([])
  const [editItem, setEditItem] = useState(null) // store item to edit

  // Add new data
  const addPostdata = (postData) => {
    setData((prev) => [...prev, postData]);
  }

  // Update existing data
  const updatePostdata = (updatedPost) => {
    const updatedList = data.map((item) =>
      item.id === updatedPost.id ? updatedPost : item
    );
    setData(updatedList);
    setEditItem(null); // reset edit mode
  }

  // Fetch data
  const getdata = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setData(response.data)
  }

  useEffect(() => {
    getdata()
  }, [])

  // Delete
  const deletedata = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      setData(data.filter((item) => item.id !== id))
    } catch (error) {
      console.error("Delete error:", error);
    }
  }

  // When Edit clicked
  const handleEdit = (item) => {
    setEditItem(item)
  }

  return (
    <div>
      <h2>React CRUD with Edit</h2>

      <Adddata
        onSuccess={addPostdata}
        editItem={editItem}
        onUpdate={updatePostdata}
      />

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>

        <tbody>
          {data.map((elem, idx) => (
            <tr key={elem.id}>
              <td>{idx + 1}</td>
              <td>{elem.title}</td>
              <td>{elem.body}</td>

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
  )
}

export default App