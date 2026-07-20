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
  const allRecipes = await Recipe.find().populate("owner");
  res.render("recipes/index.ejs", { allRecipes });
};

const show = async (req, res) => {
  const recipe = await Recipe.findById(req.params.recipeId).populate("owner");
  const allingredients = recipe.ingredients[0].split(",");

  console.log(allingredients, "====================");
  res.render("recipes/show.ejs", { recipe, allingredients });
};

const edit = async (req, res) => {
  const recipe = await Recipe.findById(req.params.recipeId);
  res.render("recipes/edit.ejs", { recipe });
};

const update = async (req, res) => {
  console.log(req.params);
  const recipe = await Recipe.findById(req.params.recipeId);

  await Recipe.findByIdAndUpdate(
    req.params.id,
    (recipeData = {
      recipeName: req.body.recipeName,
      category: req.body.category,
      serving: req.body.serving,
      cookTime: req.body.cookTime, 
      ingredients: req.body.ingredients,
      instructions: req.body.instructions,
    }),
  );
  
  await recipe.save();
  res.send('hello!')
};

module.exports = {
  showNewForm,
  create,
  index,
  show,
  edit,
  update, 
};
