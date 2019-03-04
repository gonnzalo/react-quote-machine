import React from "react";
import PropTypes from "prop-types";

import "./Quote.css";

function Quote(props) {
  const { body } = props;
  return (
    <div className="Quote">
      <h1>&quot; {body} &quot;</h1>
    </div>
  );
}

Quote.propTypes = {
  body: PropTypes.string.isRequired
};

export default Quote;
