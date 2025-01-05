import { useState } from "react";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Register from "./pages/register";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";

const App = () => {
   const [currentPage, setCurrentPage] = useState("home");

   const renderPage = () => {
      switch (currentPage) {
         case "home":
            return <Home setCurrentPage={setCurrentPage} />;
         case "register":
            return <Register />;
         case "login":
            return <Login />;
         case "dashboard":
            return <Dashboard />;
         default:
            return <Home />;
      }
   };

   return (
      <div>
         <Navbar setCurrentPage={setCurrentPage} />
         {renderPage()}
      </div>
   );
};

export default App;
