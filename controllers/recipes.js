const Recipes = require('../models/recipe.js')

const showNewForm = (req, res) => {
    res.render('recipes/new.ejs')
}

const index = (req,res)=>{
    
}

module.exports = {
    showNewForm, 
}
