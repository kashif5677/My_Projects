import React from 'react'
import { useLayoutEffect, useState } from 'react'
import { useEffect,useRef} from 'react';
import {gsap,Power3,Circ} from 'gsap'
import Navabr from './Navabr';
import Home from './Home';
import Animation from './Animation';
import Myskills from './Myskills';
import ProjectShowcase from './ProjectShowcase'

export default function StartPage() {

      useEffect(() => {
    let tl = gsap.timeline();

    tl.to("#box1", {
              height:0,
              duration:4,
              delay:3,
              ease:"Expo.easeInOut"

    })
    tl.to(".box2", {
              
              height:"100%",
              duration:1.5,
              delay:-4,
              ease:"Expo.easeInOut"

    })
    tl.to(".box3", {
              width:"100%",
              height:"100%",
              duration:1,
              delay:-3,
              ease:"Expo.easeInOut"

    })
   
  }, []);

  
 


useEffect(() => {
  function revelspan() {
    document.querySelectorAll(".reveal").forEach(function (e) {
      // Avoid re-wrapping if already wrapped
      if (e.querySelector(".parent")) return;

      let parent = document.createElement("span");
      let child = document.createElement("span");

      parent.classList.add("parent","inline-block","overflow-hidden");
      child.classList.add("child","inline-block","overflow-hidden");

      child.innerHTML = e.innerHTML;
      parent.appendChild(child);

      e.innerHTML = "";
      e.appendChild(parent);
    });
  }

  revelspan();

  let tl = gsap.timeline();

  tl.fromTo(".span", 
    {x:"200"}
    ,{
      x:0,
      duration:1.5,
      stagger:0.2,
      delay:1,
      
      ease: Power3.easeInOut
  })

  .to(".parent .child", {
    y: "-100%",
      duration:1,
      ease: Circ.easeInOut,
  
  });

}, []);
  return (
    <div>
      


<div className=" container w-screen h-screen bg-cover">
   <div id='box1' className="box1 w-screen h-[100%]
                  bg-black"> 
                  <div  className=" reveal text-[15px]  mt-[10px] w-[100%] text-gray-300 flex justify-center items-center ">DESIGN PORFOLIO <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@2025</div>
           <div className=' h-full italic font-semibold text-white flex items-center justify-center text-center text-[90px]  '>
         
          <h1 className='reveal text-white'> 

          <span className="span inline-block  ">  &nbsp;Md</span>
          <span className="span inline-block font-['Times_New_Roman',serif] text-[#14CF93]">  &nbsp;kashif</span>
          <span className="span inline-block "> &nbsp;  is a</span>
              <br />
              </h1></div>
            </div>       

   <div className=" box2 absolute w-full bottom-0 h-0  bg-[#14CF93]"></div>
   <div className='box3 absolute block bottom-0 w-full h-0 bg-[#FCFAF8]'>
  <Navabr/>
   <Home/>
   <Myskills/>

    </div>
   </div>
    </div>
   
  )
}
