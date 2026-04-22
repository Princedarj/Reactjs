import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { SquarePen } from 'lucide-react';
import { UserRoundX } from 'lucide-react';
import { UserRoundPlus } from 'lucide-react';
import { UserPen } from 'lucide-react';
import { X } from 'lucide-react';

const App = () => {
  const [data, setData] = useState([])
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  })
  const [editItem, setEditItem] = useState(null)
  const [nextId, setNextId] = useState(1)

  const [popup, setPopup] = useState({
    show: false,
    message: "",
    onConfirm: null
  })

  const API = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
  });

  //FETCH DATA
  const getData = async () => {
    try {

      const userResponse = await API.get('/users')
      // const postsResponse = await API.get('/posts')

      setData(userResponse.data)
      // setData(postsResponse.data)

      const ids = userResponse.data.map(item => Number(item.id) || 0)
      // const ids = postsResponse.data.map(item => Number(item.id) || 0)
      const maxId = ids.length ? Math.max(...ids) : 0
      setNextId(maxId + 1)

    } catch (error) {
      console.error("Fetch error:", error)
    }
  }

  //DIRECT CALL DATA
  useEffect(() => {
    getData()
  }, [])

  //EDIT ITEM
  useEffect(() => {
    if (editItem) {
      setFormData({
        name: editItem.name,
        email: editItem.email
      })
    }
  }, [editItem])


  //INPUTCHANGE
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  //SUBMIT HANDLE
  const handleSubmit = (e) => {
    e.preventDefault()

    if (editItem) {
      setData(prev =>
        prev.map(item =>
          item.id === editItem.id
            ? { ...item, ...formData }
            : item
        )
          .sort((a, b) => b.id - a.id)
      )

      showPopup("DATA EDITED SUCEESSFULL...")
      setEditItem(null)

    } else {
      const newUser = {
        id: nextId,
        ...formData
      }

      setData(prev => [newUser, ...prev].sort((a, b) => b.id - a.id))
      setNextId(prev => prev + 1)
      showPopup("DATA ADDED SUCEESSFULL...")
    }

    //SET INPUT EMPTY
    setFormData({ name: '', email: '' })
  }

  //EDIT HANDLE
  const handleEdit = (item) => {
    setEditItem(item)
  }

  //DELETE HANDLE
  const handleDelete = (id) => {
    setPopup({
      show: true,
      message: "ARE YOU SURE TO DELETE?",
      onConfirm: () => {
        setData(prev => prev.filter(item => item.id !== id))
        showPopup("Data Dleted Successfully!")
      }
    })
  }

  //POPUP HANDLE
  const showPopup = (msg) => {
    setPopup({ show: true, message: msg, onConfirm: null })

    setTimeout(() => {
      setPopup({ show: false, message: "", onConfirm: null })
    }, 2000)
  }

  return (
    <div className='page'>
      <div className='topm'>
        <div className='top'>
          <h1>{editItem ? "Edit User" : "Add User"}</h1>
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
            <div className='add'>
              <button type="submit" className='submit'>
                {editItem ? <UserPen color="#000000" strokeWidth={1.75} /> : <UserRoundPlus color="#000000" strokeWidth={1.75} />}
              </button>

              {editItem && (
                <button
                  className='cancel'
                  type="button"
                  onClick={() => {
                    setEditItem(null)
                    setFormData({ name: '', email: '' })
                  }}
                >
                  <X color="#000000" strokeWidth={2.25} />
                </button>
              )}
            </div>

          </form>

        </div>
      </div>
      <div>
        {popup.show && (
          <div className='popup'>
            {popup.message}

            {popup.onConfirm ? (
              <div className='dbg'>
                <button
                  className='dbtn1'
                  onClick={() => {
                    popup.onConfirm()
                    setPopup({ show: false, message: "", onConfirm: null })
                  }}
                >
                  YES
                </button>

                <button
                  className='dbtn2'
                  onClick={() => {
                    setPopup({ show: false, message: "", onConfirm: null })
                  }}
                >
                  NO
                </button>
              </div>
            ) : null}
          </div>
        )}
      </div>
      <div className='bottom'>
        <div className='table'>
          <table className='custom-table'>
            <thead className='thead'>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody className='tbody'>
              {data.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  {/* <td>{user.title}</td> */}
                  <td>{user.email}</td>
                  {/* <td>{user.body}</td> */}
                  <td>
                    <div className='action'>
                      <button onClick={() => handleEdit(user)}><SquarePen color="#000000" strokeWidth={1.75} /></button>
                      <button 
                      className='usercancel'
                      onClick={() => handleDelete(user.id)}>
                      <UserRoundX color="#000000" strokeWidth={1.75} />
                        </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default App