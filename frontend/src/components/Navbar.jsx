import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";

import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
    toast.success("Logged out successfully");
  };

  return (
    <div className="w-full bg-gray-800 border-b px-4 py-3 flex items-center justify-between shadow-md">

      {/* Left */}
      <Link to="/" className="text-3xl font-extrabold tracking-widest text-yellow-400 hover:text-yellow-300 transition">
        RENTAL BUDDY
      </Link>

      {/* Right */}
      <div className="flex gap-4 items-center">
        {!user ? (
          <>
            <Link
              to="/users/login"
              className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transiton-all duration-200 transform hover:scale-105"
            >
              Login
            </Link>

            <Link
              to="/users/signup"
              className="px-4 py-2 font-semibold text-blue-600 border border-blue-600 rounded-lg bg-white hover:bg-blue-50 transition-colors"
            >
              Sign up
            </Link>
          </>
        ) : (
          <div className="flex items-center gap-4">
            <Link
              to="/dashboard"
              className="font-semibold text-gray-200 hover:text-white"
            >
              My Dashboard
            </Link>
            <span className="text-gray-400 text-sm hidden md:inline">Hello, {user.fullName}</span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 font-semibold text-white bg-red-600 rounded-lg shadow hover:bg-red-700 transition-all tranform hover:scale-90 duration-150"
            >
              Logout
            </button>
          </div>
        )}
      </div>

    </div>
  );
};

export default Navbar;
