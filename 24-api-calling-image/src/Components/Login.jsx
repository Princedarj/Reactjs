import { Eye, EyeOff } from 'lucide-react';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {

    const [showPassword, setShowPassword] = React.useState(false);

    return (
        <div className='loginpage'>
            <div className='lgncrd'>
                <h1 className='lgnh1'>Login</h1>

                <p className='lgnp'>
                    Sign in to your account...
                </p>

                <form type="submit" className='lgnfrm'>
                    <input
                        type="text"
                        placeholder='Enter Your Name'
                        className='lgnin1'
                        required
                    /><hr />


                    <div className='lgnpass'>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder='Enter Your Pass'
                            className='lgnin2'
                            required
                        />
                        <span onClick={() => { setShowPassword(!showPassword) }}
                            className='lgneye'>
                            {showPassword ? <Eye /> : <EyeOff />}
                        </span>
                    </div>
                    <hr />

                    <button className='lgnsmt'>
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
