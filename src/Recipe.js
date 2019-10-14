import React from 'react';
import style from './recipe.module.css';

//wyslanie danych, ktore zostana nadpisane poprzez jsona z data na stronie.

const Recipe = ({ title, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>

      <div className='content'>
        <img className={style.image} src={image} alt='' />
        <ol>
          {ingredients.map(ingredients => (
            <li>{ingredients.text}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Recipe;
