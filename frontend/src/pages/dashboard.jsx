import { useState } from "react";
import EventList from "../components/event-list";

var Dashboard = ({ setCurrentPage }) => {
   // Boolean to check if the user is logged in
   const [isLoggedIn, setIsLoggedIn] = useState(false); // Set to false for demonstration
   /*
   if (!isLoggedIn) {
      return (
         <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="text-center">
               <h1 className="text-2xl font-bold text-gray-800 mb-4">
                  Please log in to view your events.
               </h1>
               <p
                  onClick={setCurrentPage("register")}
                  className="text-gray-600"
               >
                  Redirecting to login page...
               </p>
            </div>
         </div>
      );
   }
   */
   var user = 
   return (
      <div className="min-h-screen bg-gray-100 p-6">
         {/* Dashboard Header */}
         <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800">Dashboard</h1>
            <p className="text-gray-600">View and manage your events</p>
         </div>

         {/* User Events Section */}
         <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
               Your Events
            </h2>
            <EventList eventList= />
         </div>
      </div>
   );
};

export default Dashboard;
