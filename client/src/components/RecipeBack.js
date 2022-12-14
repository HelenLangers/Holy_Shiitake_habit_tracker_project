import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './RecipeCard.css';

function RecipeBack({ recipe, recipeToAddToForm }) {

  const ingredientsList = recipe.recipe.ingredientLines.map((ingredient, index) => {
    return (
      <li className="ingredients-list">{ingredient}</li>)
    })

  return (
    <>
      <div className="ingredients">
      <h3 className="ingredients-header">Ingredients:</h3>
      {ingredientsList}
      </div>
      <div className="buttons-container">
        <div className="button-box">
          <a href={recipe.recipe.url} target="_blank">See Recipe</a>
        </div>
        <div className="add-button-div">
        <Link to="/form" state={recipeToAddToForm} className="add-entry-button">
            Add Entry</Link>
        </div>
      </div>
    </>
  )
}

export default RecipeBack