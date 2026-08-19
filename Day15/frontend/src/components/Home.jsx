
import { Link } from "react-router-dom";
import Registraion from "../pages/Registraion";
import Login from "../pages/Login";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-2xl shadow-xl text-center w-full max-w-md">
        
        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          Student Portal
        </h1>

        <p className="text-gray-500 mb-8">
          Welcome to the Student Management System
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/Registration"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
          >
            Registration
          </Link>

          <Link
            to="/Login"
            className="px-6 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-900 transition duration-200"
          >
            Login
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Home;
