import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Registraion from "../components/Registraion";
import Login from "../components/Login";
import Dashboard from "../components/DashBoard";

const Day1 = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Registration" element={<Registraion />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default Day1;