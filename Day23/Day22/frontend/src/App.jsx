
import { Route, Routes } from "react-router-dom"
import Registration from "./pages/Registration"
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Registration/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/dash" element={<Dashboard/>}/>

    </Routes>
    </>
  )
}

export default App