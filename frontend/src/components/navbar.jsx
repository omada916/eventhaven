import React from "react";

const Navbar = () => {
   return (
      <nav className="bg-blue-600 p-4 text-white fixed w-full top-0 z-50">
         <div className="container mx-auto flex justify-between items-center">
            <a href="/" className="text-xl font-bold">
               Eventify
            </a>
            <div className="space-x-4">
               <a href="/signup" className="hover:text-blue-200">
                  Register
               </a>
               <a href="/login" className="hover:text-blue-200">
                  Login
               </a>
               <a href="/dashboard" className="hover:text-blue-200">
                  Dashboard
               </a>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;