import "./btn-show-more.css";
import React, { useState } from "react";

const BtnShowMore = ({ onCountPage }) => {
  const [count, setCount] = useState(2);
  return (
    <btn
      onClick={() => {
        setCount(count + 1);
        onCountPage(count);
      }}
      className="btn btn-primary btn-lg btn-block"
    >
      Show more
    </btn>
  );
};

export default BtnShowMore;
