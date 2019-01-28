import React from "react";

const DeleteBtn = (props) => {

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually

  return (
    <span className="delete-btn" {...props} role="button" tabIndex="0">
      ✗
    </span>
  );
}


export default DeleteBtn;