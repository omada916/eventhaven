import { useEffect, useState } from "react";
import { request } from "../scripts/request";
import { getValuesAsJson, fetchFirebaseData } from "../scripts/firebase";
import { readCookie } from "../scripts/cookies";

const Editor = () => {
   const [title, setTitle] = useState("");
   const [description, setDescription] = useState("");
   const [date, setDate] = useState("");
   const [location, setLocation] = useState("");
   const [pub, setPublic] = useState(false);
   const [loading, setLoading] = useState(true);
   const [eventsData, setEventsData] = useState([]);
   const user = readCookie("user");
   const fetchEvents = async () => {
      try {
         var events = await getValuesAsJson(`/users/${user}/events/${readCookie("currentEvent")}`);
         events=JSON.parse(events);
         setTitle(events.title);
         setDescription(events.description);
         setDate(events.date);
         setLocation(events.location);
      } catch (err) {
         console.error(err);
      } finally {
         setLoading(false);
      }
   }
   const handleSubmit = async () => {
      var i = await fetchFirebaseData("/events/currentID");
      console.log(i);
      if (pub) {
         await request(
            "/events/create-event",
            "POST",
            JSON.stringify({
               id: i + 1,
               title,
               date,
               location,
               description,
            })
         );
         await request(
            "/events/incrementID",
            "POST",
            JSON.stringify({
               message: "Increment",
            })
         );
      } else {
         await request(
            "/events/create-private-event",
            "POST",
            JSON.stringify({
               user,
               title,
               date,
               location,
               description,
            })
         );
      }
      await request(
         "/events/delete-event",
         "POST",
         JSON.stringify({
            title,
         })
      );
   };

   useEffect(() => {
      fetchEvents();
   }, []);
   return (
      <div>
         {!loading ? (
            <form
               onSubmit={handleSubmit}
               className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-lg"
            >
               <h2 className="text-2xl font-bold mb-6 text-center">Create Event</h2>
               <div className="mb-4">
                  <label className="block text-gray-700">Title</label>
                  <input
                     value={title}
                     type="text"
                     placeholder="Title"
                     onChange={(e) => setTitle(e.target.value)}
                     className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                     required
                  />
               </div>
               <div className="mb-4">
                  <label className="block text-gray-700">Description</label>
                  <textarea
                     value={description}
                     placeholder="Description"
                     onChange={(e) => setDescription(e.target.value)}
                     className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                     required
                  />
               </div>
               <div className="mb-4">
                  <label className="block text-gray-700">Date</label>
                  <input
                     value={date}
                     type="date"
                     onChange={(e) => setDate(e.target.value)}
                     className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                     required
                  />
               </div>
               <div className="mb-4">
                  <label className="block text-gray-700">Location</label>
                  <input
                     value={location}
                     type="text"
                     onChange={(e) => setLocation(e.target.value)}
                     className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                     required
                  />
               </div>
               {/* public selector */}
               <div className="flex items-center space-x-3">
                  <label className="group flex items-center cursor-pointer">
                     <input
                        className="hidden peer"
                        type="checkbox"
                        onChange={(e) => {
                           console.log(!!e.target.value);
                           setPublic(!!e.target.value);
                        }}
                     />

                     <span className="relative w-8 h-8 flex justify-center items-center bg-gray-100 border-2 border-gray-400 rounded-md shadow-md transition-all duration-500 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-hover:scale-105">
                        <span className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/10 opacity-0 peer-checked:opacity-100 rounded-md transition-all duration-500 peer-checked:animate-pulse"></span>

                        <svg
                           fill="currentColor"
                           viewBox="0 0 20 20"
                           className="hidden w-5 h-5 text-white peer-checked:block transition-transform duration-500 transform scale-50 peer-checked:scale-100"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              clipRule="evenodd"
                              d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                              fillRule="evenodd"
                           ></path>
                        </svg>
                     </span>

                     <span className="ml-3 text-gray-700 group-hover:text-blue-500 font-medium transition-colors duration-300">
                        Make Event Public
                     </span>
                  </label>
               </div>
               <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                  onClick={(e) => {
                     e.preventDefault();
                     handleSubmit();
                  }}
               >
                  Save Event
               </button>
            </form>
         ) : (
            <p>Loading...</p>
         )}
      </div>
   );
};

export default Editor;
