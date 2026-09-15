import { Link } from "react-router-dom";
import "./Navbar.css";


function Navbar() {

  return (

    <nav className="navbar">

      <div className="logo">
        RUCP
      </div>


      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/members">
          Members
        </Link>

        <Link to="/rankings">
          Rankings
        </Link>

        <Link to="/achievements">
          Achievements
        </Link>

        {/* <Link to="/reports">
          Reports
        </Link>

        <Link to="/sessions">
          Sessions
        </Link> */}

      </div>


    </nav>

  );

}


export default Navbar;