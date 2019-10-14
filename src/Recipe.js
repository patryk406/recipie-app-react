import React from 'react';
import style from './recipe.module.css';

//wyslanie danych, ktore zostana nadpisane poprzez jsona z data na stronie.

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <img className={style.image} src={image} alt='' />
      <h1>{title}</h1>
      <p>{calories} KCAL</p>

      <ol>
        {ingredients.map(ingredients => (
          <li>{ingredients.text}</li>
        ))}
      </ol>
    </div>
  );
};

export default Recipe;
