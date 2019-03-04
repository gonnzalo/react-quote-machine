import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import "./Btns.css";

function Btns(props) {
  const { handleClick, body, author } = props;
  const twitterData = `https://twitter.com/intent/tweet?hashtags=quotes&text=%20${encodeURI(
    body
  )}%20-%20${encodeURI(author)}`;
  return (
    <div className="Btns">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={twitterData}
        className="twitter"
      >
        <FontAwesomeIcon icon={faTwitter} size="3x" color="#1da1f2" />
      </a>
      <button type="button" onClick={handleClick} className="newQuote">
        New Quote
      </button>
    </div>
  );
}

Btns.propTypes = {
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Btns;
