import React, { Component } from "react";
import { getGenres } from "../services/fakeGenreService";
import { getMovies } from "../services/fakeMovieService";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import Like from "./common/like";
import Pagination from "./common/pagination";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    like: false,
    pageSize: 4,
    currentPage: 1,
  };

  componentDidMount() {
    const genres = [{ name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = (movie) => {
    this.setState({
      movies: this.state.movies.filter((m) => m._id !== movie._id),
    });
    console.log("movies", this.state.movies);
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies]; // Clone the object first
    const index = movies.indexOf(movie); // find out the index of current movie
    movies[index] = { ...movies[index] }; // Clone the indexed object
    movies[index].liked = !movies[index].liked; // Toggle the like button
    this.setState({ movies }); //Now update the state of current heart object
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    console.log("genre", genre);
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  render() {
    // console.log(this.state.movies);
    const { length: count } = this.state.movies;
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      selectedGenre,
    } = this.state;

    if (count === 0) return <p>There are no movies in the database</p>;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;

    console.info("filtered", filtered, " selectedGenre", selectedGenre);
    const movies = paginate(filtered, currentPage, pageSize);

    return (
      <div className="container">
        <div className="row pt-md-5">
          <div className="col-3">
            <ListGroup
              items={this.state.genres}
              selectedItem={this.state.selectedGenre}
              onItemSelect={this.handleGenreSelect}
            />
          </div>
          <div className="col">
            <div>Showing {filtered.length} movies in the database</div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Genre</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Rate</th>
                  <th scope="col"></th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {movies.map((movie) => (
                  <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td>
                      <Like
                        liked={movie.liked}
                        onClickToggle={() => this.handleLike(movie)}
                      />
                    </td>
                    <td>
                      <button
                        type="button"
                        onClick={() => this.handleDelete(movie)}
                        className="btn btn-danger btn-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination
              onPageChange={this.handlePageChange}
              itemsCount={filtered.length}
              currentPage={currentPage}
              pageSize={pageSize}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;
