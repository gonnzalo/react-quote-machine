import React from "react";

function Btns(props) {
  const { clicks } = props;
  return (
    <div>
      <a href="#">twitter</a>
      <button onClick={clicks}>New Quote</button>
    </div>
  );
}

export default Btns;
