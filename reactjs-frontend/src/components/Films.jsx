import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Editmodal from "./Forms/Editmodal";
import Form from "./Forms/Form";

export default function Films(props) {
  const { films, users, reviews } = props;
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating an asynchronous data fetch
    setTimeout(() => {
      // Assuming data is fetched successfully
      setLoading(false);
    }, 150); // Simulating a small delay
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>Films!</h1>
      <p>Add a film!</p>

      <Editmodal className="nav-modal" onClose={() => setShow(false)} show={show}>
        <Form
          films={films}
          users={users}
          onClose={() => setShow(false)}
          reviews={reviews}
        />
      </Editmodal>
      <span>
        {films && films.length > 0 ? (
          films.map((film) => {
            const route = `/film/${film.id}`;
            return (
              <Link key={film.id} to={route} state={{ film: film }}>
                <p>{film.name}</p>
              </Link>
            );
          })
        ) : (
          <p>No films available</p>
        )}
      </span>
    </>
  );
}
