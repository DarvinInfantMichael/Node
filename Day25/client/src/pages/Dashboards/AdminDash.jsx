import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {

    const nav = useNavigate();

    const logout = () => {
        sessionStorage.removeItem("CurrentUser");
        nav("/login", { replace: true });
    };

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <p>Welcome Admin!</p>

            <button onClick={logout}>
                Logout
            </button>
        </div>
    );
};

export default AdminDashboard;