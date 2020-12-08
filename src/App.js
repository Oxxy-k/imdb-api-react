import "./App.css";
import React, { useState, useEffect } from "react";
import FilmTitle from "../src/components/film-title";
import SearchBar from "../src/components/search-bar";
import { addRandomGenre } from "../src/services/add-random-genre";
import { getUniqueGenre } from "../src/services/get-unique-genre";

function App() {
  const [value, setValue] = useState("");
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  console.log("🚀 ~ file: App.js ~ line 14 ~ App ~ data", data);
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

  let filmGridTitle;

  let uniqueGenre = null;
  let checkBoxGenre = null;
  // if (state.data) {
  //   uniqueGenre = getUniqueGenre(state.data);

  //   checkBoxGenre = uniqueGenre.map((Genre) => (
  //     <label className="form-check-label" key={Genre}>
  //       <input className="form-check-input" type="checkbox" cheked="true" />
  //       {Genre}
  //     </label>
  //   ));
  // }

  // // useEffect(() => {
  // //   const timer = setInterval(() => {
  // //     console.log(state.data);
  // //     console.log(uniqueGenre);
  // //   }, 2000);
  // //   return () => clearInterval(timer);
  // // }, [state]);

  // const onChange = (event) => {
  //   setState({ value: event.target.value });
  // };
  return (
    <div>
      <div className="container-fluid">
        <SearchBar onSubmit={setValue} />
        <div className="form-check">{checkBoxGenre}</div>
      </div>
      <div className="row">
        {!data.length
          ? null
          : data.map((filmInfo) => <FilmTitle filmInfo={filmInfo} />)}
      </div>
    </div>
  );
}

export default App;
