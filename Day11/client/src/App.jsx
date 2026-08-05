import axios from "axios";
import { useEffect, useState } from "react"


const App = () => {

  const [addData,setAddData]=useState({name:"",email:"",mobile:"",city:""});
  const [saveData,setSaveData]=useState([]);

  const getData = async()=>{

    try {
      
      const userdata= await axios.get("http://localhost:5000/api/collect/getData");
      console.log(userdata);

      setSaveData(userdata.data.MyData)
      
    } catch (error) {

      alert(error.response.data.dob)
      
    }
  }

  useEffect(()=>{

    getData();

  },[])

  const HandleAdd = (e) => {
    setAddData({
        ...addData,
        [e.target.name]: e.target.value
    });
}


  const HandleSubmit=async(e)=>{

    e.preventDefault()

    try {
      
      const input = await axios.post("http://localhost:5000/api/collect/addData",addData);
      alert(input.data.msg)
      setAddData({name:"",email:"",mobile:"",city:""})

      getData()

    } catch (error) {

      console.log('error.data',error);
      alert(error.response.data.msg);
      
      
    }

  }

  return (
    <>
    <form>

    <label>Enter UserName:</label>
    <input type="text"
    name="name"
    value={addData.name}
    placeholder="Enter Name Here..."
    onChange={HandleAdd}/>
    <br></br>

    <label>Enter UserEmail:</label>
    <input type="email"
    name="email"
    value={addData.email}
    placeholder="Enter Email Here..."
    onChange={HandleAdd}/>
    <br></br>

    <label>Enter Contact Number:</label>
    <input type="number"
    name="mobile"
    value={addData.mobile}
    placeholder="Enter Contact No. Here..."
    onChange={HandleAdd}/>
    <br></br>

    <label>Enter UserCity:</label>
    <input type="text"
    name="city"
    value={addData.city}
    placeholder="Enter City Here..."
    onChange={HandleAdd}/>
    <br></br>

    <button onClick={HandleSubmit}>Add User Data !</button>

    </form>

    <div className="overflow-x-auto">
  <table className="w-full border border-gray-400">
    <thead>
      <tr>
        <th className="border border-gray-400 p-2">S.No</th>
        <th className="border border-gray-400 p-2">Name</th>
        <th className="border border-gray-400 p-2">Email</th>
        <th className="border border-gray-400 p-2">Mobile</th>
        <th className="border border-gray-400 p-2">City</th>
        <th className="border border-gray-400 p-2">Action</th>
      </tr>
    </thead>

    <tbody>
      {saveData.map((user, index) => (
        <tr key={user._id}>
          <td className="border border-gray-400 p-2">{index + 1}</td>
          <td className="border border-gray-400 p-2">{user.name}</td>
          <td className="border border-gray-400 p-2">{user.email}</td>
          <td className="border border-gray-400 p-2">{user.mobile}</td>
          <td className="border border-gray-400 p-2">{user.city}</td>
          <td className="border border-gray-400 p-2 space-x-2">
            <button className="bg-blue-500 text-white px-3 py-1 rounded">
              Edit
            </button>
            <button className="bg-red-500 text-white px-3 py-1 rounded">
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    
    </>
  )
}

export default App