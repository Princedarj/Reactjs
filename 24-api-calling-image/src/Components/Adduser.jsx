import React, { useEffect, useState } from 'react'
import { UserRoundPlus, UserPen, X } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'

const AddUser = ({ data, setData, nextId, setNextId, showPopup }) => {
    const navigate = useNavigate()
    const location = useLocation()

    const editItem = location.state?.user || null

    const [formData, setFormData] = useState({
        name: '',
        email: ''
    })

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
            // EDIT
            setData(prev =>
                prev.map(item =>
                    item.id === editItem.id
                        ? { ...item, ...formData }
                        : item
                )
            )
            showPopup("DATA EDITED SUCCESSFULL!")
        } else {
            // ADD
            const newUser = {
                id: nextId,
                ...formData
            }

            setData(prev => [newUser, ...prev])
            setNextId(prev => prev + 1)
            showPopup("DATA ADDED SUCCESSFULL!")
        }

        navigate('/userlist')
    }

    return (
        <div className="topm">
            <div className="top">
                <h1>{editItem ? "Edit User" : "Add User"}</h1>

                <form onSubmit={handleSubmit}>
                    <input
                        className="input"
                        type="text"
                        name="name"
                        placeholder="Enter Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />

                    <input
                        className="input"
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />

                    <div className="add">
                        <button type="submit" className="submit">
                            {editItem ? (
                                <UserPen strokeWidth={1.75} />
                            ) : (
                                <UserRoundPlus strokeWidth={1.75} />
                            )}
                        </button>

                        <button
                            type="button"
                            className="cancel"
                            onClick={() => navigate('/')}
                        >
                            <X strokeWidth={2.25} />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddUser