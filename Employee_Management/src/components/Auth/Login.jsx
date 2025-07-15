import React, { useState } from "react";

const Login = ({handleLogin}) => {

  

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const submithandler = (e) => {
    e.preventDefault() 
    console.log("Task submitted");
    handleLogin(email,password);
    setemail("");
    setpassword("");
    
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded border-emerald-600 p-20">
        <form
        
          onSubmit={(e) => {
            submithandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            required
            className=" text-black outline-none placeholder:text-stone-400 bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full mt-2"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            required
            className=" text-black outline-none placeholder:text-stone-400 bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full p-2 mt-2"
            type="password"
            placeholder="Enter your passwords"
          />
          <button className=" text-black outline-none placeholder:text-stone-400  bg-emerald-600 text-xl py-3 px-5 rounded-full p-2 m-2">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
