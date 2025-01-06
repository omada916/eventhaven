import EventForm from "../components/event-form";

const Dashboard = () => {
   return (
      <div className="min-h-screen bg-gray-100 p-4">
         <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">
               Dashboard
            </h1>
            <EventForm />
         </div>
      </div>
   );
};

export default Dashboard;
