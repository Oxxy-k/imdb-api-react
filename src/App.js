import "./App.css";
import React, { useState, useEffect } from "react";
import FilmTitle from "./components/film-title";
import SearchBar from "./components/search-bar";
import { addRandomGenre } from "./services/add-random-genre";
import { getUniqueGenre } from "./services/get-unique-genre";
import BtnShowMore from "./components/btn-show-more";
import GenreBar from "./components/genre-bar";

function App() {
  const [value, setValue] = useState([]);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`http://www.omdbapi.com/?s=${value}&apikey=31a916fa&page=${page}`)
      .then((response) => response.json())
      .then((response) => {
        const addGenreResponse = response.Search.map((data) => {
          return { ...data, Genre: addRandomGenre() };
        });
        setData([...data, ...addGenreResponse]);
      })
      .catch((err) => console.log(err));
  }, [value, page]);

  const [booleanGenre, setBooleanGenre] = useState(
    getUniqueGenre(data).map((Genre) => {
      return { Genre, choose: true };
    })
  );

  const onChangeFilterGenre = (changeGenre) => {
    setBooleanGenre({
      ...booleanGenre,
      Genre: changeGenre.filter,
    });
    console.log(
      "🚀 ~ file: App.js ~ line 37 ~ onChangeFilterGenre ~ booleanGenre",
      booleanGenre
    );
  };
  return (
  <div className="App">
      <div className="container-fluid">
        <SearchBar onSubmit={setValue} />
        <div className="row genre-bar">
          {!data.length
            ? null
            : getUniqueGenre(data).map((Genre) => (
                <GenreBar
                  onChangeFilterGenre={onChangeFilterGenre}
                  Genre={Genre}
                />
              ))}
        </div>
      </div>
      <div className="row">
        {!data.length
          ? null
          : data.map((filmInfo) => <FilmTitle filmInfo={filmInfo} />)}
        {!data.length ? null : <BtnShowMore onCountPage={setPage} />}
      </div>
    </div>
  );
}

export default App;
