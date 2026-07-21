const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  msg: {
    type: string,
  },
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
}, {timestamp: true});

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;
