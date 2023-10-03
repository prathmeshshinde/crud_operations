import React from "react";
import { Link } from "react-router-dom";

interface IState {
  title: string;
}

const Navbar: React.FC<IState> = (props) => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand sm">
      <div className="container">
        <p className="h5 text-warning">{props.title}</p>
        <div className="navbar-collapse collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/display" className="nav-link">
                Display
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin" className="nav-link">
                Admin
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/displayteach" className="nav-link">
                DisplayTeacher
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/adminteach" className="nav-link">
                AdminTeacher
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/displayengi" className="nav-link">
                DisplayEngineer
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/adminengi" className="nav-link">
                AdminEngineer
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
