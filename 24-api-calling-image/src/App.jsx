import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Nav from "./Components/Nav"
import AddUser from './Components/Adduser'
import Userlist from './Components/Userlist'
import Home from './Components/Home'

const App = () => {
  const navigate = useNavigate()

  const [data, setData] = useState([])
  const [nextId, setNextId] = useState(1)

  const [popup, setPopup] = useState({
    show: false,
    message: "",
    onConfirm: null
  })

  const [selectId, setSelectId] = useState([])

  const API = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
  })

  //  FETCH DATA
  const getData = async () => {
    try {
      const res = await API.get('/users')
      setData(res.data)

      const ids = res.data.map(item => Number(item.id) || 0)
      const maxId = ids.length ? Math.max(...ids) : 0
      setNextId(maxId + 1)

    } catch (error) {
      console.error("Fetch error:", error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  //  EDIT NAVIGATION
  const handleEdit = (item) => {
    navigate('/adduser', { state: { user: item } })
  }

  //  DELETE SELECTED
  const handleDeleteSelected = () => {
    const count = selectId.length

    setPopup({
      show: true,
      message: `Delete Selected ${count} users?`,
      onConfirm: () => {
        setData(prev => prev.filter(user => !selectId.includes(user.id)))
        setSelectId([])
        showPopup(`Selected ${count} users deleted!`)
      }
    })
  }

  //  POPUP
  const showPopup = (msg) => {
    setPopup({ show: true, message: msg, onConfirm: null })

    setTimeout(() => {
      setPopup({ show: false, message: "", onConfirm: null })
    }, 2000)
  }

  return (
      <div>
        <Nav />

      <Routes>
        <Route path='/' element={<Home />} />

        <Route
          path='/adduser'
          element={
            <AddUser
              data={data}
              setData={setData}
              nextId={nextId}
              setNextId={setNextId}
              showPopup={showPopup}
            />
          }
        />

        <Route
          path='/userlist'
          element={
            <Userlist
              data={data}
              popup={popup}
              setPopup={setPopup}
              selectId={selectId}
              setSelectId={setSelectId}
              handleEdit={handleEdit}
              handleDeleteSelected={handleDeleteSelected}
            />
          }
        />
      </Routes>
      </div>
  )
}

export default App