import mongoose from 'mongoose';

//Create the schema
const postSchema = mongoose.Schema({
  title: {
    type: String,
    unique: true,
  },
  content: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    required: false,
  },
});

//Create the model
const Post = mongoose.model('Post', postSchema);

export default Post;
