import React from 'react'

const Login = () => {
  return (
    <div className='lbody'>
      <div className='block2'>
        <div className='lt'>
          <h1>LOGIN</h1>
          <p>Welcome back please login to your account</p>
        </div>

        <div className='form'>
          <form action="POST" >
            Name:- <input type="text" placeholder='Enter Your Name'/><br /><br />
            Pass:- <input type="text" placeholder='Enter Your Password  '/><br /><br /><br />
          
            <div className='check'>
            <input type="checkbox"  className='ch1'/> 
            <p className='ch'>Remember me</p>
            </div>
            <button className='lb'>Sign In</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
