import { useState } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(0)
 const [numberAllowed,setnumberAllowed] =useState(0)
 const [charAllowed,setcharAllowed] =useState(0)
 const [Password,setpassword] =useState(0)

  return (
  <>
    <h1 className="text-4xl text-center text-white font-bold m-25 ">
          Password Generator 
  </h1>
  
  </>
  )
}

export default App
