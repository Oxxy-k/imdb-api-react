import "./App.css";
import React, { useState, useEffect } from "react";
import FilmTitle from "./components/film-title";
import SearchBar from "./components/search-bar";
import { addRandomGenre } from "./services/add-random-genre";
import { getUniqueGenre } from "./services/get-unique-genre";
import BtnShowMore from "./components/btn-show-more";
import GenreBar from "./components/genre-bar";
import Spinner from "./components/spinner";
import LookingForSearch from "./components/looking-for-search";

function App() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [filterGenre, setFilterGenre] = useState([]);
  const [value, setValue] = useState(``);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  useEffect(() => {
    if (value !== "") {
      setLoading(true);
      fetch(`http://www.omdbapi.com/?s=${value}&apikey=31a916fa&page=${page}`)
        .then((response) => response.json())
        .then((jsonResponse) => {
          console.log(jsonResponse);
          if (jsonResponse.Response === "True") {
            const addGenreResponse = jsonResponse.Search.map((data) => {
              return { ...data, Genre: addRandomGenre(), Choose: true };
            });
            setData([...data, ...addGenreResponse]);
            setLoading(false);
          } else {
            setErrorMessage(jsonResponse.Error);
            setLoading(false);
            setData([]);
          }
        });
    }
  }, [value, page]);

  const onSubmit = (valueSearch) => {
    setData([]);
    setPage(1);
    setValue(valueSearch);
  };

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
 
  return (
    <div className="App">
      <div className="container-fluid">
        <SearchBar onSubmit={onSubmit} />
        <div className="row genre-bar">
          {loading ? (
            <Spinner />
          ) : !data.length ? null : (
            getUniqueGenre(data).map((Genre) => (
              <GenreBar
                key={Genre}
                onChangeFilterGenre={onChangeFilterGenre}
                Genre={Genre}
                filter={
                  !filterGenre.find(
                    (filterGenreObj) => filterGenreObj.Genre === Genre
                  )
                }
              />
            ))
          )}
        </div>
      </div>
      <div className="row film-container">
        {!data.length && !loading ? (
          <LookingForSearch errorMessage={errorMessage} />
        ) : (
          data.map((filmInfo) =>
            filterGenre.find(({ Genre }) => Genre === filmInfo.Genre) ? null : (
              <FilmTitle key={filmInfo.imdbID} filmInfo={filmInfo} />
            )
          )
        )}
        {!data.length ? null : <BtnShowMore onCountPage={setPage} />}
      </div>
    </div>
  );
}

export default App;
