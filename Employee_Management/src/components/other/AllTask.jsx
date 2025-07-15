import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'


const AllTask= ()=> {

        const [userData,setUserData] = useContext(AuthContext)


  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded h-60 '>

        <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded '>

                <h2 className='w-1/5 text-lg font-medium'>Employee Name</h2>
                <h3 className='w-1/5 text-lg font-medium'>New Task</h3>
                <h5 className='w-1/5 text-lg font-medium'>Active Task</h5>
                <h5 className='w-1/5 text-lg font-medium'>Completed</h5>
                <h5 className='w-1/5 text-lg font-medium'>Failed</h5>

        </div>
        <div id="alltask" className='h-[80%] overflow-auto '>

        
                {userData.map(function(e,idx){
                        return(
                <div key={idx} className='border-1 mb-2 py-2 px-4 flex justify-between rounded'>

                <h2 id="firstName" className='w-1/5'>{e.firstName}</h2>
                <h3 className='w-1/5 text-lg font-medium ' style={{color:"blue"}}>{e.taskCounts.newTask}</h3>
                <h5 className='w-1/5 text-lg font-medium ' style={{color:"yellow"}}>{e.taskCounts.active} </h5>
                <h5 className='w-1/5 text-lg font-medium' style={{color:"green"}}>{e.taskCounts.completed}</h5>
                <h5 className='w-1/5 text-lg font-medium ' style={{color:"red"}}>{e.taskCounts.failed}</h5>

                 </div>)})}
        </div>

 </div>
  )
}

export default AllTask