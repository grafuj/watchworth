import React from "react";
import { Link } from "react-router-dom";


export default function Nav(props) {
  const { films, users, reviews } = props;
  return (
    <nav>
      <div className="site-logo" >
        <Link to="/" className="site-logo-text">Watchworth</Link>
      </div>
      <span>
        <Link to="/films" className="site-logo-text">Films</Link>
        <Link to="/reviews" className="site-logo-text">Reviews</Link>
        <Link to="/users" className="site-logo-text">Users</Link>
      </span>
    </nav>
  );
}
