import React, { useState } from "react";
import { Link } from "react-router-dom";
import Editmodal from "./Forms/Editmodal";
import Form from "./Forms/Form";

export default function Films(props) {
  const { films, users, reviews } = props;
  const [show, setShow] = useState(false);

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
        {waitForDatabaseResponse() && films.map((film) => {
          const route = `/film/${film.id}`;
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
