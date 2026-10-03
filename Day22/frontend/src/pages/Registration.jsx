import { useState } from "react"
import {useNavigate} from "react-router-dom"


const Registration = () => {

    const nav= useNavigate();

    const[detail,setDetail] = useState({UserName:"",UserEmail:"",UserPassword:""});

    const HandleChange=(e)=>{

        setDetail({...detail,[e.target.name]:e.target.value});

    }

    const HandleClick =(e)=>{

        e.preventDefault();

        const res = JSON.parse(localStorage.getItem("AtData"))||[];

        localStorage.setItem("AtData",res);

        setDetail({UserName:"",UserEmail:"",UserPassword:""});

        nav()

    }

  return (
    <>
    <div className="bg-amber-200 flex flex-col justify-center items-center p-6">
        <div className="bg-amber-50 p-3 mt-3 font-bold shadow-2xl rounded-xl">
            <h2>Registration Form</h2>
        </div>
       <div className="bg-amber-50 p-5 mt-3 font-bold rounded-2xl">
        <label>Enter Name :</label>
        <input type="text"
        placeholder="Enter UserName Here"
        onChange={HandleChange}
        value={detail.UserName}
        name="UserName"/>
        <br></br>

        <label>Enter Email :</label>
        <input type="email"
        placeholder="Enter UserEmail Here"
        onChange={HandleChange}
        value={detail.UserEmail}
        name="UserEmail"/>
        <br></br>

        <label>Enter Password :</label>
        <input type="password"
        placeholder="Enter UserPassword Here"
        onChange={HandleChange}
        value={detail.UserPassword}
        name="UserPassword"/>
        <br></br>

        <button onClick={HandleClick} className="bg-red-600 p-3 rounded-2xl text-amber-50">Register</button>
       </div>
    </div>
    </>
  )
}

export default Registration