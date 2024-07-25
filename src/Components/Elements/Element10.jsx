import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Element10.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const Element10 = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light element10-navbar">
      <div className="container-fluid p-0"> {/* Remove padding from container */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/Setting">Limit and Usage</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ParentComponent">Assistant Preferences</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Parent2">Account Preferences</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Parent1">API Keys</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Parent3">My team</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Element10;
