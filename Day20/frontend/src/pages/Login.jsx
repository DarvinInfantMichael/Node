import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { loginUser } from "../apis/api.jsx";

const Login = () => {

    const nav=useNavigate();

    const [logi,setLogi] =useState({UserEmail:"",UserPassword:""});

    const HandleChange=(e)=>{

        setLogi({...logi,[e.target.name]:e.target.value});

    }

    const HandleClick = async (e) => {

        e.preventDefault();

        try {
            const response = await loginUser({
                userEmail: logi.UserEmail,
                userPassword: logi.UserPassword
            });
            localStorage.setItem("isAuthenticated", "true");
            alert(response.data.msg);
            nav("/dash");
        } catch (error) {
            if(error.response && error.response.data) {
                alert(error.response.data.msg);
            } else {
                console.error(error);
                alert("An error occurred during login");
            }
        }

    }


  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900 flex items-center justify-center p-4 font-sans">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 sm:p-10 rounded-3xl shadow-2xl w-full max-w-md">
        <h1 className="text-3xl font-extrabold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-400">Welcome Back</h1>
        <p className="text-center text-gray-300 mb-8 text-sm">Please login to your account</p>

        <form onSubmit={HandleClick} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">UserEmail</label>
              <input type="email"
              onChange={HandleChange}
              name="UserEmail"
              value={logi.UserEmail}
              placeholder="Enter UserEmail Here....."
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"/>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">UserPassword</label>
              <input type="password"
              onChange={HandleChange}
              name="UserPassword"
              value={logi.UserPassword}
              placeholder="Enter Your Password Here...."
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"/>
            </div>

            <button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-indigo-500 text-white font-bold py-3 px-4 rounded-xl shadow-lg hover:from-pink-600 hover:to-indigo-600 focus:ring-4 focus:ring-indigo-500/50 transition-all duration-300 transform hover:scale-[1.02] mt-4">
              Login securely
            </button>
        </form>
      </div>
    </div>
  )
}

export default Login