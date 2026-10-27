import { Routes, Route, Navigate } from "react-router-dom";

import Registration from "./pages/auth/Registration";
import Login from "./pages/auth/Login";
import AdminDashboard from "./pages/Dashboards/AdminDash";
import UserDashboard from "./pages/Dashboards/UserDash";
import ProtectedRoutes from "./routes/ProtectorRoutes";
import Unauthorized from "./pages/Unauthorized/Unauthorized";

const App = () => {
    return (
        <Routes>

            <Route
                path="/"
                element={<Navigate to="/register" replace />}
            />

            <Route
                path="/register"
                element={<Registration />}
            />

            <Route
                path="/login"
                element={<Login />}
            />

            <Route
                path="/admin-dashboard"
                element={
                    <ProtectedRoutes allowedRole="admin">
                        <AdminDashboard />
                    </ProtectedRoutes>
                }
            />

            <Route
                path="/user-dashboard"
                element={
                    <ProtectedRoutes allowedRole="user">
                        <UserDashboard />
                    </ProtectedRoutes>
                }
            />

            <Route
                path="/unauthorized"
                element={<Unauthorized />}
            />

        </Routes>
    );
};

export default App;