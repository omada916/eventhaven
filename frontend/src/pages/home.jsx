import { getValuesAsJson } from "../scripts/firebase";

const Home = async ({ setCurrentPage }) => {
   const eventsJSON = await getValuesAsJson("/events/events");
   console.log(eventsJSON);
   var events = [];
   for (var i in eventsJSON) {
      events.push(i);
   }
   return (
      <div className="min-h-screen bg-gray-100">
         {/* Hero Section */}
         <header className="bg-blue-600 text-white py-20">
            <div className="max-w-4xl mx-auto text-center">
               <h1 className="text-5xl font-bold mb-4">
                  Discover Amazing Events
               </h1>
               <p className="text-xl mb-8">
                  Create, share, and join events near you. Whether it is a
                  concert, conference, or meetup, we haveve got you covered.
               </p>
               <div className="space-x-4">
                  <a
                     onClick={() => {
                        setCurrentPage("register");
                     }}
                     className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50"
                  >
                     Sign Up
                  </a>
                  <a
                     href="#"
                     className="bg-transparent border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600"
                  >
                     View Events
                  </a>
               </div>
            </div>
         </header>

         {/* Event Grid */}
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
                     <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-48 object-cover"
                     />
                     <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                           {event.title}
                        </h3>
                        <p className="text-gray-600 mb-2">{event.date}</p>
                        <p className="text-gray-600 mb-4">{event.location}</p>
                        <p className="text-gray-700">{event.description}</p>
                        <a
                           href="#"
                           className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                        >
                           Learn More
                        </a>
                     </div>
                  </div>
               ))}
            </div>
         </section>

         {/* Footer */}
         <footer className="bg-white shadow-lg mt-12">
            <div className="max-w-6xl mx-auto px-4 py-6 text-center">
               <p className="text-gray-600">
                  &copy; 2025 Eventify. All rights reserved.
               </p>
            </div>
         </footer>
      </div>
   );
};

export default Home;
