import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useUser } from "../features/auth/useUser";
import { toast } from "react-toastify";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  const { isLoading, isAuthenticated, user } = useUser();

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );

  if (user?.email !== "admin@gmail.com") {
    toast.error("You are not authorized to access this page.");
    navigate("/");
  }

  if (isAuthenticated) return children;
};

export default ProtectedRoute;
