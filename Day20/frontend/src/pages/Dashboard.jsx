import { useEffect, useState } from "react"


const Dashboard = () => {

    const [products,setProducts] = useState([]);

    const fetchFunction = async() =>{

      try {

        const fet = await fetch("https://dummyjson.com/products?limit=20");

        const res = await fet.json();

        setProducts(res.products);
        
      } catch (error) {

        console.log("Error",error);
        
      }
    }

    useEffect (()=>{
      fetchFunction();
    })

    const AllData = [...products];

    const [search,setSearch]= useState("");

    const HandleSearch=(e)=>{

      setSearch(e.target.value);

    }

    

  return (
    <>
    <div>

        <h1>This is the DashBoard with Products Here</h1>

        <h1>Avilable Products Are:</h1>

        <label>Enter Product to Search :</label>
        <input type="text"
        onChange={HandleSearch}
        value={search}
        placeholder="Enter Name Of Product"/>

        {AllData.map((e=>(

          <div key={e.id}>

          <img src={e.thumbnail}
          alt={e.title}/>

          <h2>{e.title}</h2>
          <h2>{e.price}</h2>
          <h2>{e.category}</h2>
        </div>
      
        )))}

        


    </div>
    </>
  )
}

export default Dashboard