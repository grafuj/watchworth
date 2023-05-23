import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom"; //BrowserRouter
import Dashboard from "./components/Dashboard";
import Films from "./components/Films";
import Reviews from "./components/Reviews";
import Users from "./components/Users";
import Nav from "./components/Nav";


export default function App() {
  const [state, setState] = useState({
    folders: [],
    departments: [],
    items: [],
  });
  useEffect(() => {
    Promise.all([
      axios.get("/api/films"),
      axios.get("/api/users"),
      axios.get("/api/reviews"),
    ])
      .then((all) => {
        const films = all[0].data;
        const users = all[1].data;
        const reviews = all[2].data;
        console.log("films:", films, "users:", users, "reviews:", reviews);
        setState((prev) => ({ ...prev, films, users, reviews }));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={
          <Dashboard
            films={state.films}
            users={state.users}
            reviews={state.reviews}
          />}
        >
        </Route>
        <Route path="/films" element={
          <Films
            films={state.films}
            users={state.users}
            reviews={state.reviews}
          />}
        >
        </Route>
        <Route path="/reviews" element={
          <Reviews
            films={state.films}
            users={state.users}
            reviews={state.reviews}
          />}
        >
        </Route>
        <Route path="/users" element={
          <Users
            films={state.films}
            users={state.users}
            reviews={state.reviews}
          />}
        >
        </Route>

      </Routes>
      <div className="App">
        <header className="App-header">
          <h1>Watchworth</h1>
          <Link to={"/films"}><p>Films</p></Link>
          <Link to={"/reviews"}><p>Reviews</p></Link>
          <Link to={"/users"}><p>Users</p></Link>
        </header>
      </div>
    </BrowserRouter>
  );
}
