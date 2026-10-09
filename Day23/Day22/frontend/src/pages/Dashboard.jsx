import { useEffect, useState } from "react"


const Dashboard = () => {

    const [user,setUser] = useState({UserName:"",UserEmail:""});

    useEffect(()=>{

        const data =  JSON.parse(localStorage.getItem("Data"));

        if(data){
            setUser(data);
        }else{
            alert("Credits Missing");
    }
    },[]);

    const [products,setProducts] =useState([]);

    useEffect(()=>{

        const getProducts = async()=>{

        try {
            
            const response = await fetch("https://dummyjson.com/products");

            const data= await response.json();

            setProducts(data.products);
        
        } catch (error) {

            console.log("Error Ocurred",error);
            
        }};
        getProducts();
    },[]);

    const AllData =[...products];


    const [search,setSearch]=useState("");

    const handleChange=(e)=>{

        setSearch(e.target.value);

    }

    const filteringPorduct = AllData.filter((e)=>e.title.toLowerCase().includes(search.toLowerCase()));

    const [sort,setSort] = useState("");

    const handleSort=(e)=>{
        setSort(e.target.value)
    }

    const sortedList = [...filteringPorduct].sort((a,b)=>{
        if(sort=="Low"){
            return a.price - b.price;
        }
        if(sort=="High"){
            return b.price - a.price;
        }
        return 0;
    })

  return (
    <>
    <div>
        <h1>Wlecome {user.UserName} !</h1>
        <h3>Our Platform Products Are Here :</h3>

        <label>Enter Product to Search :</label>
        <input type="text" onChange={handleChange} value={search} placeholder="Enter Product Name..."/>

        <select onChange={handleSort} value={sort}>

            <option value={""}>Sort by Price</option>
            <option value="Low">Low-High</option>
            <option value="High">High-Low</option>
            
        </select>

        {sortedList.map((e)=>(

            <div key={e.id}>
            <img 
                src={e.thumbnail}
                alt={e.title}
                className="w-40 h-40 object-cover"
            />
            <h2>{e.title}</h2>
            <h2>{e.price}</h2>
            <h2>{e.category}</h2>

        </div>
        
        ))}

        

    </div>
    </>
  )
}

export default Dashboard