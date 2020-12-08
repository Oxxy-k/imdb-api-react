import "./search-bar.css";
import React from "react";

function SearchBar({handleSubmit, onChange, value}) {
  return (
    <form onSubmit={() => handleSubmit}>
      <label>
        Введите название фильма
        <input type="text" value={value} onChange={() => onChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default SearchBar;
