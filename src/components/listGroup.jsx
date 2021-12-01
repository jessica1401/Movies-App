import React from "react";

const ListGroup = (props) => {
  const { items, onGenreChange, selectedGenre } = props;
  return (
    <React.Fragment>
      <ul className="list-group">
        {items.map((item) => (
          <li
            style={{ cursor: "pointer" }}
            onClick={() => onGenreChange(item)}
            key={item}
            className={
              item === selectedGenre
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default ListGroup;
