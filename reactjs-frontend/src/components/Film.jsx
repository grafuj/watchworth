import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Film(props) {
  const { films, users, reviews } = props;
  const [myFilm, setMyFilm] = useState({});

  // console.log("films inside component Film:", films)

  let params = useParams();
  // console.log("from useparams, filmID:", params.id)
  const filmID = params.id;
  // const myFilm = films.find(film => film.id === filmID);

  useEffect(() => {
    if (films) {
      setMyFilm(films.find(film => film.id == filmID)); //types are different
      // console.log(myFilm.name) //blank first time, populated on re-render
    }
  }, [films]);

  console.log("myFilm:", myFilm);
  return (
    <>
      <h1>{myFilm.name}</h1>
      <span>
        <p>
          <a href={myFilm.imdb_url}>IMDB Link</a>
        </p>

        <p>Release Date: {myFilm.release_date}</p>
        <p>Genre: {myFilm.genre}</p>
      </span>
    </>
  );
}
