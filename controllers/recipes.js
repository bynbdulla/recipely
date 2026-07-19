const Recipe = require("../models/recipe.js");

const showNewForm = (req, res) => {
  res.render("recipes/new.ejs");
};

const create = async (req, res) => {
  console.log(req.body);
  const recipeData = {};

  recipeData.recipeName = req.body.recipeName;
  recipeData.category = req.body.category;
  recipeData.cuisine = req.body.cuisine;
  recipeData.cookTime = req.body.cookTime;
  recipeData.ingredients = req.body.ingredients;
  recipeData.instructions = req.body.instructions;
  recipeData.serving = req.body.serving;
  let createdRecipe = await Recipe.create(recipeData);
  res.redirect("/recipes");
};

const index = async (req, res) => {
  res.send("It works!");
};

module.exports = {
  showNewForm,
  create,
  index,
};
