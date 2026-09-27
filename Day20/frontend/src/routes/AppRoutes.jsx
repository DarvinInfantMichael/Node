import Dashboard from "../pages/Dashboard"
import Registration from "../pages/Registration"
import Login from "../pages/Login"
import { Navigate, Routes, Route } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};


const AppRoutes = () => {

  return (

    <>
    <div>
        <Routes>

            <Route path="/" element={<Registration/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route
              path="/dash"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

        </Routes>
    </div>
    </>

  )
}

export default AppRoutes