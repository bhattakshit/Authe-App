// import React from 'react'

// function Header() {
//   return (
//     <>
//     <nav className='hidden  md:bg-slate-700 md:flex md:gap-[59%] md:p-5 items-center'>
//       <div className='border border-red-600 text-2xl ml-[10%] '>Auth-App</div>
//       <ul className='flex border border-yellow-500 space-between gap-6 items-center'>
//         <li>Home</li>
//         <li>Login</li>
//         <li>SignUp</li>
//       </ul>
//     </nav>
//     <nav className='md:hidden'>
//       <div>Auth-App</div>
//     </nav>


    
//     </>
//   )
// }

// export default Header
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// function Header() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen((prev) => !prev);
//   };

//   return (
//     <>
//       {/* Navigation for medium screens and up */}
//       <nav className='hidden md:bg-slate-700 md:flex md:gap-[59%] md:p-5 items-center'>
//         <div className='border border-red-600 text-2xl ml-[10%]'>Auth-App</div>
//         <ul className='flex border border-yellow-500 gap-6 items-center'>
//           <li>
//             <Link to="/" className='text-white hover:text-gray-300'>Home</Link>
//           </li>
//           <li>
//             <Link to="/login" className='text-white hover:text-gray-300'>Login</Link>
//           </li>
//           <li>
//             <Link to="/signup" className='text-white hover:text-gray-300'>Sign Up</Link>
//           </li>
//         </ul>
//       </nav>

//       {/* Mobile Navigation */}
//       <nav className='md:hidden'>
//         <div className='flex justify-between items-center p-5 bg-slate-700'>
//           <div className='text-2xl'>Auth-App</div>
//           {/* Hamburger Icon */}
//           <button onClick={toggleMobileMenu} className='text-white focus:outline-none'>
//             {isMobileMenuOpen ? '✖️' : '☰'}
//           </button>
//         </div>
//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className='bg-slate-600 p-5'>
//             <ul className='flex flex-col gap-4'>
//               <li>
//                 <Link to="/" className='text-white hover:text-gray-300' onClick={toggleMobileMenu}>Home</Link>
//               </li>
//               <li>
//                 <Link to="/login" className='text-white hover:text-gray-300' onClick={toggleMobileMenu}>Login</Link>
//               </li>
//               <li>
//                 <Link to="/signup" className='text-white hover:text-gray-300' onClick={toggleMobileMenu}>Sign Up</Link>
//               </li>
//             </ul>
//           </div>
//         )}
//       </nav>
//     </>
//   );
// }

// export default Header;






import React, { useState } from 'react';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      {/* Navigation for medium screens and up */}
      <nav className='hidden md:bg-slate-700 md:flex md:gap-[59%] md:p-5 items-center '>
        <div className=' text-2xl ml-[10%] text-white font-semibold'>Auth-App</div>
        <ul className='flex  gap-6 items-center cursor-pointer'>
          <li className='text-white hover:text-gray-300'>Home</li>
          <li className='text-white hover:text-gray-300'>Login</li>
          <li className='text-white hover:text-gray-300'>Sign Up</li>
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <nav className='md:hidden'>
        <div className='flex justify-between items-center p-5 bg-slate-700'>
          <div className='text-2xl'>Auth-App</div>
          {/* Hamburger Icon */}
          <button onClick={toggleMobileMenu} className='text-white focus:outline-none'>
            {isMobileMenuOpen ? '✖️' : '☰'}
          </button>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className='bg-slate-600 p-5'>
            <ul className='flex flex-col gap-4'>
              <li className='text-white hover:text-gray-300'>Home</li>
              <li className='text-white hover:text-gray-300'>Login</li>
              <li className='text-white hover:text-gray-300'>Sign Up</li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Header;
