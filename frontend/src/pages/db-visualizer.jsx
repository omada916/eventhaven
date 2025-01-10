import { useState, useEffect } from "react";
import { getValuesAsJson } from "../scripts/firebase";
import { readCookie } from "../scripts/cookies";
import JSONPretty from 'react-json-pretty';
var Dbv = () => {
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
   const [events, setEvents] = useState("");
   
   const fetchEvents = async () => {
      try {
         var eventsList = await getValuesAsJson('/');
         setEvents(eventsList);
      } catch (err) {
         setError("Failed to fetch.");
         console.error(err);
      } finally {
         setLoading(false);
      }
   };
   useEffect(() => {
      fetchEvents();
   }, []);

   if (readCookie("user") === "omada15") {
      return (
         <div className="min-h-screen bg-gray-100 py-16">
            {loading ? (
               <p className="text-center text-gray-600">Loading data...</p>
            ) : error ? (
               <p className="text-center text-red-500">{error}</p>
            ) : (
               <JSONPretty data={events} />
            )}
         </div>
      )
   } else {
      <div className="min-h-screen bg-gray-100 py-16">
         <p className="text-center text-red-500">401 Not Authorized</p>
      </div>
   }

   
}

export default Dbv;