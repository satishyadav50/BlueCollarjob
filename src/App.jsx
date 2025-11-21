import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./component/Nav.jsx";

/* User Pages */
import Home from "./component/Home.jsx";
import Job from "./page/Job.jsx";
import Login from "./page/Login.jsx";
import Sign from "./page/Sign.jsx";
import Profile from "./page/Profile.jsx";

/* Employer Pages */
import EmpLogin from "./Employer/EmpLogin.jsx";
import EmpSign from "./Employer/EmpSign.jsx";

/* Employer Panel */
import Jobpost from "./Employer/Jobpost.jsx";
import EmpProfile from "./Employer/EmpProfile.jsx";
import EmpDashboard from "./Employer/EmpDashboard.jsx";

/* Protected Routes */
import ProtectedRoute from "./ProtectedRoute.jsx";
import EmpProtected from "./Employer/EmpProtected.jsx";
import Footer from "./component/Footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      
      <Routes>
        {/* AUTH PAGES */}
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/employerlogin" element={<EmpLogin />} />
        <Route path="/empsign" element={<EmpSign />} />

        {/* USER ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="job" element={<Job />} />
        <Route path="profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />

        {/* EMPLOYER ROUTES */}
        <Route path="empdashboard" element={<EmpProtected><EmpDashboard /></EmpProtected>} />
        <Route path="employerprofile" element={<EmpProtected><EmpProfile /></EmpProtected>} />
        <Route path="jobpost" element={<EmpProtected><Jobpost /></EmpProtected>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
