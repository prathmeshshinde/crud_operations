import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <div className="landing-page">
        <div className="wrapper">
          <div className="d-flex justify-content-center align-items-center text-center h-100 flex-column">
            <div className="border border-2 border-danger rounded p-3">
              <p className="display-1 text-light">JS Employee Manager App</p>
              <Link to="/display" className="btn btn-warning">
                View Employees
              </Link>
            </div>

            <div className="border border-2 border-info rounded p-3 mt-4">
              <p className="display-1 text-light">JS Teacher Manager App</p>
              <Link to="/displayteach" className="btn btn-warning">
                View Teachers
              </Link>
            </div>
            <div className="border border-2 border-danger rounded p-3 mt-4">
              <p className="display-1 text-light">JS Engineers Manager App</p>
              <Link to="/displayengi" className="btn btn-warning">
                View Engineers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
