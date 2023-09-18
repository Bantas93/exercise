import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "black" : "black",
      textDecoration: isActive ? "none" : "none",
      fontWeight: isActive ? "bold" : "",
    };
  };
  return (
    <nav class="navbar navbar-expand-lg" style={{ backgroundColor: "#edf1fd" }}>
      <div class="container justify-content-center">
        <button
          class="navbar-toggler navbar-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-center"
          id="navbarNavAltMarkup"
        >
          <div class="navbar-nav text-center">
            <NavLink to="/" style={navLinkStyles} className="m-1 p-1">
              Home
            </NavLink>
            <NavLink to="/Exercise1" style={navLinkStyles} className="m-1 p-1">
              Exercise1
            </NavLink>
            <NavLink to="/Exercise2" style={navLinkStyles} className="m-1 p-1">
              Exercise2
            </NavLink>
            <NavLink to="/Exercise3" style={navLinkStyles} className="m-1 p-1">
              Exercise3
            </NavLink>
            <NavLink to="/Exercise4" style={navLinkStyles} className="m-1 p-1">
              Exercise4
            </NavLink>
            <NavLink to="/AppBooking" style={navLinkStyles} className="m-1 p-1">
              AppBooking
            </NavLink>
            <NavLink
              to="/ApiExercise"
              style={navLinkStyles}
              className="m-1 p-1"
            >
              Api Exercise
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
