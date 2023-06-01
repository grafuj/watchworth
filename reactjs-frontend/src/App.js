import React, { useState, useEffect } from "react";
import axios from "axios";
import './styles/css/style.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Films from "./components/Films";
import Reviews from "./components/Reviews";
import Users from "./components/Users";
import Nav from "./components/Nav";
import Empty from "./components/Empty";
import Footer from "./components/Footer";
import Film from "./components/Film";
import Review from "./components/Review";
import User from "./components/User";

export default function App() {
  const [state, setState] = useState({
    films: [],
    reviews: [],
    users: [],
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
        // console.log("films:", films, "users:", users, "reviews:", reviews);
        setState((prev) => ({ ...prev, films, users, reviews }));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <BrowserRouter>
      <Nav />
      <main className="main-window-space">
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
          <Route path="/film/:id" element={
            <Film
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
          <Route path="/review/:id" element={
            <Review
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
          <Route path="/user/:id" element={
            <User
              films={state.films}
              users={state.users}
              reviews={state.reviews}
            />}
          >
          </Route>
          <Route path="*" element={<Empty />}></Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
