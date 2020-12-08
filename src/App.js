import "./App.css";
import React, { useState, useEffect } from "react";
import FilmTitle from "../src/components/film-title";
import SearchBar from "../src/components/search-bar";
import { addRandomGenre } from "../src/services/add-random-genre";
import { getUniqueGenre } from "../src/services/get-unique-genre";

const initialState = { value: "", data: null };

function App() {
  const [state, setState] = useState(initialState);
  const onSubmit = (event) => {
    event.preventDefault();
    fetch(`http://www.omdbapi.com/?s=${state.value}&apikey=31a916fa`)
      .then((response) => response.json())
      .then((response) =>
        setState({
          value: "",
          data: response.Search.map((data) => {
            return { ...data, Genre: addRandomGenre() };
          }),
        })
      )
      .catch((err) => console.log(err));
  };

  let filmGridTitle;

  let uniqueGenre = null;
  let checkBoxGenre = null;
  if (state.data) {
    uniqueGenre = getUniqueGenre(state.data);

    checkBoxGenre = uniqueGenre.map((Genre) => (
      <label className="form-check-label" key={Genre}>
        <input className="form-check-input" type="checkbox" cheked="true" />
        {Genre}
      </label>
    ));
  }

  useEffect(() => {
    const timer = setInterval(() => {
      console.log(state.data);
      console.log(uniqueGenre);
    }, 2000);
    return () => clearInterval(timer);
  }, [state]);

  if (state.data) {
    filmGridTitle = state.data.map(
      ({ Title, imdbID, Poster, Year, Type, Genre }) => (
        <FilmTitle
          key={imdbID}
          title={Title}
          imgSource={Poster}
          year={Year}
          type={Type}
          genre={Genre}
        />
      )
    );
  }

  const onChange = (event) => {
    setState({ value: event.target.value });
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          Введите название фильма
          <input type="text" value={state.value} onChange={onChange} />
        </label>
        <input className="btn btn-primary" type="submit" value="Submit" />
      </form>
      <div className="form-check">{checkBoxGenre}</div>
      <div className="row">{filmGridTitle}</div>
    </div>
  );
}

export default App;
