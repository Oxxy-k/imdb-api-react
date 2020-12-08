import "./search-bar.css";
import React, { useState } from "react";
const SearchBar = ({ onSubmit }) => {
  const [value, setValue] = useState("");
  return (
    <div>
      <label>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Put your film"
        />
      </label>
      <input
        className="btn btn-primary"
        type="submit"
        value="Submit"
        onClick={() => onSubmit(value)}
      />
    </div>
  );
};

export default SearchBar;
