import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-yellow-200 via-orange-200 to-red-200">
      <div className="auth-container text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Profile</h2>
        <p className="text-lg text-gray-700 mb-6">
          Welcome, <span className="font-semibold">{user.username}</span>
        </p>
        <button
          onClick={handleLogout}
          className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
