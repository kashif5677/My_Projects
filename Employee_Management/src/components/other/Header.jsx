import React from 'react'
import { setLocalStorage } from '../../utils/localStorage'

function Header(props) {


const logOutUser=()=>{
localStorage.setItem('loggedInUser','')
props.changeUser(null)

// window.location.reload()
}

  return (
    <div className='flex items-center justify-between'>
      <h1 className='text-2xl font-medium p-5'>Hello, <br /> 
       
      <span className='text-3xl font-semibold bg-red-500 rounded-xl px-2  '>
          
         {props.data?props.data.firstName:"kashif"} </span> </h1>
       
      <button onClick={logOutUser} className='bg-red-500 px-5 py-2 font-medium rounded-xl'>log Out</button>
    </div>
  )
}

export default Header
