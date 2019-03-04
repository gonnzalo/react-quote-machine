import React from "react";
import PropTypes from "prop-types";

function Btns(props) {
  const { handleClick, body, author } = props;
  const twitterData = `https://twitter.com/intent/tweet?hashtags=quotes&text=%20${encodeURI(
    body
  )}%20-%20${encodeURI(author)}`;
  return (
    <div>
      <a target="_blank" rel="noopener noreferrer" href={twitterData}>
        twitter
      </a>
      <button type="button" onClick={handleClick}>
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
