import Form from "../components/Form";

const ServiceOnboardForm: React.FC = () => {
  // --- State ---
  
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
        <div className="mb-8 border-b pb-4">
          <h2 className="text-2xl font-bold text-gray-900">Service Center Onboarding</h2>
          <p className="text-gray-600 mt-1">Register your service center details below.</p>
        </div>
<Form/>
        
      </div>
    </div>
  );
};

export default ServiceOnboardForm;