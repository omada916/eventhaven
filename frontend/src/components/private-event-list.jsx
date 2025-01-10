import { useEffect, useState } from "react";
import db from "../scripts/firebase";
import { ref, get } from "firebase/database";

var EventList = (data) => {
   const [events, setEvents] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
   const fetchEvents = async () => {
      try {
         const eventsRef = ref(db, data.eventPath);
         const snapshot = await get(eventsRef);

         if (snapshot.exists()) {
            const eventsData = snapshot.val();
            // Convert the events object into a list
            const eventsList = Object.keys(eventsData).map((key) => ({
               id: key,
               ...eventsData[key],
            }));
            if (data.limit) {
               setEvents(eventsList.slice(0, 3));
            } else {
               setEvents(eventsList);
            }
         } else {
            setEvents([]);
         }
      } catch (err) {
         setError("Failed to fetch events.");
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
            <p className="text-center text-gray-600">Loading events...</p>
         ) : error ? (
            <p className="text-center text-red-500">{error}</p>
         ) : events.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {events.map((event) => (
                  <div
                     key={event.id}
                     className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                  >
                     <h2
                        className="text-xl font-semibold mb-2 cursor-pointer"
                        onClick={() => {}}
                     >
                        {event.title}
                     </h2>
                     <p className="text-gray-700 mb-4">{event.description}</p>
                     <p className="text-gray-600">
                        <strong>Date:</strong> {event.date}
                     </p>
                     <p className="text-gray-600">
                        <strong>Location:</strong> {event.location}
                     </p>
                  </div>
               ))}
            </div>
         ) : (
            <p className="text-center text-gray-600">No events found.</p>
         )}
      </div>
   );
};

export default EventList;
