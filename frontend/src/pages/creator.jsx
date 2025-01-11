import EventForm from "../components/event-form";
import { readCookie } from "../scripts/cookies";

var Creator = ({ setCurrentPage }) => {
   const authed = readCookie("user") != null;
   return (
      <div className="py-6">
         {authed ? (
            <EventForm />
         ) : (
            <div className="text-center my-16">
               <h1 className="text-2xl font-bold text-gray-800 mb-4">
                  Please log in to create events
               </h1>
               <p
                  onClick={() => {
                     setCurrentPage("register");
                  }}
                  className="text-blue-600 cursor-pointer"
               >
                  Click to go to Register page
               </p>
            </div>
         )}
      </div>
   );
};
export default Creator;
