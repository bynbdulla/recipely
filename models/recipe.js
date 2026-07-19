const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    recipeName:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        enum: ['breakfast', 'lunch', 'dinner','dessert', 'snack', 'soup', 'salad'],
    }, 
    cuisine:{
        type: String,
    },
    cookTime:{
        type: Number,
    },
    ingredients:{
        type: [String],
        required: true,
    },
    instructions:{
        type: String,
        required: true,
    },
    serving:{
        type: Number,
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }

})

const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = Recipe