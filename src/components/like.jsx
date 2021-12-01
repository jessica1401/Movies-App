import React, { Component } from "react";

class Like extends React.Component {
  render() {
    let classes = "";
    if (this.props.liked === true) {
      classes += "fa fa-heart";
    } else {
      classes = "fa fa-heart-o";
    }
    return (
      <React.Fragment>
        <i
          style={{ cursor: "pointer" }}
          onClick={() => this.props.onLike(this.props.movie)}
          className={classes}
        ></i>
      </React.Fragment>
    );
  }
}

export default Like;
