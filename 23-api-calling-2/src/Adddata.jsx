import React, { useState } from 'react';
import axios from 'axios';

const Adddata = () => {
    const [formData, setFormData] = useState({
        title: '',
        body: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const postData = async (e) => {
        e.preventDefault(); 
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
            console.log('Success:', response.data);
            alert('Data Added Successfully!');
            
            setFormData({ title: '', body: '' });
        } catch (error) {
            console.error('Error adding data:', error);
        }
    };

    return (
        <div>
            <div className='add'>
                <form onSubmit={postData}>
                    <input 
                        type="text" 
                        name='title' 
                        placeholder='Enter Your Title' 
                        value={formData.title} 
                        onChange={handleInputChange} 
                    />      
                    <input 
                        type="text" 
                        name='body' 
                        placeholder='Enter Your Body' 
                        value={formData.body} 
                        onChange={handleInputChange} 
                    />
                    <button type="submit">Add</button>
                </form>
            </div>
        </div>
    );
};

export default Adddata;
