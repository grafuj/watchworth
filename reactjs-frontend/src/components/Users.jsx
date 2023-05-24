import React from "react";
import { Link } from "react-router-dom";


export default function Films(props) {
  const { films, users, reviews } = props;
  return (
    <>
      <h1>Users!</h1>
      <span>
        {users && users.map((user) => {
          const route = `/user/${user.id}`;
          return (
            <Link
              key={user.id}
              to={route}
              state={{ user: user }}
            >
              <p>{user.username}</p>
            </Link>
          );
        })}
      </span>
    </>
  );
}
