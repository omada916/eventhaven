const Navbar = ({ setCurrentPage }) => {
   return (
      <nav className="bg-blue-600 p-4 text-white fixed w-full top-0 z-50">
         <div className="container mx-auto flex justify-between items-center">
            <span className="text-xl font-bold">ventify</span>
            <div className="space-x-4">
               <button
                  onClick={() => setCurrentPage("home")}
                  className="hover:text-blue-200"
               >
                  Home
               </button>
               <button
                  onClick={() => setCurrentPage("register")}
                  className="hover:text-blue-200"
               >
                  Register
               </button>
               <button
                  onClick={() => setCurrentPage("login")}
                  className="hover:text-blue-200"
               >
                  Login
               </button>
               <button
                  onClick={() => setCurrentPage("dashboard")}
                  className="hover:text-blue-200"
               >
                  Dashboard
               </button>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
