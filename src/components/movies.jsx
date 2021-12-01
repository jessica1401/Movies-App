import React, { Component } from "react";
import { getMovies } from "../utils/fakeMovies.js";
import Pagination from "./pagination.jsx";
import { paginate } from "../utils/paginate.js";
import ListGroup from "./listGroup.jsx";
import { getGenres } from "./../utils/fakeGenere";
import MoviesTable from "./moviesTable.jsx";

class Movies extends React.Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
    currentPage: 1,
    genre: [],
    selectedGenre: "All Genres",
    listGroupCurrentpage: 1,
  };
  componentDidMount() {
    this.setState({ genre: getGenres() });
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    const movies = this.state.movies.map((m) => {
      if (m._id === movie._id) {
        m.liked = !m.liked;
        return m;
      } else {
        return m;
      }
    });
    this.setState({ movies });
  };

  handlePageChange = (currentPage) => {
    this.setState({ currentPage });
  };

  handleGenreChange = (genre) => {
    this.setState({ selectedGenre: genre });
    this.setState({currentPage: 1})
  };

  handleSort = (column) => {
    console.log(column)
  }
  render() {
    if (this.state.movies.length === 0)
      return <h1> There Are no movies in database</h1>;

    let filterd = this.state.movies.filter(
      (movie) => movie.genre.name === this.state.selectedGenre
    );
    if (this.state.selectedGenre === "All Genres") {
      filterd = this.state.movies;
    }
    const movies = paginate(
      filterd,
      this.state.currentPage,
      this.state.pageSize
    );
    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            selectedGenre={this.state.selectedGenre}
            onGenreChange={this.handleGenreChange}
            items={this.state.genre}
          ></ListGroup>
        </div>
        <div className="col">
          <br />
          <br />
          <p>Showing {filterd.length} in database.</p>
          <MoviesTable
            selectedGenre={this.state.selectedGenre}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            movies={movies}
            onSort={this.handleSort}
          ></MoviesTable>
          <Pagination
            pageSize={this.state.pageSize}
            itemsCount={filterd.length}
            onPageChange={this.handlePageChange}
            currentPage={this.state.currentPage}
          ></Pagination>
        </div>
      </div>
    );
  }
}

export default Movies;
