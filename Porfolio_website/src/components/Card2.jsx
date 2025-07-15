import React, { useEffect } from 'react'
import CardShow from './Cradshow'
import Myskills from './Myskills'

function Card2() {


 useEffect(()=>{
  function cardShow(){
    document.querySelectorAll("#cursor")
    .forEach(function(e){
      let showImage;
      e.addEventListener("mousemove",function(data){

       const box= document.querySelector('#cursor').children[data.target.dataset.index];
      console.log(box);
      
  
        
        showImage=data.target
      document.querySelector('#cursor').children[showImage.dataset.index].style.opacity='100';
      document.querySelector('#cursor').children[showImage.dataset.index].style.transition='all 0.5s ease';


      });
      e.addEventListener("mouseleave",function(data){
      document.querySelector('#cursor').children[showImage.dataset.index].style.opacity='0';
    
  
      })
    })
  }
  cardShow()
 },[])

 const githubLink=()=>{
   window.open("https://github.com/kashif5677/My_Projects")
   
 }
  
  return (
    <>

  

    <div className='p-0 m-0 '>
 
    <div className='w-screen h-screen ml-20 pl-20 '>
      <div id='cursor' className='absolute m-0 p-0  w-[40%] h-[55%]'>
        
    <img data-index="0" className="absolute opacity-0 rounded-[30px] w-full h-full object-cover " src="https://i.postimg.cc/C1YsmdJL/Screenshot-2025-07-08-000621.png" alt="" />
    

       <button
       onClick={githubLink}
      className="absolute bottom-6 right-6 z-50 
                 bg-gradient-to-r from-indigo-500 to-purple-600 
                 text-white px-6 py-3 rounded-full 
                 shadow-xl hover:shadow-2xl
                 hover:scale-110 transition-all duration-300
                 animate-bounce 
                 cursor-pointer"
    >

      ✨ Github
    
    </button>
  
      <img className=' rounded-[30px] opacity-100' src="https://i.postimg.cc/vBr3tWX9/Screenshot-2025-07-06-231856-2.jpg" alt="" /> 
      </div>

    </div>
    </div>

    


    </>
    
  )
}

export default Card2
