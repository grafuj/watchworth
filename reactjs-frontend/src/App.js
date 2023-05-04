import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom"; //BrowserRouter
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
        const folders = all[0].data;
        const departments = all[1].data;
        const items = all[2].data;

        setState((prev) => ({ ...prev, folders, departments, items }));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      <h1>Watchworth</h1>
      <a href="/films">Bring Me Films</a>
      </header>
    </div>
  );
}

export default App;
