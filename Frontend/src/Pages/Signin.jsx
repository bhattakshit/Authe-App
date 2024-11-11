import React, { useState } from 'react'
import { FaEyeSlash } from "react-icons/fa";

import { FaEye } from "react-icons/fa";
function Signin() {
  const[visible, setVisible]= useState(false);

  const handleClick=()=>{
    setVisible(!visible)
  }

  return (
//     <div className='border border-red-600 max-w-xl mx-auto mt-16 p-5'>
//       <h1 className='text-center text-2xl font-semibold mb-4'>Sign In</h1>
//       <form className='border border-green-500 text-center p-4'>
//         <input className="input mb-3 border-r-0"  type="email" name="email" placeholder='Email'/>
//         <div  className='flex rounded-[10px] items-center bg-[#EEF5FC] '>
//         <input className='input' type={visible?"text":"password"} name="password"  placeholder="password" />
//         {/* <span className=" border border-yellow-400" onClick={handleClick}>{visible?<FaEye />:<FaEyeSlash />}</span> */}
//         <button type="button" onClick={handleClick} className=" outline-none  mr-3">
//   {visible ? <FaEye /> : <FaEyeSlash />}
// </button>

//         </div>
//       </form>
//     </div>





<div className="max-w-xl mx-auto mt-16 p-5">
  <h1 className="text-center text-4xl font-semibold mb-4">Sign In</h1>
  <form className=" text-center p-4">
    <input 
      className="input mb-3 border-r-0"  
      type="email" 
      name="email" 
      placeholder="Email" 
    />
    <div className="relative w-full">
      <input 
        className="input w-full pr-10"  // Ensuring full width for input and some padding for the eye button
        type={visible ? "text" : "password"} 
        name="password"  
        placeholder="Password" 
      />
      <button 
        type="button" 
        onClick={handleClick} 
        className="absolute top-1/2 transform -translate-y-1/2 right-3"
      >
        {visible ? <FaEye /> : <FaEyeSlash />}
      </button>
    </div>
    <button className="bg-slate-800 w-full p-2 mb-2 rounded-md mt-5 text-white transition duration-300 ease-in-out hover:bg-slate-700">
          Sign In
        </button>
  </form>
  <p className='text-center'>Don't have an account ? <span className='text-blue-800 cursor-pointer'>Sign Up</span></p>

  
</div>




  )
}

export default Signin