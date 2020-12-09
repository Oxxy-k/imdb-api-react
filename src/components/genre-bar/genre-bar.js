import "./genre-bar.css";
import React, { useState } from "react";

const GenreBar = ({ Genre, onChangeFilterGenre, filter }) => {
  const [chooseGenre, setChooseGenre] = useState({ Genre, filter: filter });
  return (
    <div className="col-md">
      <label className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          checked={chooseGenre.filter}
          onChange={() => {
            setChooseGenre({ Genre, filter: !chooseGenre.filter });
            onChangeFilterGenre(chooseGenre);
          }}
        />
        {Genre}
      </label>
    </div>
  );
};

export default GenreBar;
