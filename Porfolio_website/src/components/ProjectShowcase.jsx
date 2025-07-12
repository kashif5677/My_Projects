import React from "react";
import Footer from "./Footer";

const projects = [
  {
    name: "Portfolio Website",
    description: "A personal site built with React and Tailwind CSS.",
    tech: ["React", "Tailwind", "GSAP"],
  },
  {
    name: "Employee Admin dashboard",
    description: "A functional website to handle the Login of Admin and Employee both.",
    tech: ["React", "Tailwind"],
  },
  {
    name: "AI Image Inhancer",
    description: "A fully functional AI to clear the background.",
    tech: ["HTML", "CSS", "JavaScript","Tailwind"],
  },
  {
    name: "Animated website",
    description: "A beautiful animated website ",
    tech: ["HTML", "CSS", "javascript"],
  },
];

const ProjectShowcase = () => {
  return (
    <div className=" w-full bg-[#F2F2F2] flex flex-col items-start">

      <div className="group relative inline-block ">
    
<div className=' text-8xl bg-[#F2F2F2] text-[#383838] pt-10 pl-20'>
 My Pro<span className='text-[#14CF93] italic'>j</span>ects
 {/* <div className='h-[1px]  bg-gray-300 mt-20 '></div> */}
</div>
                
 {/* <!-- Line that appears on hover (left to right) --> */}
          {/* <span className="absolute inline-block top-15 left-0 w-full h-[3px] bg-blue-900  transition-all duration-500 group-hover:w-0 origin-left"></span> */}

          {/* <!-- Line that hides on hover out (right to left then reappears after 100ms) --> */}
         {/* <span className="absolute  inline-block top-15 right-0 h-[1px] bg-black w-0 transition-all duration-500 group-hover:w-full origin-left delay-250"></span> */}
</div>

    
      <ul className="space-y-10 flex flex-col w-full ml-50 pt-50 pb-40  pr-20 pl-50 ">
        {projects.map((project, index) => (
          <li
            key={index}
            className="group relative  rounded-xl bg-[#f2F2F2]  transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]"
            style={{ animation: `fadeInUp 0.5s ease ${index * 0.2}s forwards`, opacity: 0 }}
          >
            <h3 className="text-3xl  w-full flex justify-center items-center font-semibold text-[#414141] group-hover:underline">
              {project.name}
            </h3>
            <p className="mt-2 text-gray-400 flex justify-center">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2 justify-center">
              
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs flex justify-center bg-indigo-100 text-[#414141] px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
          
              ))}
            </div>
 <div className='h-[2px] w-screen bg-gray-300 mt-10 ml-40  '></div>
          </li>
        ))}
      </ul>
        <Footer/>

      {/* Fade-in animation keyframes */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>

  );
};

export default ProjectShowcase;
