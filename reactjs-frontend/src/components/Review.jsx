import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

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
      console.log("inside reviews");
      const myReview = reviews.find((review) => review.id.toString() === reviewID);
      console.log("got review", myReview, "id to look for:", reviewID);
      if (myReview) {
        console.log("got into myReview");
        const myFilm = myReview.film_id ? films.find((film) => film.id === myReview.film_id) : null;
        const myUser = users.find((user) => user.id === myReview.user_id);
        const authorRoute = `/user/${myUser.id}`;
        const filmRoute = `/film/${myFilm.id}`;
        setState({ myReview, myFilm, myUser, authorRoute, filmRoute });
      }
    }
  }, [films, reviews, users, reviewID]);


  return (
    <>
      {state.myFilm && state.myUser && state.myReview ? (
        <>
          <h1>{state.myFilm.name}</h1>
          <Link to={state.authorRoute}>{state.myFilm.name}</Link>
          <p>Author: {state.myUser.username}</p>
          <table>
            <thead>
              <tr>
                <th>Metric</th>
                <th>Comments</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Engagement</td>
                <td>{state.myReview.engagement}</td>
                <td>{(state.myReview.engagement_score * 10)}%</td>
              </tr>
              <tr>
                <td>Acting</td>
                <td>{state.myReview.acting}</td>
                <td>{(state.myReview.acting_score * 10)}%</td>
              </tr>
              <tr>
                <td>Plot Consistency</td>
                <td>{state.myReview.plot_consistency}</td>
                <td>{(state.myReview.plot_consistency_score * 10)}%</td>
              </tr>
              <tr>
                <td>Scene Choice</td>
                <td>{state.myReview.scene_choice}</td>
                <td>{(state.myReview.scene_choice_score * 10)}%</td>
              </tr>
              <tr>
                <td>Dialogue</td>
                <td>{state.myReview.dialogue}</td>
                <td>{(state.myReview.dialogue_score * 10)}%</td>
              </tr>
              <tr>
                <td>Character Desires</td>
                <td>{state.myReview.character_desires}</td>
                <td>{(state.myReview.character_desires_score * 10)}%</td>
              </tr>
              <tr>
                <td>Theme</td>
                <td>{state.myReview.theme}</td>
                <td>{(state.myReview.theme_score * 10)}%</td>
              </tr>
              <tr>
                <td>Suitability</td>
                <td>{state.myReview.suitability}</td>
                <td>{(state.myReview.suitability_score * 10)}%</td>
              </tr>
              <tr>
                <td>Overall Score</td>
                <td> --- </td>
                <td>{(state.myReview.overall_score * 10).toFixed(2)}%</td>
              </tr>
            </tbody>
          </table>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
