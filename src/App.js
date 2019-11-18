import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const APP_ID = "d1f8428e";
  const APP_KEY = "ca7e25fde70993eb934d61e684879b13";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
          placeholder="Write what dish You wanna eat"
        />
        <button className="btn btn-outline-dark" type="submit">
          Search
        </button>
      </form>

      <div className="recipes">
        {recipes.map(recipe => (
          //Przypisanie potrzebnych danych z jsona z data.
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            calories={recipe.recipe.calories}
            time={recipe.recipe.totalTime}
            length={recipe.recipe.ingredients.length}
            source={recipe.recipe.source}
            link={recipe.recipe.url}
          />
        ))}
      </div>
      <footer className="text-center">
        <h6>
          If You want more detailed recipies, please write ingredients witch You
          wanna use to cook.
        </h6>
        <h6>
          For more results go to{" "}
          <a href="https://edamam.com/" target="_blank">
            EDAMAM
          </a>{" "}
          or any of sites from your search.
        </h6>
        <p>
          App powered by
          <a href="https://pl.reactjs.org/" target="_blank">
            <img
              src="https://img.icons8.com/nolan/64/000000/react-native.png"
              alt="#"
            />
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;
