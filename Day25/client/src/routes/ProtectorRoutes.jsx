import { Navigate } from "react-router-dom";
import Unauthorized from "../pages/Unauthorized/Unauthorized";

const ProtectedRoutes = ({ children, allowedRole }) => {

    const currentUser = JSON.parse(
        sessionStorage.getItem("CurrentUser")
    );

    if (!currentUser) {
        return <Navigate to="/login" replace />;
    }

   if (currentUser.role !== allowedRole) {
    return <Navigate to="/unauthorized" replace />;
}

    return children;
};

export default ProtectedRoutes;