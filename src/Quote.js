import React from "react";
import PropTypes from "prop-types";

function Quote(props) {
  const { body } = props;
  return (
    <div>
      <h1>{body}</h1>
    </div>
  );
}

Quote.propTypes = {
  body: PropTypes.string.isRequired
};

export default Quote;
