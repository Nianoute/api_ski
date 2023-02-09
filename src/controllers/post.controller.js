const Post = require("../models/post.model");

const postController = {
    getAll: async (req, res) => {
      try {
        const posts = await Post.find();
        res.status(201).send(posts)
      } catch (error) {
        res.status(400).send(error);
      }
    },
    create: async (req, res) => {
      try {
        const post = await Post.create(req.body);
        res.status(201).send(post);
      } catch (error) {
        res.status(400).send(error);
      }
    },
  };
  
  module.exports = postController;