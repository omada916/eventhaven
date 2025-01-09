import db from "../scripts/firebase";
import { get, ref } from "firebase/database";
import { useState, useEffect } from "react";

var Dbv = () => {
   const [events, setEvents] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   const fetchEvents = async () => {
      try {
         const eventsRef = ref(db, "/");
         const snapshot = await get(eventsRef);

         if (snapshot.exists()) {
            const eventsData = snapshot.val();
            const eventsList = Object.keys(eventsData).map((key) => ({
               id: key,
               ...eventsData[key],
            }));
            setEvents(eventsList);
         } else {
            setEvents([]);
         }
         console.log(events)
      } catch (err) {
         setError("Failed to fetch events. Please try again later.");
         console.error(err);
      } finally {
         setLoading(false);
      }
   };

   useEffect(() => {
      fetchEvents();
   }, []);

   return (
      <div className="h-auto bg-gray-100 p-6">
         {loading ? (
            <p className="text-center text-gray-600">Loading data...</p>
         ) : error ? (
            <p className="text-center text-red-500">{error}</p>
         ) : (
            <p className="text-center text-red-500">Check console</p>
         )}
      </div>
   )
}

export default Dbv;