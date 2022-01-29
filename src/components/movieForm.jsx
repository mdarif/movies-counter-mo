import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const MovieForm = (props) => {
  const { id } = useParams();
  let navigate = useNavigate();
  console.log("navigate", navigate);

  return (
    <div className="container">
      <h1>Movie Form {id}</h1>
      <button
        className="btn btn-primary"
        onClick={() => navigate("/movies", { replace: true })}
      >
        Save
      </button>
    </div>
  );
};

export default MovieForm;
