import React from "react";
import { Link } from "react-router-dom";


export default function About(props) {
  const { films, users, reviews } = props;

  return (
    <>
      <h1>Dashboard!</h1>
      <h3>My Reviews</h3>
      <h3>My Similar Users</h3>
      <p className="test">Here is an example review by me</p>
    </>
  );
}