const { Schema, model } = require("mongoose");
const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: [false, "Username is required"],
      trim: true,
    },
    category: {
      type: String,
      required: true,
    },
    postPicture: {
      type: String,
    },
    caption: {
      type: String,
      maxlength: 1000,
      required: true,
    },
    username: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    comments: [
      {
        type: String,
        maxlength: 600,
        owner: { type: Schema.Types.ObjectId, ref: "User" },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Post = model("Post", PostSchema);

module.exports = Post;