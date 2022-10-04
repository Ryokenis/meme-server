import Post from '../models/posts.js';

export const getPosts = async (req, res) => {
  try {
    const post = await Post.find();

    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const newPost = new Post(req.body);

  try {
    await newPost.save();
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  const id = req.body;
  try {
    await Post.findOneAndDelete({ _id: id });
  } catch (error) {
    res.status().json({ message: error.message });
  }
};

export const editPost = async (req, res) => {
  const newPost = req.body;

  try {
    await Post.findOneAndUpdate(
      { _id: newPost._id },
      { content: newPost.content, updatedAt: new Date() }
    );
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
