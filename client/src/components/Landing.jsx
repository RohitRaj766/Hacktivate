import { useNavigate } from "react-router-dom";
import { FaUser, FaUserShield, FaCogs } from "react-icons/fa"; // Importing icons

const Landing = () => {
  const navigate = useNavigate();

  // Card Component (Reusable)
  const Card = ({ icon, title, loginPath, signupPath }) => {
    return (
      <div className="bg-white p-6 rounded-3xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
        <div className="mb-4 text-4xl text-[#05a987]">
          {icon} {/* Icon passed as a prop */}
        </div>
        <h2 className="text-2xl font-semibold mb-4 text-black">{title}</h2>
        <button
          onClick={() => navigate(loginPath)}
          className="w-full bg-[#05a987] text-white font-medium py-2 rounded-lg mb-2 hover:bg-green-600 cursor-pointer"
        >
          Login
        </button>
        <button
          onClick={() => navigate(signupPath)}
          className="w-full border border-[#05a987] text-[#05a987] py-2 rounded-lg hover:bg-[#05a987] hover:text-white transition-all cursor-pointer"
        >
          Sign Up
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#05a987] to-[#003e4d] flex flex-col items-center justify-center px-4 text-white">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Smart Governance Portal</h1>
        <p className="text-lg md:text-xl font-light">
          Efficient. Transparent. Role-based Access for Everyone.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {/* Citizen Card */}
        <Card 
          icon={<FaUser />} 
          title="Citizen" 
          loginPath="/citizen/login" 
          signupPath="/citizen/signup" 
        />
        
        {/* Officer Card */}
        <Card 
          icon={<FaUserShield />} 
          title="Officer" 
          loginPath="/officer/login" 
          signupPath="/officer/signup" 
        />
        
        {/* Admin Card */}
        <Card 
          icon={<FaCogs />} 
          title="Admin" 
          loginPath="/admin/login" 
          signupPath="/admin/signup" 
        />
      </div>
    </div>
  );
};

export default Landing;
