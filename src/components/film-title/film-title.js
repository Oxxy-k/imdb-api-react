import React from "react";
import "./film-title.css";

const FilmTitle = ({ title, imgSource, year, type, genre }) => {
  return (
    <div className="col-sm-4">
      <img src={imgSource} alt="Poster" className="poster-card"></img>
      <div>Title:{title}</div>
      <div>Genre:{genre}</div>
      <div>Type:{type}</div>
      <div>Year:{year}</div>
    </div>
  );
};

export default FilmTitle;
