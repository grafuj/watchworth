import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, BrowserRouter } from "react-router-dom"; //BrowserRouter
import './App.css';
function App() {
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

        setState((prev) => ({ ...prev, films, users, reviews }));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <BrowserRouter>
      <p>Nav placeholder</p>
      <Routes>
        <Route path="/" element={
          <Dashboard
            films={state.films}
            users={state.users}
            reviews={state.reviews}
          />
        }
        >

        </Route>
      </Routes>
      <div className="App">
        <header className="App-header">
          <h1>Watchworth</h1>
          <a href="/films">Bring Me Films</a>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
