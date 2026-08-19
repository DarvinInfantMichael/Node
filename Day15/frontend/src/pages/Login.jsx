
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "./DashBoard";
import {loginUser} from "../apis/axios"

const Login = () => {
  const nav = useNavigate();

  const [details, setDetails] = useState({
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
    const response = await loginUser(details);

    console.log("Login Response:", response.data);

    // Store JWT returned by backend
    localStorage.setItem("token", response.data.token);

    alert(response.data.msg);

    setDetails({
      useremail: "",
      userpassword: ""
    });

    nav("/DashBoard");

  } catch (error) {
    console.log("Login Error:", error);

    alert(
      error.response?.data?.msg || "Login Failed"
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

          {/* Login Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8">

            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800">
                Login
              </h1>

              <p className="text-gray-500 mt-2">
                Welcome back! Please login to continue.
              </p>
            </div>

            <h2 className="text-xl font-semibold text-gray-700 mb-6">
              Login Form Handling
            </h2>

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

            {/* Login Button */}
            <button
              onClick={HandleClick}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 active:scale-[0.98] transition duration-200 shadow-md"
            >
              Login Now!
            </button>

            <p className="text-center text-sm text-gray-500 mt-6">
              Don't have an account?{" "}
              <button
                onClick={() => nav("/Registration")}
                className="text-blue-600 font-semibold hover:underline"
              >
                Register
              </button>
            </p>

          </div>
        </div>
      </div>
    </>
  );
};

export default Login;



