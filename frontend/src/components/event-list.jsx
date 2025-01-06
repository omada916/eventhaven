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
      <section className="max-w-6xl mx-auto py-12 px-4">
         <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Upcoming Events
         </h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
               <div
                  key={event.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
               >
                  <div className="p-6">
                     <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {event.title}
                     </h3>
                     <p className="text-gray-600 mb-2">{event.date}</p>
                     <p className="text-gray-600 mb-4">{event.location}</p>
                     <p className="text-gray-700">{event.description}</p>
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
};

export default EventList;
