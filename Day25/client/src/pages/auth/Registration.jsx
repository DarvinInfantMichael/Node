import { useState } from "react"
import {useNavigate} from "react-router-dom"


const Registration = () => {

    const nav =useNavigate();

    const [regis,setRegis]=useState({UserName:"",UserEmail:"",UserPassword:"",role:"user"});
    
    const HandleChange =(e)=>{

        setRegis ({...regis,[e.target.name]:e.target.value});

    }

    const handlesubmit =(e)=>{
        
        e.preventDefault();

        const local =JSON.parse(localStorage.getItem("UserCompleteData"))||[];

         const exist = local.find((user) =>
            user.UserEmail === regis.UserEmail
        );

         if (exist) {
            alert("Email Already Registered");
            return;
        }

        const updated =[...local,regis];

        localStorage.setItem("UserCompleteData",JSON.stringify(updated));

        setRegis({UserName:"",UserEmail:"",UserPassword:"",role:"user"});

        alert("Register User Successfully..")

        nav("/login");
    }




  return (
    <>
    <div>
        <h1>Registration Form </h1>
        <div>

            <label>Enter UserName:</label>
            <input type="text" onChange={HandleChange} name="UserName" value={regis.UserName} placeholder="Enter the UserName to Regsiter"/>
            <br></br>

            <label>Enter UserEmail:</label>
            <input type="email" onChange={HandleChange} name="UserEmail" value={regis.UserEmail} placeholder="Enter User Email to Regsiter"/>
            <br></br>

            <label>Enter User Password:</label>
            <input type="password" onChange={HandleChange} name="UserPassword" value={regis.UserPassword} placeholder="Enter Password to Register"/>
            <br></br>

            <label>Select Role:</label>
            <select name="role"
                    value={regis.role}
                    onChange={HandleChange}>

                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                        
                    </select>

            <button onClick={handlesubmit}>Register</button>
            <br></br>

        </div>
    </div>
    </>
  )
}

export default Registration;