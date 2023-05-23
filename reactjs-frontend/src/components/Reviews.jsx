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
          return (
            <Link
              key={review.id}
              to={route}
              state={{ review: review }}
            >
              <p>
                {films.find(film => {
                  film.id == filmID;
                  return film.name;
                })}

              </p>
              <p>{review.film_id}</p>
              <p>{review.film_id}</p>
              <p>By: {review.user_id}</p>
            </Link>
          );
        })}
      </span>
    </>
  );
}
