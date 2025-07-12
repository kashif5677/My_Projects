import React, {useState } from 'react'




export default function Navabr() {


    function SpanAnimation({text}) {
      return (
         <div>
      <a className='relative group text-[16px] font-[100]  cursor-pointer inline-block'>
        {text}

         {/* <!-- Line that appears on hover (left to right) --> */}
          <span className="absolute inline-block bottom-0 left-0 w-full h-[1px] bg-black  transition-all duration-500 group-hover:w-0 origin-left"></span>

          {/* <!-- Line that hides on hover out (right to left then reappears after 100ms) --> */}
         <span className="absolute  inline-block bottom-0 right-0 h-[1px] bg-black w-0 transition-all duration-500 group-hover:w-full origin-left delay-250"></span>
      </a> 
        </div>
        
      )
    }

function HoverDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative inline-block bg-red-300 h-11 text-left"
    
      onMouseEnter={() => setIsOpen(true) }
      onMouseLeave={() => setIsOpen(false)}
    >
      <a href="#" className=" absolute z-10">
       <SpanAnimation text="SOCIALS"/>
       
      </a> 

      { (
        <div className={`absolute  -mt-4 -mb-6 -ml-4 rounded-2xl z-0 bg-white transition-all duration-300 ease-in-out transform ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}>
          <ul className=" text-sm -pt-10  mt-20 w-full text-gray-700">
          <div className='h-[1px] bg-black mx-2 opacity-20'></div>
            <li><a href="https://www.linkedin.com/in/md-kashif-a41a431b9/" className="block px-6 py-2">Linkend</a></li>
            <li><a href="https://www.instagram.com/mdkashifnisar86/" className="block px-6 py-2">Instagram</a></li>
            <li><a href="#" className="block px-6 py-2">Twitter</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}


  return (

<>

<div onclick={()=>Dropdown} className=' sticky top-0 navbar flex justify-between w-screen  p-10 gap-5'>
   <SpanAnimation text="MD KASHIF"/>
   <SpanAnimation text="PLAYBOOK"/>
   <HoverDropdown />
   <SpanAnimation text="CONTACT"/> 

</div>

</>
  )
}
