import React from "react";
import "./film-title.css";

const FilmTitle = ({ filmInfo }) => {
  const { Genre, Poster, Year, Type, Title } = filmInfo;
  return (
    <div className="col-md text-center">
      <img src={Poster} alt="Poster" className="poster-card"></img>
      <div className="text-center">{Title}</div>
      <div>{Genre}</div>
      <div>{Type}</div>
      <div>{Year}</div>
    </div>
  );
};

export default FilmTitle;
