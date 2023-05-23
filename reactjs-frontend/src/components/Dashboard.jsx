import React from "react";
import { Link } from "react-router-dom";


export default function Dashboard(props) {
  const { films, users, reviews } = props;

  return (
    <>
      <h1>Dashboard!</h1>
      <h3>My Reviews</h3>
    </>
  );
}