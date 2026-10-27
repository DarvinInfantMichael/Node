    import { useNavigate } from "react-router-dom";

const UserDashboard = () => {

    const nav = useNavigate();

    const logout = () => {
        sessionStorage.removeItem("CurrentUser");
        nav("/login", { replace: true });
    };

    return (
        <div>
            <h1>User Dashboard</h1>
            <p>Welcome User!</p>

            <button onClick={logout}>
                Logout
            </button>
        </div>
    );
};

export default UserDashboard;