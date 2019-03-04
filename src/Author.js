import React from "react";
import PropTypes from "prop-types";

function Author(props) {
  const { author } = props;
  return (
    <div>
      <h4>- {author}</h4>
    </div>
  );
}

Author.propTypes = {
  author: PropTypes.string.isRequired
};

export default Author;
