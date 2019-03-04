import React from "react";

function Author(props) {
  const { author } = props;
  return (
    <div>
      <h4>- {author}</h4>
    </div>
  );
}

export default Author;
