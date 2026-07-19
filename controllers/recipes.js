const Recipes = require('../models/recipe.js')

const showNewForm = (req, res) => {
    res.render('recipes/new.ejs')
}

const create = async (req,res)=>{
    const uploadImage = await uploadImage(req.file.buffer)
    const recipeData = {}

    recipeData.recipeName = req.body.recipeName
    recipeData.category = req.body.category
    recipeData.cuisine = req.body.cuisine
    recipeData.cookTime = req.body.cookTime
    recipeData.ingredients = req.body.ingredients
    recipData.instructions = req.body.instructions
    recipeData.serving = req.body.serving
    recipeData.image = {
        url: uploadedImage.secure_url,
    publicId: uploadedImage.public_id,
}
let createdRecipe = await Recipe.create(recipeData);
  res.send(createdRecipe);
}

module.exports = {
    showNewForm, 
}
