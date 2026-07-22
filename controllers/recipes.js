const Recipe = require("../models/recipe.js");

const showNewForm = (req, res) => {
  res.render("recipes/new.ejs");
};

const create = async (req, res) => {
  const recipeData = {};

  recipeData.recipeName = req.body.recipeName;
  recipeData.category = req.body.category;
  recipeData.cuisine = req.body.cuisine;
  recipeData.cookTime = req.body.cookTime;
  recipeData.ingredients = req.body.ingredients;
  recipeData.instructions = req.body.instructions;
  recipeData.serving = req.body.serving;
  recipeData.owner = req.session.user._id;
  let createdRecipe = await Recipe.create(recipeData);
  res.redirect("/recipes");
};

const index = async (req, res) => {
  const allRecipes = await Recipe.find().populate("owner");
  res.render("recipes/index.ejs", { allRecipes });
};

const show = async (req, res) => {
  console.log(req.session.user)
  const recipe = await Recipe.findById(req.params.recipeId)
    .populate("owner")
    .populate("comments.ownerId");
  const allingredients = recipe.ingredients[0].split(",");
  const allinstructions = recipe.instructions[0].split(".");

  res.render("recipes/show.ejs", { recipe, allingredients, allinstructions });
};

const edit = async (req, res) => {
  const recipe = await Recipe.findById(req.params.recipeId);
  res.render("recipes/edit.ejs", { recipe });
};
const update = async (req, res) => {
  const recipeData = {};
  recipeData.recipeName = req.body.recipeName;
  recipeData.category = req.body.category;
  recipeData.serving = req.body.serving;
  recipeData.cookTime = req.body.cookTime;
  recipeData.ingredients = req.body.ingredients;
  recipeData.instructions = req.body.instructions;

  const recipe = await Recipe.findByIdAndUpdate(
    req.params.recipeId,
    recipeData,
  );
  await recipe.save();

  // await Recipe.findByIdAndUpdate(req.params.recipeId , recipeData , {new: true})
  res.redirect(`/recipes/${req.params.recipeId}`);
};

const deleteRecipe = async (req, res) => {
  const recipe = await Recipe.findById(req.params.recipeId);
  await Recipe.findByIdAndDelete(req.params.recipeId);
  res.redirect("/recipes");
};

const showMyRecipes = async (req, res) => {
  const recipes = await Recipe.find({ owner: req.session.user._id });


  res.render("dashboard.ejs", {
    user: req.session.user,
    recipes,
  });
};

module.exports = {
  showNewForm,
  create,
  index,
  show,
  edit,
  update,
  deleteRecipe,
  showMyRecipes,
};
