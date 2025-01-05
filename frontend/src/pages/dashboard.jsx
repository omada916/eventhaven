import EventList from "../components/event-list";

const Dashboard = () => {
   return (
      <div className="min-h-screen bg-gray-100 p-4">
         <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">
               Dashboard
            </h1>
            <EventList />
         </div>
      </div>
   );
};

export default Dashboard;
