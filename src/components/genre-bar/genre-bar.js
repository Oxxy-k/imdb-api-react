import "./genre-bar.css";
import React, { useState } from "react";

const GenreBar = ({ Genre, onChangeFilterGenre }) => {
  const [chooseGenre, setChooseGenre] = useState({
    Genre: Genre,
    filter: true,
  });
  return (
    <label className="form-check" key={Genre}>
      <input
        className="form-check-input"
        type="checkbox"
        id="materialChecked2"
        checked={chooseGenre.filter}
        onClick={() => {
          setChooseGenre({ ...chooseGenre, filter: !chooseGenre.filter });
          onChangeFilterGenre(chooseGenre);
        }}
      />
      {Genre}
    </label>
  );
};

export default GenreBar;
