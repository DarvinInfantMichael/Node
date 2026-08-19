import axios from "axios";

const API=axios.create({

    baseURL:import.meta.env.VITE_API_URL

})

export const registerUser = (data) => {
    return API.post("/register", data);
};

export const loginUser = (data) => {
    return API.post("/login", data);
};

export const getDashboard = () => {
    return API.get("/dash");
};