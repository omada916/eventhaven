import { useState, useEffect } from "react";
import { login } from "../scripts/auth";
import { readCookie } from "../scripts/cookies";

const Login = ({ setCurrentPage }) => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const handleSubmit = (e) => {
      e.preventDefault();
      login(email, password);
   };
   useEffect(() => {
      const intervalId = setInterval(() => {
         if (readCookie("user") != null) {
            window.location.reload();
            clearInterval(intervalId);
         }
      }, 10); 

      return () => clearInterval(intervalId);
   }, []);

   return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
         <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
         >
            <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
            <div className="mb-4">
               <label className="block text-gray-700">Email</label>
               <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
               />
            </div>
            <div className="mb-6">
               <label className="block text-gray-700">Password</label>
               <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
               />
            </div>
            <button
               type="submit"
               className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
               Login
            </button>
            <p>
               No account?
               <a
                  onClick={() => {
                     setCurrentPage("register");
                  }}
                  className="ml-3 text-blue-600 font-bold cursor-pointer"
               >
                  Sign Up
               </a>
            </p>
         </form>
      </div>
   );
};

export default Login;
