import React from 'react'
import Header from '../other/Header'
import CreateTask from './CreateTask'
import AllTask from '../other/AllTask'

function AdminDashboard(props) {
  return (
    <div className='h-screen w-full p-10'>
      <Header changeUser={props.changeUser}/> 
      <CreateTask data={props.data}/>
      <AllTask data={props.data}/>  
    </div>
  )
}

export default AdminDashboard
