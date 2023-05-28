import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Review(props) {
  const { films, users, reviews } = props;
  const [state, setState] = useState({
    film: {},
    review: {},
    user: {},
  });

  let params = useParams();
  const reviewID = params.id;

  useEffect(() => {
    if (reviews) {
      const myReview = reviews.find(review => review.id === reviewID);
      if (myReview) {
        const myFilm = films.find(film => film.id === myReview.film_id);
        const myUser = users.find(user => user.id === myReview.user_id);
        setState({ myReview, myFilm, myUser });
      }
    }
  }, [films, reviews, users, reviewID]);

  return (
    <>
      {state.myFilm && state.myUser && state.myReview ? (
        <>
          <h1>{state.myFilm.name}</h1>
          <p>Author: {state.myUser.username}</p>
          <p>Rating: {state.myReview.overall_score}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
