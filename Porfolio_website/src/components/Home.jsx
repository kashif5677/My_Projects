import React from 'react'
import Card1 from './Card1'



function Home() {

  



  return (
   <>
   <div className=''>



    <div className=' scroll-smooth flex flex-col row color-black gap-10 p-0 m-5 text-[#383838]'>
        <div className='flex'>
        <h1  id="Creative" className='flex text-[150px]  pl-[50px] mt-[0px] '> Creative</h1>
        <div className="text-[12px] mr-[20px] mb-0 mt-[150px] pl-[300px] text-[#B2B2B2]">
            <h5 >CURRENTLY AVAILABLE FOR</h5>
            <h5>FREELANCE WORLDWIDE</h5>           
        </div>
        <div className="text-[12px] mr-[80px] mb-0 mt-[150px] text-[#B2B2B2]">
            <h5>MY LOCAL TIME  {new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}</h5>
            <h5>GMT (+5:30) </h5>           
        </div>
        </div>

<div className='flex items-center text-[150px] pl-[100px] pt-0  ml-[100px] mt-[-110px]'>
    <svg width="300" height="150" >
  <text x="20" y="100" font-family="Verdana" font-weight="500" font-size="80" fill= '#14CF93' font-style="italic">
    Visual
  </text>
     </svg>
    <h1 className='inline-block mt-0'> Designer</h1>
    </div>
    </div>
    <div className=' absolute pl-20 top-150'>

    <img src="https://abhishekjha.me/down-arrow.040970d7.svg" alt="" />
    </div>

    
</div>

    <Card1 />
   </>
  )
}

export default Home
