import _ from "lodash";
import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { getMovies, deleteMovie } from "../services/fakeMovieService";
import { getMovies, deleteMovie } from "../services/movieService";
// import { getGenres } from "../services/fakeGenreService";
import { getGenres } from "../services/genreService";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import MoviesTable from "./moviesTable";
import { SearchBox } from "./searchBox";
import { toast } from "react-toastify";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    like: false,
    pageSize: 4,
    currentPage: 1,
    searchQuery: "",
    selectedGenre: null,
    sortColumn: { path: "title", order: "asc" },
  };

  async componentDidMount() {
    //Decorate method with async
    const { data } = await getGenres();
    const genres = [{ _id: "", name: "All Genres" }, ...data];

    const { data: movies } = await getMovies();
    this.setState({ movies, genres });
  }

  handleDelete = async (movie) => {
    const originalMovies = this.state.movies;

    const movies = originalMovies.filter((m) => m._id !== movie._id);
    this.setState({
      movies,
    });

    /** FIXME: 404 movie error should go into try/catch block */
    try {
      await deleteMovie(movie._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        toast.error("This movie has already been deleted.");
      this.setState({ movies: originalMovies });
    }
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
    this.setState({ selectedGenre: genre, currentPage: 1, searchQuery: "" });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPagedata = () => {
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      selectedGenre,
      searchQuery,
      sortColumn,
    } = this.state;

    let filtered = allMovies;
    if (searchQuery)
      filtered = allMovies.filter((m) =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedGenre && selectedGenre._id)
      filtered = allMovies.filter((m) => m.genre._id === selectedGenre._id);

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  };

  render() {
    // const { length: count } = this.state.movies;
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;
    const { user } = this.props;

    // if (count === 0) return <p>There are no movies in the database</p>;

    const { totalCount, data: movies } = this.getPagedata();

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
            <div className="mb-3">
              {user && (
                <Link
                  to="/movies/new"
                  className="btn btn-primary"
                  style={{ marginBottom: 20 }}
                >
                  New Movie
                </Link>
              )}
            </div>
            <div className="mb-3">
              Showing &nbsp;
              <span className="badge bg-primary text-white">{totalCount} </span>
              &nbsp;movies in the database
            </div>
            <div className="mb-3">
              <SearchBox value={searchQuery} onChange={this.handleSearch} />
            </div>
            <MoviesTable
              movies={movies}
              sortColumn={sortColumn}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
            />
            <Pagination
              onPageChange={this.handlePageChange}
              itemsCount={totalCount}
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
