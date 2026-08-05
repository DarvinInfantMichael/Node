import { useEffect, useState } from "react"
import { deleteData, getData, postData, putData } from "./api/axios";


const App = () => {

  const [formData , setFormData] = useState({Username:"",Useremail:"",Userage:"",Usercourse:""});
  const [userData, setUserData] = useState([]);
  const [edit , setEdit]=useState(null)

const fetchData = async () => {
  try {
    const gd = await getData();

    console.log("GET Response:", gd.data.MyData);

    setUserData(gd.data.MyData);
  } catch (error) {
    console.log(error);
  }
}

 useEffect(()=>{

    fetchData()

 },[])

  const handleChange =(e)=>{

    setFormData({...formData,[e.target.name]:e.target.value});

  }

  const handleSubmit =async(e)=>{

    e.preventDefault()

    try {

    const addData = await postData(formData);

    console.log(addData);

    alert(`Data Stored Succesfully...`)

    await fetchData()

    } catch (error) {

      alert(error.response.data.msg)
      
    }
  }

  const handleEdit =(e)=>{

    setFormData({Username:e.Username,Useremail:e.Useremail,Userage:e.Userage,Usercourse:e.Usercourse})
    setEdit(e._id)

  }

  const handleDelete=async(id)=>{

    try {
      
      const del = await deleteData(id);

      alert(del.data.msg)

      await fetchData()

    } catch (error) {
      
      console.log(error);

      alert(error.response.data.msg)
      
    }
  }

  const handleUpdate =async(e)=>{

    e.preventDefault()

    try {

      const update = await putData(edit,formData);

      console.log(update);

      alert(update.data.msg)

      setFormData({Username:"",Useremail:"",Userage:"",Usercourse:""});

      setEdit(null)

      fetchData()
      
    } catch (error) {

    console.log('error.data',error);
    alert(error.response.data.msg)
    
   }
  }


  return (
    <>

    <div>
      <form>

        <label>Enter UserName :</label>
        <input type="text" name="Username"   onChange={handleChange} value={formData.Username} placeholder="Enter Name"/>
        <label>Enter UserEmail :</label>
        <input type="email" name="Useremail"  onChange={handleChange} value={formData.Useremail} placeholder="Enter Email"/>
        <label>Enter UserAge :</label>
        <input type="number" name="Userage"    onChange={handleChange} value={formData.Userage} placeholder="Enter Age"/>
        <label>Enter UserCourse:</label>
        <input type="text" name="Usercourse" onChange={handleChange} value={formData.Usercourse} placeholder="Enter Course"/>

        {edit?<button onClick={handleUpdate}>Update</button>:<button onClick={handleSubmit}>Add Data</button>}

      </form>

      {userData.map((e)=>(
      <div key={e._id}>
        <h1>{e.Username}</h1>
        <h3>{e.Useremail}</h3>
        <h3>{e.Userage}</h3>
        <h3>{e.Usercourse}</h3>

        <button onClick={()=>handleEdit(e)}>Edit</button>
        <button onClick={()=>handleDelete(e._id)}>Delete</button>
      </div>
      ))}

    </div>
    </>
  )
}

export default App