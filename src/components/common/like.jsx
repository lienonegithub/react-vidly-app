// import React, { Component } from "react";

// // Input: liked: boolean
// // Output: onClick
// class Like extends Component {
//   render() {
//     let classes = "fa fa-heart";
//     if (!this.props.liked) classes += "-o";
//     return (
//       <i
//         onClick={this.props.onClick}
//         style={{ cursor: "pointer" }}
//         className={classes}
//         aria-hidden="true"
//       />
//     );
//   }
// }

import React from "react";

const Like = ({ liked, onClick }) => {
  let classes = "fa fa-heart";
  if (!liked) classes += "-o";
  return (
    <i
      onClick={onClick}
      style={{ cursor: "pointer" }}
      className={classes}
      aria-hidden="true"
    />
  );
};

export default Like;
