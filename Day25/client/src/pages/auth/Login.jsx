import { useState } from "react";
import {useNavigate} from "react-router-dom";

const Login =()=>{

    const nav = useNavigate();

    const [loot,setLoot] =useState({UserEmail:"",UserPassword:"",role:"user"});

    const HandleChange =(e)=>{

        setLoot({...loot,[e.target.name]:e.target.value});

    }

    const Handle=(e)=>{
        e.preventDefault();

        const label = JSON.parse(localStorage.getItem("UserCompleteData"))||[];

        const exist = label.find((label)=>loot.UserEmail===label.UserEmail && loot.UserPassword===label.UserPassword  && loot.role === label.role);

        if(exist){

            sessionStorage.setItem("CurrentUser",JSON.stringify({
                UserName:exist.UserName,
                UserEmail:exist.UserEmail,
                role:exist.role

            }));

            alert("Login Sucessfully");

            if(exist.role==="admin"){
                nav("/admin-dashboard");
            }else{
                nav("/user-Dashboard");
            }
            
        }else{
            alert("Invalid Email,Password or Role");
        }

       
    }

    return (
        <>
        <div>
            <div>
                <h1>Login Form</h1>

                <label>Enter UserEmail :</label>
                <input type="email" onChange={HandleChange} name="UserEmail" value={loot.UserEmail} placeholder="Enter Registered Email"/><br></br>

                <label>Enter UserPassword :</label>
                <input type="password" onChange={HandleChange} name="UserPassword" value={loot.UserPassword} placeholder="Enter Registered Password"/><br></br>

                <select name="role"
                        value={loot.role}
                        onChange={HandleChange}>

                            <option value="user">User</option>
                            <option value="admin">Admin</option>

                </select>
                <button onClick={Handle}>Login</button><br></br>
            </div>
        </div>
        </>
    )
}

export default Login