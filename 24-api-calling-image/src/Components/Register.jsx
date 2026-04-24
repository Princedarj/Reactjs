import { Eye, EyeOff } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Register = ({showPopup}) => {

    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirm_password, setShowConfirm_password] = React.useState(false);

    const [formData, setFormData] = useState({
        firstname: '',
        midlename: '',
        lastname: '',
        e_mail: '',
        phone_number: '',
        password: '',
        confirm_password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegister = (e) => {
        e.preventDefault();

        //  CHECK if password match
        if(formData.password !== formData.confirm_password){
            showPopup("Passwords doesn't MATCH.! ");
            return;
        }

        const existingUsers = JSON.parse(localStorage.getItem('allUsers')) || [];

        //  CHECK if email exists
        const isEmailTaken = existingUsers.some(user => user.e_mail === formData.e_mail);

        if (isEmailTaken) {
            showPopup("You already have an Account...");
            return; 
        }

        const updatedUsers = [...existingUsers, formData];

        localStorage.setItem('allUsers', JSON.stringify(updatedUsers));

        showPopup("Regestered Successfully..");

        setFormData({
            firstname: '',
            midlename: '',
            lastname: '',
            e_mail: '',
            phone_number: '',
            password: '',
            confirm_password: ''
        });
    };

    return (
        <div className='registerpage'>
            <div className='regcrd'>
                <h1 className='regh1'>Register</h1>

                <p className='regp'>
                    Register your account here...
                </p>

                <form onSubmit={handleRegister} className='regfrm'>
                    <input
                        type="text"
                        name='firstname'
                        value={formData.firstname}
                        placeholder='First Name'
                        className='regin1'
                        onChange={handleChange}
                        required
                    /><hr />

                    <input
                        type="text"
                        name='midlename'
                        value={formData.midlename}
                        placeholder='Midle Name'
                        className='regin2'
                        onChange={handleChange}
                        required
                    /><hr />

                    <input
                        type="text"
                        name='lastname'
                        value={formData.lastname}
                        placeholder='Last Name'
                        className='regin3'
                        onChange={handleChange}
                        required
                    /><hr />

                    <input
                        type="email"
                        name='e_mail'
                        value={formData.e_mail}
                        placeholder='Your E-Mail'
                        className='regem'
                        onChange={handleChange}
                        required
                    /><hr />

                    <input
                        type="tel"
                        name='phone_number'
                        value={formData.phone_number}
                        placeholder='Phone No..'
                        className='regnu'
                        onChange={handleChange}
                        required
                    /><hr />

                    <div className='regpass'>
                        <input
                            type={showPassword ? "text" : "password"}
                            name='password'
                            value={formData.password}
                            placeholder='Password'
                            className='regpas'
                            onChange={handleChange}
                            required
                        />
                        {formData.password && (
                            <span onClick={() => { setShowPassword(!showPassword) }}
                                className='regeye'>
                                {showPassword ? <Eye /> : <EyeOff />}
                            </span>
                        )}
                    </div>
                    <hr />

                    <div className='regpass'>
                        <input
                            type={showConfirm_password ? "text" : "password"}
                            name='confirm_password'
                            value={formData.confirm_password}
                            placeholder='Confirm Password'
                            className='regconpas'
                            onChange={handleChange}
                            required
                        />
                        {formData.confirm_password && (
                            <span onClick={() => { setShowConfirm_password(!showConfirm_password) }}
                                className='regeye'>
                                {showConfirm_password ? <Eye /> : <EyeOff />}
                            </span>
                        )}
                    </div>
                    <hr />

                    <button
                        type='submit'
                        className='regsmt'
                    >
                        Submit
                    </button>

                    <p className='lgnlink'>
                        Do you have Account? &nbsp;
                        <Link
                            to={'/login'}
                            className='reglgn'>
                            Login Here...
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Register