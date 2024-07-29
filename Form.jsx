import React from 'react'
import { useState } from 'react'

function From() {
  const[isLogin,setisLogin]=useState(true)
  return (
    <div className='container'>
      <div className='form-container'> 
      <div className='form-toggle'> 
      <button className={isLogin?'active':"" } onClick={(()=>setisLogin(true)
      )}>Login </button>
      <button className={!isLogin?'active':""} onClick={(()=>setisLogin(false))}>Singn in </button>
      </div>
      {isLogin ?
      <>
      <div className='form'>
        <h2> Log in</h2>
        <input type='text' placeholder='Enter your email' />
        <input type='password' placeholder='Enter your password' />  
        <a href="#">Forget your password</a>
        <button>log in </button>
        <p>New user<a href='#' onClick={(()=>setisLogin(false))}>Singn in</a></p>
      </div>
      </>:  <>
      <div className='form'>
        <h2> Sign up</h2>
        <input type='text' placeholder='Enter your email' />
        <input type='password' placeholder='Enter your password' />  
        <input type='password' placeholder='Conform your password' />  
        <button > Sign up</button>
        
      </div>
      </>}
      </div>


    </div>
  )
}

export default From