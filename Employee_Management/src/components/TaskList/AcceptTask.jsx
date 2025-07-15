import React from 'react'

const AcceptTask = ({data})=> {
  console.log();
  
  return (
    <div>
      
       <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded-2xl'>{data.category} </h3>
            <h4 className='text-sm'>{data.taskDate}</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold'>{data.taskTitle} </h2>
        <p className='mt-2 text-sm'>{data.taskDescription}</p>

        <div className='flex justify-between mt-4 '>
            <button className='bg-green-500 py-1 px-2 text-sm rounded-2xl'>mark as Completed</button>
            <button  className='bg-red-500 py-1 px-2 text-sm rounded-2xl'>mark as Failed </button>
        </div>
      </div>

    </div>
  )
}

export default AcceptTask
