import { useEffect, useState } from "react"
import { deleteData, getData, postData, putData } from "./api/axios";


const App = () => {

  const [formdata,setFormdata] = useState({Username:"",Useremail:"",Userage:""});
  const [data,setData] = useState([]);
  const [edit,setEdit] = useState(null);


  const fetchData = async(req,res)=>{

    try {

      const gd = await getData()

      console.log(gd.data);

      setData(gd.data.MyData)

      res.status(200).json("")

    } catch (error) {

      alert(error.response.data.msg)
      
    }

  }

  useEffect(()=>{

    fetchData()

  },[])

  const HandleChange =(e)=>{

    setFormdata({...formdata,[e.target.name]:e.target.value})

  }

  const HandleClick =async(e)=>{

    e.preventDefault();

    try {
        
        await postData(formdata)

        alert("Data Added Successfully....")

      // setFormdata(add)

        setFormdata({Username:"",Useremail:"",Userage:""})

        await fetchData();
      
    } catch (error) {

      console.log(error);

      alert(error.response.data.msg );
    }
  }

  const HandleUpdate =async(e)=>{

    e.preventDefault()

   try {

    const update =await putData(edit,formdata)

    console.log(update);

    alert(update.data.msg)

    setFormdata({Username:"",Useremail:"",Userage:""});

    setEdit(null);
    
    fetchData()
    
   } catch (error) {

    console.log('error.data',error);
    alert(error.response.data.msg)
    
   }

  }

  const HandleEdit =(user)=>{

    setFormdata({Username:user.Username,Useremail:user.Useremail,Userage:user.Userage});
    setEdit(user._id)

  }

  const HandleDelete =async(id) => {

    try {

      const del =await deleteData(id);
      
      alert(del.data.msg)

      await fetchData();
      
    } catch (error) {

      console.log(error);

      alert(error.response.data.msg);
      
    }

  };

  return (
    <>
    <div>
      <form>
        
        <label>Enter Name :</label>
        <input type="text" name="Username" value={formdata.Username} placeholder="Enter UserName.." onChange={HandleChange}/>
        <label>Enter Email:</label>
        <input type="email" name="Useremail" value={formdata.Useremail} placeholder="Enter UserEmail.." onChange={HandleChange}/>
        <label>Enter Age:</label>
        <input type="number" name="Userage" value={formdata.Userage} placeholder="Enter UserAge.." onChange={HandleChange}/>
        
        {edit?<button onClick={HandleUpdate}>Update</button>:<button onClick={HandleClick}>Add</button>}
        
      </form>

      <div>

        {data.map((e)=>(
        <div key={e._id}>

          <h1>{e.Username}</h1>
          <h4>{e.Useremail}</h4>
          <h4>{e.Userage}</h4>

          <button onClick={()=>HandleEdit(e)}>Edit</button>
          <button onClick={()=>HandleDelete(e._id)}>Delete</button>

        </div>
        ))}
        
      </div>
    </div>
    </>
  )
}

export default App