import React, { useActionState, useEffect, useState } from 'react'
import { AuthContext} from '../../context/AuthProvider'
import { useContext } from 'react'


function CreateTask()
 {

  const [userData,setUserData] = useContext(AuthContext)
  
    
    
    const [taskTitle,setTaskTitle]=useState('')
    const [taskDescription,setTaskDescription]=useState('')
    const [taskDate,setTaskDate]=useState('')
    const [asignTo,setAsignTo] =useState('')
    const [category,setcategory]=useState('')
    
    // const [Newtask,setNewTask]=useState({})


    const submithandler=(e)=>{
        e.preventDefault()

        const createtask={taskTitle,taskDescription,taskDate,category,asignTo,active:false,newTask:true,failed:false,complete:false}
        
        userData.forEach(function(e){
          if(asignTo == e.firstName){
           const newData= e.tasks.push(createtask);
            e.taskCounts.newTask;
            console.log(userData);
            
           { e.taskCounts.newTask = e.taskCounts.newTask + 1};
             
        }
    }

  )
   localStorage.setItem('employees', JSON.stringify(userData))
    
    setUserData(userData)
       console.log(userData);
        
         setTaskDate('')
        setAsignTo('')
        setcategory('')
        setTaskDescription('')
        setTaskTitle('')


    }


   


  return (
    
         <div className='bg-stone-900 p-5 mt-7 rounded'>
        <form onSubmit={(e)=>{
     submithandler(e)

            
        }} 
        className='flex flex-wrap justify-between w-full  items-start'>

            <div className='w-1/2'>
                 <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>
                    Task Title</h3>

                <input 
                value={taskTitle}
                onChange={(e)=>{
                   setTaskTitle( e.target.value)
                }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none  border-[1px] border-gray-400 bg-transparent' type="text" placeholder='Make a UI design' />
                </div>

                <div className=''>
                <h3 className='text-sm w-4/5 text-gray-300 mb-0.5  border-gray-400'>Date</h3>
                 <input 
                 value={taskDate}
                 onChange={(e)=>{
                   setTaskDate( e.target.value)
                 }}
                 className="text-sm py-1 px-2 w-4/5 rounded outline-none border-[1px] border-gray-400 bg-transparent" type="date" name="" id="" />
           </div>
            <div>
                <h3 className='text-sm text-gray-300 mb-0.
                5'>Asign to</h3>
                <input
                value={asignTo}
                onChange={(e)=>{
                   setAsignTo( e.target.value)
                }}
                
                className='text-sm py-1 px-2 w-4/5 rounded outline-none border-[1px] border-gray-400 bg-transparent' type="text" name="" id="" placeholder='Employe name' />
            </div>
            <div>
                <h3 className='text-sm text-gray-300 mb-0. 
                5'>Categories</h3>
                <input 
                value={category}
                onChange={(e)=>{
                   setcategory( e.target.value)
                }}
                
                className="text-sm py-1 px-2 w-4/5 rounded outline-none border-[1px] border-gray-400 bg-transparent" type="text" name="" id="" placeholder='design,dev,etc' />
            </div>

            </div>

            <div className='w-2/5 flex flex-col items-start '>
                <h3 className='text-sm text-gray-300 mb-0.5 '>Description</h3>
                <textarea 
                value={taskDescription}
                onChange={(e)=>{
                 setTaskDescription(e.target.value)
                }}
                
                className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400" name="" id="" cols="30" rows="10"></textarea>

                <button className='bg-emerald-500 rounded
                                    py-3 hover:bg-emerald-600 px-5 text-sm mt-4 w-full '>Create Task</button>

            </div>
        </form>
      </div>
    
  )
}

export default CreateTask
