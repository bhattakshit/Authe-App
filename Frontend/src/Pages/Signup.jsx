import React, { useState } from 'react';


function Signup() {
  const [signupData,setSignup]= useState({
    name:"",
    email:"",
    password:""
  })

  const handleChange=(e)=>{
    setSignup({...signupData,[e.target.id]:e.target.value});

  };

  const handleSubmit=(e)=>{
    
  }
  return (
    <div className="border border-yellow-600 flex justify-center items-center flex-col h-screen max-h-screen">
      <div className="text-2xl mb-8">Sign Up</div>
      <form onSubmit={handleSubmit} className="flex flex-col w-11/12 sm:w-2/3 md:w-1/3 items-center gap-3">
        <input
          type="text"
          placeholder="Name"
          className="input w-full p-2 border border-gray-300 rounded-md"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          className="input w-full p-2 border border-gray-300 rounded-md"onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          className="input w-full p-2 border border-gray-300 rounded-md"onChange={handleChange}
        />
        <button className="bg-slate-800 w-full p-2 mb-2 rounded-md text-white transition duration-300 ease-in-out hover:bg-slate-700">
          Sign Up
        </button>
       
      </form>
      <button className="bg-red-800 p-2 rounded-md text-white w-11/12 sm:w-2/3 md:w-1/3 transition duration-300 ease-in-out hover:bg-red-700">
          Continue with Google
        </button>
      <div className='flex gap-2 mt-2'>
        <p>Have an account?</p>
        <span className='text-blue-500'>Sign in</span>
      </div>

    </div>
  );
}

export default Signup;
