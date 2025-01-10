import { useState } from "react";
import { signup } from "../scripts/auth";

const Register = ({ setCurrentPage }) => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [username, setUsername] = useState("");

   const handleSubmit = (e) => {
      e.preventDefault();
      signup(name, username, email, password);
   };

   return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
         <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
         >
            <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
            <div className="mb-4">
               <label className="block text-gray-700">Name</label>
               <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
               />
            </div>
            <div className="mb-4">
               <label className="block text-gray-700">Username</label>
               <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
               />
            </div>
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
               Register
            </button>
            <p>
               Have an account?
               <a
                  onClick={() => {
                     setCurrentPage("login");
                  }}
                  className="text-blue-200 font-bold cursor-pointer"
               >
                  Log In
               </a>
            </p>
         </form>
      </div>
   );
};

export default Register;
