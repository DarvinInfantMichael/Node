import { useState } from "react";
import {useNavigate} from "react-router-dom";

const Login =()=>{

    const nav = useNavigate();

    const [loot,setLoot] =useState({userEmail:"",userPassword:""});
    const [detail,setDetail] =useState([]);

    const HandleChange =(e)=>{

        setLoot({...loot,[e.target.name]:e.target.value});

    }

    const handle=(e)=>{
        e.preventDefault();

        const label = JSON.parse(localStorage.getItem("UserCompleteData"))||[];

        const exist = label.find((label)=>loot.userEmail===label.userEmail && loot.userPassword===label.userPassword);

        
    }

    return (
        <>
        <div>
            <div>
                <h1>Login Form</h1>

                <label>Enter UserEmail :</label>
                <input type="email" onChange={HandleChange} name="userEmail" value={loot.userEmail} placeholder="Enter Registered Email"/><br></br>

                <label>Enter UserPassword :</label>
                <input type="password" onChange={HandleChange} name="userPassword" value={loot.userPassword} placeholder="Enter Registered Password"/><br></br>

                <button onClick={Handle}>Login</button><br></br>
            </div>
        </div>
        </>
    )
}

export default Login