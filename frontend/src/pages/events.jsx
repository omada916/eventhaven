import EventList from "../components/event-list";
function Events() {
   return (
      <div className="min-h-screen bg-gray-100 py-16">
         <h1 className="text-3xl font-bold text-center mb-8 ">
            Upcoming Events
         </h1>
         <EventList />
      </div>
   );
}
export default Events;
