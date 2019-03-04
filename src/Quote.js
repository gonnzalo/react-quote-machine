import React from "react";

function Quote(props) {
  const { body } = props;
  return (
    <div>
      <h1>{body}</h1>
    </div>
  );
}

export default Quote;
