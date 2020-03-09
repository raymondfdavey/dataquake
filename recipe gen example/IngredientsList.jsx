import React from "react";

function IngredientsList(props) {
  return props.ingredients.map(ingredient => {
    return (
      <button
        className={
          props.chosenIngredients.includes(ingredient) ? "chosen" : null
        }
        key={ingredient}
        value={ingredient}
        onClick={() => props.addToList(ingredient)}
      >
        {ingredient}
      </button>
    );
  });
}

export default IngredientsList;
