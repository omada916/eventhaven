const NotFound = ({ setCurrentPage }) => {
   return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
         <h1 className="text-9xl font-bold text-gray-800">404</h1>
         <p className="text-2xl text-gray-600 mt-4">Oops! Page not found.</p>
         <p className="text-lg text-gray-500 mt-2">
            The page you are re looking for does not exist or has been moved.
         </p>
         <a onClick={() => setCurrentPage("home")} className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
            Go Back Home
         </a>
      </div>
   );
};

export default NotFound;
