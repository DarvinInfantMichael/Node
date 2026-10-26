import { useState } from "react"
import {useNavigate} from "react-router-dom"


const Regsitration = () => {

    const nav =useNavigate();

    const [regis,setRegis]=useState({UserName:"",UserEmail:"",UserPassword:""});
    const [details,setDetails] = useState([]);
    
    const HandleChange =(e)=>{

        setRegis ({...regis,[e.target.name]:e.target.value});

    }

    const handlesubmit =(e)=>{
        
        e.preventDefault();

        const local =JSON.parse(localStorage.getItem("UserCompleteData"))||[];

        localStorage.setItem("UserCompleteData",JSON.stringify(local));

        setRegis({UserName:"",UserEmail:"",UserPassword:""})

        nav("login");
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

            <button onClick={handlesubmit}>Register</button>
            <br></br>

        </div>
    </div>
    </>
  )
}

export default Regsitration