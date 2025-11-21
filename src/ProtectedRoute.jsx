import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const loggedIn = localStorage.getItem("isLoggedIn");

  return loggedIn ? children : <Navigate to="/login" />;
}
