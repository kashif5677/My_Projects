import React from 'react';
import Card2 from './Card2';
import { useEffect,useRef } from 'react';
import { gsap } from 'gsap/gsap-core';




const Card1 = () => {

  const handleClick = (url) => {
  window.open(url, "_blank");
};

 

  return (
  <>

<div className='bg-[#F2F2F2] '>
 
<div className="absolute top-180 size-120 pr-1 w-[90%] flex justify-end [transform:translate3d(0px,-10.0656%,0px)_rotate(-6.0001deg)] z-2 

">
  <img    onClick={()=>handleClick("https://i.postimg.cc/sXCk2qdp/Untitled-Project.png")} className=" rounded-3xl grayscale-50 hover:[transform:translate3d(0px,-1.0356%,0px)_rotate(-0.5005deg)] transition-all ease-in-out cursor-pointer hover:grayscale-0 duration-500" src="https://i.postimg.cc/sXCk2qdp/Untitled-Project.png" alt="User"></img>
</div>

<div className=" absolute top-140 size-120 pr-10 w-screen flex justify-end  [transform:translate3d(0px,-10.0656%,0px)_rotate(-2deg)] z-0 ">

    <img onClick={()=>handleClick("https://i.postimg.cc/XJ8LG9Vv/Untitled-Project-3.jpg")}  className=" grayscale-80 rounded-3xl hover:[transform:translate3d(0px,-4.0656%,0px)_rotate(-1deg)] hover:transition-all ease-in-out duration-500 cursor-pointer hover:grayscale-0" src="https://i.postimg.cc/XJ8LG9Vv/Untitled-Project-3.jpg" alt="" />
</div>
<div className='text-3xl p-20 pt-50 text-gray-900'>
I AM MD KASHIF <br /> I CREATE  <span className='inline text-[#14CF93]'> UNCONVENTIAL</span> <br /> YET FUNCTIONAL  <br /> VISUAL PLEADING INTERFACE FOR THE MOBILE AND WEB.


<div className='text-8xl bg-[#F2F2F2] text-gray-900 pl-20 pt-100'>
 Feat Wo<span className='text-[#14CF93] italic'>r</span>ks
</div>
  
<div className='h-[1px]  bg-gray-300 mt-10 '></div>

</div>
<div className='bg-[#F2F2F2]'>

<Card2/>
</div>
</div>

  </>
  );
};

export default Card1;
