import React from 'react'


export default function Footer() {

  function BarAnimation({text,src}){
    return(
<>
  <div className='group relative h-[50px] pr-60 mt-180 mr-10 text-2x 
  
      
                                 
      bg-[image:linear-gradient(#14CF93,#14CF93)]
         bg-no-repeat bg-[length:100%_0%]         
         transition-[background-size] duration-300 ease-in-out
         hover:bg-[length:100%_100%]'>

    <span className='absolute w-full flex mt-0 mb-50 pl-10 pr-50 h-[1px] opacity-40 bg-white'>
    </span>
      <span className='absolute text-xl pt-3 group-hover:ml-4 hover:transition-all duration-300 ease-in-out'>
    {text}
      </span>
      <span className= 'absolute w-full group-hover:-ml-4'>

    <img className=' absolute top-2 bottom-3 right-2 ' src={src} alt="" />
      </span>
    </div>
</>

    )
  }

  const handleclick=()=>{
    window.open("mailto:mdkashifnisar5500@gmail.com")
  }
  
  return (

    <>
    
    
    <div className= 'relative w-screen text-center bg-gradient-to-b from-[#253B39] to-[#152529] flex flex-col  items-center text-white h-[150vh] text-7xl '>

      <span className='absolute pt-15 mt-15 '>

      LET'S TALK <br /> ABOUT NEXT  THE<br /> BIG THING 
      </span>


<div className=' absolute flex pt-40 mt-60 text-3xl space-x-10'>

   <span onClick={handleclick} className=' border-[1px]  pt-5 pb-5 pr-30 pl-30 ml-20 mr-20 rounded-full 
   cursor-pointer
   bg-transparent

     hover:scale-100 
   
   bg-[linear-gradient(#FFFFFF,#FFFFFF)]  
         bg-no-repeat
         bg-center                            
         bg-[length:0%_100%]                   

         transition-[background-size] duration-300 ease-[cubic-bezier(0, 0.89, 0.41, 1)]
         hover:bg-[length:100%_100%]
         hover:text-black
         hover:border-white'>

    <div className=''>

    write Message
      
    </div>
    </span>

    <span className=' border-[1px] pt-5 pb-5 pr-30 pl-30 ml-25 mr-50 rounded-full  bg-transparent
    hover:scale-100 origin-center
   
   bg-[linear-gradient(#FFFFFF,#FFFFFF)]  
         bg-no-repeat
         bg-center                             
         bg-[length:0%_100%]                   

         transition-[background-size] duration-300 ease-[cubic-bezier(0, 0.89, 0.41, 1)]
         hover:bg-[length:100%_100%]
         hover:text-black
         hover:border-white'>
          Discuss project</span>
       </div> 
       
<div className=' flex justify-between gap-5'>


<span>
<a   href="https://www.instagram.com/mdkashifnisar86/" target='_blank'>
<BarAnimation text='Instagram' src="https://abhishekjha.me/insta.f788fd3b.svg"/>
</a>
</span>

<span>
<a href="https://www.linkedin.com/in/md-kashif-a41a431b9/" target='_blank'>
<BarAnimation text='Linkend' src="https://img.icons8.com/?size=39&id=ueL7DoJEirDr&format=png&color=FFFFFF"/>
</a>
</span>
<span>
<BarAnimation text="Twitter" src="https://img.icons8.com/?size=39&id=6Fsj3rv2DCmG&format=png&color=FFFFFF"/>
</span>

</div>
<div className='relative flex justify-around mt-5 pt-15 w-screen space-x-200 text-[15px] text-gray-600'>
  
  <span>

  ©2025 Md kashif, All rights reserved • <span className='underline'>Credits</span>
  </span>

  <span className='underline text-l'>2025 Porfolio</span>
 </div>

  </div> 

  </>
  )
}
