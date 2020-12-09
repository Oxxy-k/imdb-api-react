import "./App.css";
import React, { useState, useEffect } from "react";
import FilmTitle from "./components/film-title";
import SearchBar from "./components/search-bar";
import { addRandomGenre } from "./services/add-random-genre";
import { getUniqueGenre } from "./services/get-unique-genre";
import BtnShowMore from "./components/btn-show-more";
import GenreBar from "./components/genre-bar";

function App() {
  const [filterGenre, setFilterGenre] = useState([]);
  const [value, setValue] = useState([]);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`http://www.omdbapi.com/?s=${value}&apikey=31a916fa&page=${page}`)
      .then((response) => response.json())
      .then((response) => {
        const addGenreResponse = response.Search.map((data) => {
          return { ...data, Genre: addRandomGenre(), Choose: true };
        });
        setData([...data, ...addGenreResponse]);
      })
      .catch((err) => console.log(err));
  }, [value, page]);

  const onChangeFilterGenre = (changeGenre) => {
    if (changeGenre.filter) {
      setFilterGenre([...filterGenre, changeGenre]);
    }
    if (!changeGenre.filter) {
      const indexGenre = filterGenre.findIndex(
        ({ Genre }) => Genre === changeGenre.Genre
      );
      if (indexGenre >= 0) {
        const filter = [...filterGenre];
        filter.splice(indexGenre, 1);
        setFilterGenre(filter);
      }
    }
  };
  console.log(filterGenre);

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
          : data.map((filmInfo) =>
              filterGenre.find(
                ({ Genre }) => Genre === filmInfo.Genre
              ) ? null : (
                <FilmTitle filmInfo={filmInfo} />
              )
            )}
        {!data.length ? null : <BtnShowMore onCountPage={setPage} />}
      </div>
    </div>
  );
}

export default App;
