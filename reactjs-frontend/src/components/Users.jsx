import React from "react";
import { Link } from "react-router-dom";


export default function Films(props) {
  const { films, users, reviews } = props;
  return (
    <>
      <h1>Films!</h1>
      <span>
        {films && films.map((film) => {
          const route = `/films/${film.id}`;
          return (
            <Link
              key={film.id}
              to={route}
              state={{ film: film }}
            >
              <p>{film.name}</p>
            </Link>
          );
        })}
      </span>
    </>
  );
}
