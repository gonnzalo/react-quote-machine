import React from "react";
import PropTypes from "prop-types";

import "./Author.css";

function Author(props) {
  const { author } = props;
  return (
    <div className="Author">
      <h2>- {author}</h2>
    </div>
  );
}

Author.propTypes = {
  author: PropTypes.string.isRequired
};

export default Author;
