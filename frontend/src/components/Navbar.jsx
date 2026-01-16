import { Link, useNavigate } from "react-router";
import { useState, useRef, useEffect } from "react";
import toast from "react-hot-toast";

import { useAuth } from "../context/AuthContext";
import { getAvatarUrl } from "../utils/avatarUtils";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
    toast.success("Logged out successfully");
  };

  return (
    <div className="w-full bg-gray-800 border-b px-4 py-3 flex items-center justify-between shadow-md">

      {/* Left */}
      <Link
        to="/"
        onClick={() => window.scrollTo(0, 0)}
        className="text-3xl font-extrabold tracking-widest text-yellow-400 hover:text-yellow-300 transition"
      >
        RENTAL BUDDY
      </Link>

      {/* Right */}
      <div className="flex gap-4 items-center relative">
        {!user ? (
          <>
            <Link
              to="/users/login"
              onClick={() => window.scrollTo(0, 0)}
              className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transiton-all duration-200 transform hover:scale-105"
            >
              Login
            </Link>

            <Link
              to="/users/signup"
              onClick={() => window.scrollTo(0, 0)}
              className="px-4 py-2 font-semibold text-blue-600 border border-blue-600 rounded-lg bg-white hover:bg-blue-50 transition-colors"
            >
              Sign up
            </Link>
          </>
        ) : (
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 focus:outline-none hover:bg-gray-700 p-2 rounded-lg transition-colors bg-white/10"
            >
              <div className="w-8 h-8 rounded-full bg-yellow-400 p-0.5 overflow-hidden">
                <img
                  src={getAvatarUrl(user)}
                  alt="User"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="text-white font-semibold hidden md:block">{user.fullName.split(' ')[0]}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className={`w-4 h-4 text-white transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-1 overflow-hidden z-50 origin-top-right animate-in fade-in zoom-in-95 duration-100">
                <Link
                  to="/dashboard"
                  onClick={() => { setIsDropdownOpen(false); window.scrollTo(0, 0); }}
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors border-b border-gray-50"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                  </svg>
                  My Rides
                </Link>

                <Link
                  to="/profile"
                  onClick={() => { setIsDropdownOpen(false); window.scrollTo(0, 0); }}
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors border-b border-gray-50"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                  My Profile
                </Link>

                <button
                  onClick={handleLogout}
                  className="w-full text-left flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 transition-colors font-medium"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
                  </svg>
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>

    </div>
  );
};

export default Navbar;
