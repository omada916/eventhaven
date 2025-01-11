import EventList from "../components/event-list";
import { readCookie } from "../scripts/cookies";

function Home({ setCurrentPage }) {
   const authed = readCookie("user")==null ? true : false;
   return (
      <div className="min-h-screen bg-gray-100 p-10">
         <div className="text-center py-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
               Welcome to Eventhaven
            </h1>
            <p className="text-lg text-gray-600 mb-8">
               Discover, create, and share events with your community.
            </p>
            <div className="space-x-4">
               <button
                  onClick={() => {
                     setCurrentPage("dashboard");
                  }}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
               >
                  Create Event
               </button>
               <button
                  onClick={() => {
                     setCurrentPage("dashboard");
                  }}
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
               >
                  Explore Events
               </button>
            </div>
         </div>

         <div className="max-w-4xl mx-auto text-center my-5">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
               What is Eventhaven?
            </h2>
            <p className="text-gray-600 mb-6">
               Eventhaven is your go-to platform for discovering and organizing
               events. Whether you are looking to attend a local meetup, host a
               workshop, or share a community gathering, Eventhaven makes it easy
               to connect with others and make your event a success.
            </p>
            <p className="text-gray-600">
               Join thousands of users who are already using Eventhaven to bring
               people together.
            </p>
         </div>
         <div className="border-t border-gray-300"></div>
         <div className="bg-red max-w-6xl mx-auto my-5 shadow-md rounded-lg">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
               Upcoming Events
            </h2>
            <EventList eventPath="/events/events" limit="true" />
         </div>
         {authed ? (
            <div className="w-full bg-blue-600 text-white text-center py-12 rounded-lg">
               <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
               <p className="text-lg mb-8">
                  Join Eventhaven today and start exploring or creating events in
                  your community.
               </p>
               <button
                  onClick={() => {
                     setCurrentPage("register");
                  }}
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
               >
                  Sign Up Now
               </button>
            </div>
         ) : (<div></div>)}
      </div>
   );
}

export default Home;
