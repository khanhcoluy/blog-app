import { PostModel } from '../models/post.model.js';

export const getPosts = async (req, res) => {
  try {
    const posts = await PostModel.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createPost = async (req, res) => {
  try {
    const newPost = req.body;
    const post = new PostModel(newPost);
    await post.save();

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const updatePost = async (req, res) => {
  try {
    const updatePost = req.body;
    const post = await PostModel.findByIdAndUpdate(
      { _id: req.params.id },
      updatePost,
      { new: true }
    ); //req.params = {id: 'abcxyz'};

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const deletePost = async (req, res) => {
  try {
    await PostModel.findByIdAndRemove(req.params.id);

    res.status(200).json({ message: 'post deleted successfully ' });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const likePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await PostModel.findById(id);

    const updatedPost = await PostModel.findByIdAndUpdate(
      id,
      { likeCount: post.likeCount + 1 },
      { new: true }
    );

    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json({error: err});
  }
};
