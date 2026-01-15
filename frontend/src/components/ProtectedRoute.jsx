import { Navigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
    const { isLoggedIn } = useAuth();

    useEffect(() => {
        if (!isLoggedIn) {
            toast.error("Please login first to access this page");
        }
    }, [isLoggedIn]);

    if (!isLoggedIn) {
        return <Navigate to="/users/login" replace />;
    }

    return children;
};

export default ProtectedRoute;
