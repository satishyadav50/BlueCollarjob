import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Nav.css";

export default function Nav() {
  const navigate = useNavigate();
  const [menuVisible, setMenuVisible] = useState(false);

  const userLogged = localStorage.getItem("isLoggedIn");
  const empLogged = localStorage.getItem("empLogged");

  return (
    <>
      <header className="nav-container">
        <div className="logo">
          <h2>BlueCollarJob</h2>
        </div>

        <nav className="navbar">

          {/* USER NAV */}
          {!empLogged && (
            <>
              <Link to="/">Home</Link>
              <Link to="/job">Jobs</Link>
              <Link to="/employerlogin">Employer</Link>

              {!userLogged && <Link to="/login">Login</Link>}

              {userLogged && (
                <div className="profile-wrapper">
                  <button
                    className="profile-btn"
                    onClick={() => setMenuVisible(!menuVisible)}
                  >
                    Profile
                  </button>

                  {menuVisible && (
                    <div className="dropdown-menu">
                      <button
                        onClick={() => {
                          navigate("/profile");
                          setMenuVisible(false);
                        }}
                      >
                        View Profile
                      </button>

                      <button
                        onClick={() => {
                          localStorage.removeItem("isLoggedIn");
                          localStorage.removeItem("loggedUser");
                          setMenuVisible(false);
                          navigate("/");
                        }}
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              )}
            </>
          )}

          {/* EMPLOYER NAV */}
          {empLogged && (
            <>
              <Link to="/empdashboard">Dashboard</Link>
              <Link to="/jobpost">Post Job</Link>
              <Link to="/employerprofile">Employer Profile</Link>

              <button
                className="profile-btn"
                onClick={() => {
                  localStorage.removeItem("empLogged");
                  localStorage.removeItem("empData");
                  navigate("/");
                }}
              >
                Logout
              </button>
            </>
          )}
        </nav>
      </header>

      <main className="page-content">
        <Outlet />
      </main>
    </>
  );
}
