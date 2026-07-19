const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    recipeName: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: [
        "breakfast",
        "lunch",
        "dinner",
        "dessert",
        "snack",
        "soup",
        "salad",
        "appetizer",
      ],
    },
    cuisine: {
      type: String,
    },
    cookTime: {
      type: Number,
    },
    ingredients: {
      type: [String],
      required: true,
    },
    instructions: {
      type: String,
      required: true,
    },
    serving: {
      type: Number,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    // image:{
    //     url: {
    //         type: String,
    //         required: true,
    //     },
    //     publicId: {
    //         type: String,
    //         required: true,
    //     },
    // }
  },
  { timestamps: true },
);

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
