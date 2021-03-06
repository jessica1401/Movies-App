import React from "react";
import Like from "./like";

const MoviesTable = (props) => {

    const { movies, onDelete, selectedGenre, onSort } = props;
  return (
    <React.Fragment>
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => onSort('title')}>Title</th>
            <th onClick={() => onSort('genre.name')}>Genere</th>
            <th onClick={() => onSort('numberInStock')}>Stock</th>
            <th onClick={() => onSort('dailyRentalRate')}>Rate</th>
            <th></th>
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
                  onLike={props.onLike}
                  movie={movie}
                  liked={movie.liked}
                  selectedGenre={selectedGenre}
                ></Like>
              </td>
              <td>
                <button
                  onClick={() => onDelete(movie)}
                  className="btn btn-danger btn-sm "
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default MoviesTable;
