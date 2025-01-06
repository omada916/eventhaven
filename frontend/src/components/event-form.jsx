import { useState } from "react";
import { request } from "../scripts/request";
import { fetchFirebaseData } from "../scripts/firebase";

const EventForm = () => {
   const [title, setTitle] = useState("");
   const [description, setDescription] = useState("");
   const [date, setDate] = useState("");
   const [location, setLocation] = useState("");

   const handleSubmit = async (e) => {
      e.preventDefault();
      var i = await fetchFirebaseData("/events/currentID");
      console.log(i);
      await request("/events/create-event", "POST", JSON.stringify({
         id: i + 1,
         name: title,
         date,
         location,
         description,
      }));
      await request("/events/incrementID", "POST", JSON.stringify({
         message: "Increment",
      }));
   };

   return (
      <form
         onSubmit={handleSubmit}
         className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-lg"
      >
         <h2 className="text-2xl font-bold mb-6 text-center">Create Event</h2>
         <div className="mb-4">
            <label className="block text-gray-700">Title</label>
            <input
               type="text"
               placeholder="Title"
               value={title}
               onChange={(e) => setTitle(e.target.value)}
               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
               required
            />
         </div>
         <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
               placeholder="Description"
               value={description}
               onChange={(e) => setDescription(e.target.value)}
               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
               required
            />
         </div>
         <div className="mb-4">
            <label className="block text-gray-700">Date</label>
            <input
               type="date"
               value={date}
               onChange={(e) => setDate(e.target.value)}
               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
               required
            />
         </div>
         <div className="mb-4">
            <label className="block text-gray-700">Location</label>
            <input
               type="text"
               value={location}
               onChange={(e) => setLocation(e.target.value)}
               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
               required
            />
         </div>
         <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            onClick={() => {handleSubmit()}}
         >
            Create Event
         </button>
      </form>
   );
};

export default EventForm;
