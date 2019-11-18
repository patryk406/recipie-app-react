import React from "react";
import "./recipie.css";

//wyslanie danych, ktore zostana nadpisane poprzez jsona z data na stronie.

const Recipe = ({
  title,
  image,
  key,
  calories,
  length,
  time,
  link,
  source
}) => {
  return (
    <div className="card-deck">
      <div className="card">
        <h3 className="card-title text-center">{title}</h3>
        <h6 className="card-footer">
          <p className="upper">
            Ingredients:<span className="length"> {length}</span>
          </p>
          <p className="upper">
            Cook time: <span className="time">{time} min</span>
          </p>
        </h6>

        <img className="card-img" src={image} alt="food" />
        <div className="card-text">
          <h5 className="text-center py-2">{cal()} Calories</h5>
        </div>
        <div className="card-footer">
          <p>
            Have whole recipie in{" "}
            <a href={link} target="_blank">
              {source}
            </a>
          </p>
        </div>
      </div>
    </div>
  );

  function cal() {
    if (calories) {
      return Math.round(calories / 10);
    }
  }
};

export default Recipe;
