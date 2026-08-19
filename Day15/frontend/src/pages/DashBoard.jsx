import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDashboard } from "../apis/axios";

const Dashboard = () => {
  const nav = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const response = await getDashboard();

        console.log("Dashboard Response:", response.data);

        setUser(response.data.user);

      } catch (error) {
        console.log("Dashboard Error:", error);

        localStorage.removeItem("token");

        nav("/Login");
      }
    };

    fetchDashboard();
  }, [nav]);

  const handleOut = () => {
    localStorage.removeItem("token");

    nav("/Login");
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <div className="w-full max-w-2xl">

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

            <div className="bg-blue-600 px-8 py-10 text-center">

              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white text-blue-600 text-3xl font-bold shadow-md">
                {user.username?.charAt(0).toUpperCase()}
              </div>

              <h1 className="text-3xl font-bold text-white">
                Welcome To Your Dashboard!
              </h1>

              <p className="mt-2 text-blue-100">
                Hello, {user.username}
              </p>

            </div>

            <div className="p-8">

              <h2 className="text-xl font-semibold text-gray-800 mb-6">
                User Information
              </h2>

              <div className="grid gap-4 sm:grid-cols-2">

                <div className="rounded-xl bg-gray-50 border border-gray-200 p-5">
                  <p className="text-sm text-gray-500">
                    User Name
                  </p>

                  <p className="mt-1 text-lg font-semibold text-gray-800">
                    {user.username}
                  </p>
                </div>

                <div className="rounded-xl bg-gray-50 border border-gray-200 p-5">
                  <p className="text-sm text-gray-500">
                    Email
                  </p>

                  <p className="mt-1 text-lg font-semibold text-gray-800 break-words">
                    {user.useremail}
                  </p>
                </div>

              </div>

              <button
                onClick={handleOut}
                className="mt-8 w-full rounded-lg bg-red-500 py-3 font-semibold text-white shadow-md transition duration-200 hover:bg-red-600 active:scale-[0.98]"
              >
                Logout
              </button>

            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default Dashboard;