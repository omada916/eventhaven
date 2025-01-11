import { useState } from "react";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Register from "./pages/register";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Events from "./pages/events";
import Creator from "./pages/creator";
import Dbv from "./pages/db-visualizer";
import Editor from "./components/event-editor";

const App = () => {
   const [currentPage, setCurrentPage] = useState("home");
   const renderPage = () => {
      switch (currentPage) {
         case "home":
            return <Home setCurrentPage={setCurrentPage} />;
         case "register":
            return <Register setCurrentPage={setCurrentPage} />;
         case "login":
            return <Login setCurrentPage={setCurrentPage} />;
         case "dashboard":
            return <Dashboard setCurrentPage={setCurrentPage} />;
         case "events":
            return <Events />;
         case "creator":
            return <Creator setCurrentPage={setCurrentPage} />;
         case "Dbv":
            return <Dbv />;
         case "editor":
            return <Editor />;
         default:
            return <Home setCurrentPage={setCurrentPage} />;
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
