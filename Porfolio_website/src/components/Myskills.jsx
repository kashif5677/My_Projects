import React from 'react'
import ProjectShowcase from './ProjectShowcase';

export default function Myskills() {
  const skills = [
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Tailwind",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "ReactJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
];
  return (
  <>
  <div className= 'relative w-screen p-0 m-0  top-[-100px] h-screen bg-cover bg-[#F2F2F2]'>
  
    
  <div className="w-full mt-0 ">

  
<div className='text-8xl bg-[#F2F2F2] text-[#383838] pl-20 pt-10'>
 My Sk<span className='text-[#14CF93] italic'>i</span>lls
 <div className='h-[1px]  bg-gray-300 mt-10 '></div>
</div>
  

               
 
      <div className="w-full mx-auto px-0 py-0 flex flex-col  items-start justify-between ">
      
         <div className="w-full min-h-screen bg-[#F2F2F2] flex items-center justify-center px-4 py-16">
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="group bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-tr from-blue-100 to-purple-100"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-16 h-16 mb-4 transition-transform duration-500 group-hover:rotate-6"
            />
            <span className="text-lg font-semibold text-gray-700 group-hover:text-indigo-700">
              {skill.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
      </div>
    </div>
    <ProjectShowcase/>
  </div>
  
  </>
  )
}
