import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Example of how to use it for register and login:
export const registerUser = (userData) => API.post("/register", userData);
export const loginUser = (userData) => API.post("/login", userData);
