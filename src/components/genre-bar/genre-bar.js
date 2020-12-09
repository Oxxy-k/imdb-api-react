import "./genre-bar.css";
import React, { useState } from "react";

const GenreBar = ({ Genre, onChangeFilterGenre }) => {
  const [chooseGenre, setChooseGenre] = useState({ Genre, filter: true });
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
