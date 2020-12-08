const { Schema, model } = require("mongoose");
const PostSchema = new Schema(
  {
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
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    comments: [
      {
        owner: {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
        message: {
          type: String,
          maxlength: 1000,
        },
        created_at: { 
          type: Date, 
          required: true, 
          default: Date.now 
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Post = model("Post", PostSchema);

module.exports = Post;
