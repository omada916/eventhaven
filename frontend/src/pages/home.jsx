import React from "react";
import EventList from "../components/event-list";
import Navbar from "../components/navbar";


const Home = () => {
   return (
      <div className="min-h-screen bg-gray-100">
         <Navbar />
         <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">
               Welcome to Eventify
            </h1>
            <EventList />
         </div>
      </div>
   );
};

export default Home;