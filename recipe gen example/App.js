/*
## Planning
Copy this list into your project
Outline functionality of your app
Draw main views of app
Break out components from your views
Name your components
Draw component hierarchy
Plan routing
Label where you will require functions that change state
Label where you will require data
Determine from this where you will require state & hold functions

## Setup
Create your app directory (e.g. with create-react-app)
Run your app
Git init (unless cloned!), gitignore config, make an initial commit
Ensure you have React DevTools running

## Static
Make blank components (functional or class?) as per your plan
Create reuasable components e.g. buttons, inputs
Export and import components as per your hierarchy
Check everything is hooked up
    - you may want to add positional styling here to match your planned layout. DO NOT do any cosmetic styling yet!
Write static render methods with mock data
Add expected propTypes (adapt this as necessary)

## Dynamic (order may be a bit looser here!)
Create .api file
Construct componentDidMount functions
Create functions that setState
Add expected props to component instantiation
Add mapping / looping for creating multiple components
Deal with component lifecycle issues, e.g. making new api calls on componentDidUpdate
Add event handlers

## Style
Add classNames
Create and .css files
Write application CSS - sitewide styling choices like fonts, colour pallettes
Write component specific CSS
*/
import React from "react";
import "./App.css";
import IngredientsList from "./IngredientsList";
import Recipes from "./Recipes";

class App extends React.Component {
  state = {
    recipes: [
      {
        name: "Vegan Ramen",
        ingredients: [
          "Garlic",
          "Miso Paste",
          "Mushrooms",
          "Stock",
          "Tofu",
          "Tahini"
        ],
        website: "https://www.bbcgoodfood.com/recipes/vegan-ramen",
        photo:
          "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2018/11/vegan-ramen.jpg?itok=-F3XECPG"
      },
      {
        name: "Clam and Kale Linguine",
        ingredients: ["Clams", "Pasta", "Nduja", "Garlic", "Kale"],
        website: "https://www.bbcgoodfood.com/recipes/spicy-clam-kale-linguine",
        photo:
          "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/12/linguine.jpg?itok=w06UFzwD"
      },
      {
        name: "Salmon and Sweet Potato Fish-Cakes",
        ingredients: ["Sweet Potato", "Salmon Fillets", "Tahini"],
        website:
          "https://www.bbcgoodfood.com/recipes/salmon-sweet-potato-coriander-fishcakes-tahini-dressing",
        photo:
          "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2018/10/salmon-sweet-potato-coriander-fishcakes-with-tahini-dressing.jpg?itok=cMLFY-GW"
      },
      {
        name: "Mango Chutney Baked Feta with Lentils",
        ingredients: ["Feta", "Mango Chutney", "Tomatoes"],
        website:
          "https://www.bbcgoodfood.com/recipes/mango-chutney-baked-feta-lentils",
        photo:
          "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2018/12/mango-chutney-baked-feta-with-lentils.jpg?itok=ICUdM8bq"
      },
      {
        name: "Crab and Asparagus Papardelle",
        ingredients: ["Pasta", "Crab", "Asparagus"],
        website:
          "https://www.bbcgoodfood.com/recipes/crab-asparagus-pappardelle",
        photo:
          "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2018/04/crab-asparagus-pappardelle.jpg?itok=8e_7_oJh"
      }
    ],
    ingredients: [
      "Miso Paste",
      "Mushrooms",
      "Stock",
      "Tofu",
      "Clams",
      "Nduja",
      "Garlic",
      "Kale",
      "Sweet Potato",
      "Salmon Fillets",
      "Tahini",
      "Feta",
      "Mango Chutney",
      "Tomatoes",
      "Crab",
      "Asparagus"
    ],
    matchingRecipes: [],
    chosenIngredients: []
  };

  render() {
    return (
      <main>
        <h1>Recipes</h1>
        <h2>Choose Your Ingredients</h2>
        <IngredientsList
          chosenIngredients={this.state.chosenIngredients}
          ingredients={this.state.ingredients}
          addToList={this.addToList}
          matchingRecipes={this.matchingRecipes}
        />
        <button onClick={() => this.resetIngredients()}>RESET</button>
        <p>
          Chosen Ingredients:{" "}
          {this.state.chosenIngredients.length
            ? `${[this.state.chosenIngredients]}, `
            : "none selected"}{" "}
        </p>
        <h3>
          Recipe for you:
          <Recipes matchingRecipes={this.state.matchingRecipes} />
        </h3>
      </main>
    );
  }
  addToList = ingredient => {
    this.setState(currentState => {
      return {
        chosenIngredients: [...currentState.chosenIngredients, ingredient]
      };
    });
    this.matchingRecipes();
  };
  matchingRecipes = () => {
    this.setState(currentState => {
      const newRecipes = [...currentState.recipes];
      const filtered = newRecipes.filter(recipe => {
        let answerCount = 0;
        currentState.chosenIngredients.forEach(ingredient => {
          if (recipe.ingredients.includes(ingredient)) {
            answerCount++;
          }
        });
        return answerCount === currentState.chosenIngredients.length;
      });
      return { matchingRecipes: filtered };
    });
  };

  // currentState.chosenIngredients}));

  //basically just gets the current ingredient list and check if any recipes contain all of those ingredients
  // so each time an ingredient added need to map/reduce/for each through all the recipes, and within each recipe check if the recipe contains all of the ingredients, maybe in fact have a matching recipe array, and then any newly added ingredient simply gets checked if its on that.

  resetIngredients = () => {
    this.setState({ chosenIngredients: [] });
    this.setState({ matchingRecipes: [] });
  };
}

export default App;

/*
this.state.chosenIngredients.length
            ? this.state.recipes.reduce(
                recipe => (acc, val) => {
                  for (
                    let i = 0;
                    i < this.state.chosenIngredients.length;
                    i++
                  ) {
                    if (
                      recipe.ingredients.includes(
                        this.state.chosenIngredients[i]
                      )
                    ) {
                      acc.push(recipe.name);
                    }
                  }
                  return acc;
                },
                []
              )
*/
