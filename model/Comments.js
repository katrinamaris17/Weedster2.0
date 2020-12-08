const { Schema, model } = require("mongoose");
const CommentsSchema = new Schema(
  {
    comments: 
      {
        owner: {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
        message: {
          type: String,
          maxlength: 1000,
        },
      },
  },
  {
    timestamps: true,
  }
);

const Comments = model('Comments', CommentsSchema);

module.exports = Comments;