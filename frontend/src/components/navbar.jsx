import { useState } from "react";

const Navbar = ({ setCurrentPage }) => {
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

   const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
   };
   return (
      <nav className="bg-blue-600 p-4 text-white fixed w-full top-0 z-50">
         <div className="container mx-auto flex justify-between items-center">
            <span className="text-xl font-bold">Eventify</span>
            <div className="space-x-4 w-128">
               <button
                  onClick={() => setCurrentPage("home")}
                  className="hover:text-blue-200"
               >
                  Home
               </button>
               <button
                  onClick={() => setCurrentPage("dashboard")}
                  className="hover:text-blue-200"
               >
                  Dashboard
               </button>
               <button
                  onClick={() => setCurrentPage("creator")}
                  className="hover:text-blue-200"
               >
                  Create Event
               </button>
               <button
                  onClick={() => setCurrentPage("Dbv")}
                  className="hover:text-blue-200"
               >
                  View Data
               </button>
               <button onClick={toggleDropdown} className="hover:text-blue-200">
                  Account
               </button>
               {isDropdownOpen && (
                  <div className="absolute right-0 w-59 h-200 bg-blue-600 rounded-md shadow-lg z-10">
                     <div
                        onClick={() => setCurrentPage("login")}
                        className="m-5 hover:text-blue-200 cursor-pointer"
                     >
                        Log In
                     </div>
                     <div
                        onClick={() => setCurrentPage("register")}
                        className="m-5 hover:text-blue-200 cursor-pointer"
                     >
                        Register
                     </div>
                  </div>
               )}
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
