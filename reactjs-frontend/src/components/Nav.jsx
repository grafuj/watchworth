import React from "react";
import { Link } from "react-router-dom";


export default function Nav(props) {
  // const { films, users, reviews } = props;
  return (
    <nav className="nav">
      <div className="site-logo" >
        <Link to="/" className="site-logo-text">Watchworth</Link>
      </div>
      <span className="nav-content">
        <Link to="/films" className="site-logo-text">Films</Link>
        <Link to="/reviews" className="site-logo-text">Reviews</Link>
        <Link to="/users" className="site-logo-text">Users</Link>
      </span>
      <span className="nav-options">
        <Link to="/settings" className="site-logo-text">Settings</Link>
        <Link to="/users/1" className="site-logo-text">User</Link>
        <Link to="/logout" className="site-logo-text">Logout</Link>
      </span>
    </nav>
  );
}
