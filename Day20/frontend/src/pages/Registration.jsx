import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { registerUser } from "../apis/api.jsx";

const Registration = () => {

    const nav=useNavigate();

    const [regi,setRegi] =useState({UserName:"",UserEmail:"",UserPassword:""});

    const HandleChange=(e)=>{

        setRegi({...regi,[e.target.name]:e.target.value});

    }

    const HandleClick = async (e) => {

        e.preventDefault();

        try {
            const response = await registerUser({
                userName: regi.UserName,
                userEmail: regi.UserEmail,
                userPassword: regi.UserPassword
            });
            alert(response.data.msg);
            setRegi({UserName:"",UserEmail:"",UserPassword:""});
            nav("/login")
        } catch (error) {
            if(error.response && error.response.data) {
                alert(error.response.data.msg);
            } else {
                console.error(error);
                alert("An error occurred during registration");
            }
        }

    }


  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900 flex items-center justify-center p-4 font-sans">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 sm:p-10 rounded-3xl shadow-2xl w-full max-w-md">
        <h1 className="text-3xl font-extrabold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-400">Join Us Today</h1>
        <p className="text-center text-gray-300 mb-8 text-sm">Enter your details to register</p>

        <form onSubmit={HandleClick} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">UserName</label>
              <input type="text"
              onChange={HandleChange}
              name="UserName"
              value={regi.UserName}
              placeholder="Enter UserName Here...."
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"/>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">UserEmail</label>
              <input type="email"
              onChange={HandleChange}
              name="UserEmail"
              value={regi.UserEmail}
              placeholder="Enter UserEmail Here....."
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"/>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">UserPassword</label>
              <input type="password"
              onChange={HandleChange}
              name="UserPassword"
              value={regi.UserPassword}
              placeholder="Enter Your Password Here...."
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"/>
            </div>

            <button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-indigo-500 text-white font-bold py-3 px-4 rounded-xl shadow-lg hover:from-pink-600 hover:to-indigo-600 focus:ring-4 focus:ring-indigo-500/50 transition-all duration-300 transform hover:scale-[1.02] mt-4">
              Register Now
            </button>
        </form>
      </div>
    </div>
  )
}

export default Registration