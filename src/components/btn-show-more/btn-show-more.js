import "./btn-show-more.css";
import React, { useState } from "react";

const BtnShowMore = ({ onCountPage }) => {
  const [count, setCount] = useState(2);
  return (
    <button
      onClick={() => {
        setCount(() => count + 1);
        onCountPage(count);
      }}
      className="btn btn-primary btn-lg btn-block"
    >
      Show more
    </button>
  );
};

export default BtnShowMore;
