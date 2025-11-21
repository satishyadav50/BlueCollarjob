import { Navigate } from "react-router-dom";

export default function EmpProtected({ children }) {
  const emp = localStorage.getItem("employerLogin");

  if (!emp) {
    return <Navigate to="/employerlogin" replace />;
  }

  return children;
}
