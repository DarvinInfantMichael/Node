import { useNavigate } from "react-router-dom";

const Unauthorized = () => {

    const nav = useNavigate();

    const currentUser = JSON.parse(
        sessionStorage.getItem("CurrentUser")
    );

    const handleBack = () => {

        if (currentUser?.role === "admin") {
            nav("/admin-dashboard");
        } 
        else if (currentUser?.role === "user") {
            nav("/user-dashboard");
        } 
        else {
            nav("/login");
        }

    };

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            textAlign: "center"
        }}>

            <h1 style={{ fontSize: "60px", color: "red" }}>
                403
            </h1>

            <h2>Access Denied</h2>

            <p>
                You don't have permission to access this page.
            </p>

            <button onClick={handleBack}>
                Go Back to Dashboard
            </button>

        </div>
    );
};

export default Unauthorized;