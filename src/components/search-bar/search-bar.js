import "./search-bar.css";
import React, { useState } from "react";
const SearchBar = ({ onSubmit }) => {
  const [value, setValue] = useState("");
  return (
    <div className="col-7 text-center form">
      <label className="text-center">
        <input
          className="form-control text-center input"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter movie title"
        />
      </label>
      <input
        className="btn btn-primary btn-submit"
        type="submit"
        value="Search"
        onClick={() => {
          setValue("");
          onSubmit(value);
        }}
      />
    </div>
  );
};

export default SearchBar;
