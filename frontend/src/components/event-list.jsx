const EventList = () => {
   const events = [
      {
         id: 1,
         title: "Sample Event 1",
         description: "This is a sample event description.",
         date: "2023-10-15",
      },
      {
         id: 2,
         title: "Sample Event 2",
         description: "This is another sample event description.",
         date: "2023-10-20",
      },
   ];

   return (
      <div className="container mx-auto p-4">
         <h2 className="text-2xl font-bold mb-6 text-center">Events</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
               <div
                  key={event.id}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
               >
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <p className="text-gray-500">Date: {event.date}</p>
               </div>
            ))}
         </div>
      </div>
   );
};

export default EventList;