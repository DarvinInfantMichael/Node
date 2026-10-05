import { useState } from "react"
import { useNavigate } from "react-router-dom";


const Login = () => {

    const nav =useNavigate();

    const [log,setLog]=useState({UserEmail:"",UserPassword:""});

    const HandleChange=(e)=>{

        setLog({...log,[e.target.name]:e.target.value});

    };

    const HandleClick=(e)=>{

        e.preventDefault();

        try {

            const red =JSON.parse(localStorage.getItem("AtData"))||[];
            
            const user= red.find((item)=>
            item.UserEmail==log.UserEmail &&
            item.UserPassword==log.UserPassword);

        if(user){
            alert("Login Successfully...");

            localStorage.setItem("Data",JSON.stringify(user))

            setLog({UserEmail:"",UserPassword:""});

            nav("/dash");
        }     
        } catch (error) {

            console.log("Invalid Email or Password Credits",error);  
        }
    }

  return (
    <>
    <div>
        <h1>This is Login Form </h1>
        
        <label>Enter Email :</label>
        
        <input type="text"
        onChange={HandleChange}
        value={log.UserEmail}
        name="UserEmail"
        placeholder="Enter Registered Email"/>
        <br></br>

        <label>Enter Password :</label>

        <input type="password"
        onChange={HandleChange}
        value={log.UserPassword}
        name="UserPassword"
        placeholder="Enter Registered Password"/>

        <button onClick={HandleClick}>Login</button>
    </div>
    </>
  )
}

export default Login