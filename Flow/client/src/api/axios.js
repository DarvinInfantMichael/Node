import axios from "axios";

const API = axios.create({

    baseURL:import.meta.env.VITE_API_URL


})

export const postData = (data) =>{

    return API.post("/post",data);

}

export const getData = () =>{

    return API.get("/get");

}

export const putData = (id,data) =>{
    
    return API.put(`/put/${id}`,data)

}

export const deleteData =(id) =>{

    return API.delete(`/delete/${id}`)

}