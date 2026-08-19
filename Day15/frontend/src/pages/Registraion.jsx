
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import {registerUser} from "../apis/axios"

const Registraion = () => {
  const nav = useNavigate();

  const [details, setDetails] = useState({
    username: "",
    useremail: "",
    userpassword: ""
  });

  const [data, setData] = useState([]);

  const HandleChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value
    });
  };

  const HandleClick = async (e) => {
  e.preventDefault();

  try {
    const response = await registerUser(details);

    console.log("Backend Response:", response.data);

    alert(response.data.msg);

    setDetails({
      username: "",
      useremail: "",
      userpassword: ""
    });

    nav("/Login");

  } catch (error) {
    console.log("Registration Error:", error);

    alert(
      error.response?.data?.msg || "Registration Failed"
    );
  }
};
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-md">

          {/* Back Button */}
          <button
            onClick={() => nav("/")}
            className="mb-5 flex items-center gap-2 text-gray-600 hover:text-blue-600 font-medium transition"
          >
            ← Back
          </button>

          {/* Registration Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8">

            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800">
                Registration
              </h1>

              <p className="text-gray-500 mt-2">
                Create your student account
              </p>
            </div>

            <h2 className="text-xl font-semibold text-gray-700 mb-6">
              Registration Form Handling
            </h2>

            {/* Username */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Enter UserName:
              </label>

              <input
                type="text"
                onChange={HandleChange}
                name="username"
                value={details.username}
                placeholder="Enter User Name Here.."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>

            {/* Email */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Enter UserEmail:
              </label>

              <input
                type="email"
                onChange={HandleChange}
                name="useremail"
                value={details.useremail}
                placeholder="Enter User Email Here.."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>

            {/* Password */}
            <div className="mb-7">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Enter UserPassword:
              </label>

              <input
                type="password"
                onChange={HandleChange}
                name="userpassword"
                value={details.userpassword}
                placeholder="Enter User Password Here.."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>

            {/* Register Button */}
            <button
              onClick={HandleClick}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 active:scale-[0.98] transition duration-200 shadow-md"
            >
              Register Now!
            </button>

            <p className="text-center text-sm text-gray-500 mt-6">
              Already have an account?{" "}
              <button
                onClick={() => nav("/Login")}
                className="text-blue-600 font-semibold hover:underline"
              >
                Login
              </button>
            </p>

          </div>
        </div>
      </div>
    </>
  );
};

export default Registraion;



