import { useState } from 'react'
import Home from './Components/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8 px-4'>

    <div className=' text-center mb-8'>  
      <h1 className='text-5xl'>
        AI image Inhancer!!!
      </h1>
    
    <p className='text-gray-500'>Powered by @Md kashif </p>
    </div>
  
      <Home/>

    <div className='text-lg text-gray-500'>
    upload your image to enhance it 
    </div>

    </div>
  )
}

export default App
