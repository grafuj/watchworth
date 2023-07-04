import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function User(props) {
  const { films, users, reviews } = props;
  const [state, setState] = useState({
    userReviews: [],
    myUser: {}
  });

  let params = useParams();
  const userID = params.id;
  console.log(userID, "userID")

  useEffect(() => {
    if (reviews) {
      const userReviews = reviews.filter((review) => review.user_id.toString() === userID);
      const myUser = users.find(user => user.id.toString() === userID);
      console.log("filtered reviews for user", userReviews, "user ID to filter:", userID);
      setState({userReviews, myUser});
    }
  }, [reviews, userID]);

  return (
    <>
    <h1>{state.myUser && state.myUser.username}</h1>
      {state.userReviews.length > 0 ? (
        <>
          {state.userReviews.map((review) => {
            const myFilm = review.film_id ? films.find((film) => film.id === review.film_id) : null;
            const myUser = users.find((user) => user.id === review.user_id);
            return (
              <div key={review.id}>
                <h1>{myFilm.name}</h1>
                <p>Author: {myUser.username}</p>
              </div>
            );
          })}
        </>
      ) : (
        <p>No Reviews</p>
      )}
    </>
  );
}
