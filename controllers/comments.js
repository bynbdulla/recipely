const Recipe = require("../models/recipe.js");

const create = async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);
  const commentData = {
    msg: req.body.msg,
    ownerId: req.session.user._id,
  };
  console.log(recipe);

  recipe.comments.push(commentData);
  await recipe.save();
  res.redirect(`/recipes/${req.params.id}`);
};

module.exports = {
  create,
};
