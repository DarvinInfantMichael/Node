import { useEffect, useState } from "react"


const Dashboard = () => {

    const [products,setProducts] = useState([]);
    const [uni,setUni]=useState([]);

    const fetchFunction = async() =>{

      try {

        const fet = await fetch("https://dummyjson.com/products?limit=20");

        const res = await fet.json();

        const udata =[...new Set(res.products.map((e)=>e.category))];
    
        setUni(udata);

        setProducts(res.products);
        
      } catch (error) {

        console.log("Error",error);
        
      }
    }

    useEffect (()=>{
      fetchFunction();
    },[])

    let AllData = [...products];

    const [search,setSearch]= useState("");

    const HandleSearch=(e)=>{

      setSearch(e.target.value);

    }

    if(search){

      AllData=AllData.filter((e)=>e.title.toLowerCase().includes(search.toLowerCase()));

    }

    const [sortData,setSortData] =useState("");

    const HandleSort =(e)=>{

      setSortData(e.target.value);

    }

    if(sortData){

      AllData=AllData.filter((e)=>e.category===sortData);

    }
    

  

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 mb-4 tracking-tight">
            Discover Products
          </h1>
          <p className="text-slate-400 text-lg">Browse our exclusive collection</p>
        </header>

        <div className="flex flex-col md:flex-row gap-4 mb-10 items-center justify-center max-w-3xl mx-auto bg-slate-900/50 p-4 rounded-2xl border border-slate-800 backdrop-blur-sm">
          <div className="w-full md:w-2/3 relative">
            <input type="text"
              onChange={HandleSearch}
              value={search}
              placeholder="Search products by name..."
              className="w-full bg-slate-800/80 border border-slate-700 rounded-xl pl-5 pr-10 py-3.5 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all shadow-inner"
            />
          </div>

          <div className="w-full md:w-1/3">
            <select value={sortData}
              onChange={HandleSort}
              className="w-full bg-slate-800/80 border border-slate-700 rounded-xl px-5 py-3.5 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all shadow-inner appearance-none cursor-pointer">
              <option value="">All Categories</option>
              {uni.map((e)=>(
                <option key={e} value={e}>{e}</option>
              ))}
            </select>
          </div>
        </div>

        {AllData.length === 0 ? (
           <div className="text-center py-20">
             <p className="text-slate-400 text-xl">No products found matching your criteria.</p>
           </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {AllData.map((e=>(
              <div key={e.id} className="group bg-slate-900 rounded-2xl overflow-hidden hover:shadow-[0_8px_30px_rgba(168,85,247,0.15)] transition-all duration-300 transform hover:-translate-y-2 border border-slate-800 flex flex-col h-full">
                <div className="relative h-56 bg-white flex items-center justify-center overflow-hidden p-4">
                  <img src={e.thumbnail} alt={e.title} className="max-h-full object-contain group-hover:scale-110 transition-transform duration-500 ease-in-out"/>
                  <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-sm text-xs font-bold text-white px-3 py-1 rounded-full border border-slate-700 shadow-sm">
                    {e.category}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow border-t border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950">
                  <h2 className="text-lg font-bold text-slate-100 mb-1 truncate" title={e.title}>{e.title}</h2>
                  <div className="mt-auto pt-4 flex items-center justify-between">
                    <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">${e.price}</span>
                    <button className="bg-slate-800 hover:bg-slate-700 text-slate-300 p-2 rounded-lg transition-colors border border-slate-700">
                       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 7 4.42-4.42a2 2 0 0 1 2.83 0l3 3a2 2 0 0 0 2.83 0l3-3a2 2 0 0 1 2.83 0L22 7"/><path d="M2 14v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4"/><path d="M22 10v4"/><path d="M2 10v4"/></svg>
                    </button>
                  </div>
                </div>
              </div>
            )))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard