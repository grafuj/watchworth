import React from "react";
import { Link } from "react-router-dom";

export default function Films(props) {
  const { films, users, reviews } = props;
  return (
    <>
      <h1>Reviews!</h1>
      <span>
        {reviews && reviews.map((review) => {
          const route = `/review/${review.id}`;
          const filmID = review.film_id;
          const myFilm = films.find(film => film.id === filmID);
          const myUser = users.find(user => user.id === review.user_id);
          return (
            <span key={review.id}>
              <Link to={route} state={{ review: review }}>
                <p>Review of {myFilm.name}</p>
              </Link>
              <Link to={`/user/${myUser.id}`}>
                <p>By: {myUser.username}</p>
              </Link>
            </span>
          );
        })}
      </span>
    </>
  );
}
