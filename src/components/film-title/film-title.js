import React from "react";
import "./film-title.css";

const FilmTitle = ({ filmInfo }) => {
  const { Genre, Poster, Year, Type, Title } = filmInfo;
  return (
    <div className="col-sm-4 text-center">
      <img src={Poster} alt="Poster" className="poster-card"></img>
      <div className="film-info">
        <div className="film-title">{Title}</div>
        <div>{Genre}</div>
        <div>{Type}</div>
        <div>{Year}</div>
      </div>
    </div>
  );
};

export default FilmTitle;
