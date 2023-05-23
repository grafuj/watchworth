import React from "react";
import { Link } from "react-router-dom";


export default function Films(props) {
  const { films, users, reviews } = props;
  return (
    <>
      <h1>Films!</h1>
      <span>
        {reviews && reviews.map((review) => {
          const route = `/reviews/${review.id}`;
          const filmID = review.film_id;
          const myFilm = films.find(film => film.id === filmID)
          const myUser = users.find(user => user.id === review.user_id)
          return (
            <Link
              key={review.id}
              to={route}
              state={{ review: review }}
            >
            <p>{myFilm.name}</p>
            <p>By: {myUser.name}</p>
            </Link>
          );
        })}
      </span>
    </>
  );
}
