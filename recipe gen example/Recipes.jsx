import React from "react";

function Recipes(props) {
  if (props.matchingRecipes.length === 0) {
    return <p>No Matching Recipes Found</p>;
  } else {
    return props.matchingRecipes.map(recipe => {
      return (
        <section key={recipe.name}>
          {recipe.name}
          <a href={recipe.website}>
            <img src={recipe.photo} alt={recipe.name} />
          </a>
        </section>
      );
    });
  }
}

// thi.matchingRecipes.length
//   ? this.state.matchingRecipes
//   : "No Recipes Matching";
// }

export default Recipes;
