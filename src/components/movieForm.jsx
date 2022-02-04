import Joi from "joi-browser";
import React from "react";
import Form from "./common/form";
import { getGenres } from "../services/fakeGenreService";
// import { useParams, useNavigate } from "react-router-dom";

export default class MovieForm extends Form {
  state = {
    data: { title: "", genre: "", numberInStock: "", rate: "" },
    errors: {},
    genres: [],
  };

  componentDidMount() {
    const genres = [...getGenres()];
    this.setState({ genres });
  }

  schema = {
    title: Joi.string().required().label("Title"),
    genre: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .min(0)
      .max(100)
      .required()
      .label("Number in Stock"),
    rate: Joi.number().min(0).max(10).required().label("Rate"),
  };

  doSubmit = () => {
    // Call the server
    console.log("Submitted");
  };

  /*   const { id } = useParams();
  let navigate = useNavigate(); */
  render() {
    return (
      <div className="container">
        <h1>Movie Form</h1>
        {/*       <button
        className="btn btn-primary"
        onClick={() => navigate("/movies", { replace: true })}
      >
        Save
      </button> */}
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("genre", "Genre", this.state.genres)}
          {this.renderInput("numberInStock", "Number in Stock", "Number")}
          {this.renderInput("rate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}
