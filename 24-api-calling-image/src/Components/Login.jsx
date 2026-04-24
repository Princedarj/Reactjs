import { Eye, EyeOff } from 'lucide-react';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Login = ({showPopup}) => {

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = React.useState(false);

    const [loginData, setLogindata] = useState({
        e_mail:'',
        password:''
    });

    const handleChange = (e) => {
        setLogindata({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleLogin = (e) => {
        e.preventDefault();

        const existingUsers = JSON.parse(localStorage.getItem('allUsers')) || [];
    
        const userFound = existingUsers.find(user =>
            user.e_mail === loginData.e_mail && user.password === loginData.password
        );

        if(userFound){
            showPopup(`Welcome back, ${userFound.firstname}!`);
            navigate('/');
        }else{
            showPopup("Invalid Email or Password!");
        }
    };

    return (
        <div className='loginpage'>
            <div className='lgncrd'>
                <h1 className='lgnh1'>Login</h1>

                <p className='lgnp'>
                    Sign in to your account...
                </p>

                <form onSubmit={handleLogin} className='lgnfrm'>
                    <input
                        type="email"
                        name='e_mail'
                        value={loginData.e_mail}
                        onChange={handleChange}
                        placeholder='Enter Your E-Mail'
                        className='lgnem'
                        required
                    /><hr />


                    <div className='lgnpass'>
                        <input
                            type={showPassword ? "text" : "password"}
                            name='password'
                            value={loginData.password}
                            onChange={handleChange}
                            placeholder='Enter Your Pass'
                            className='lgnpas'
                            required
                        />
                        {loginData.password && (
                            <span onClick={() => { setShowPassword(!showPassword) }}
                                className='lgneye'>
                                {showPassword ? <Eye /> : <EyeOff />}
                            </span>
                        )}
                    </div>
                    <hr />

                    <button 
                        className='lgnsmt'
                        type='submit'    
                    >
                        Submit
                    </button>

                    <p className='reglink'>
                        Have you no Account? &nbsp;
                        <Link
                            to={'/register'}
                            className='lgnreg'>
                            Regester Here...
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login
