const mongoose = require("mongoose");
const commentSchema = new mongoose.Schema(
  {
    msg: {
      type: String,
    },
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamp: true },
);

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

    cookTime: {
      type: Number,
    },
    ingredients: {
      type: [String],
      required: true,
    },
    instructions: {
      type: [String],
      required: true,
    },
    serving: {
      type: Number,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    comments: [commentSchema],
  },
  { timestamps: true },
);

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
