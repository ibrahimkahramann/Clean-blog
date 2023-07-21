const Posts = require('../models/Posts');

exports.getAllPosts = async (req, res) => {
  const allPosts = await Posts.find({}).sort("-dateCreated");
  /* rest render kisminda ilk parametre hangi sayfayi gonderecegi, ikinci paramtre obje.*/
  res.render('index', {
    allPosts,
  });
};

exports.getPost = async (req, res) => {
  const post = await Posts.findById(req.params.id);
  res.render('posts', {
    post,
  });
};

exports.createPost = async (req, res) => {
  await Posts.create(req.body);
  res.redirect('/');
};

exports.getEditPage = async (req, res) => {
  const post = await Posts.findOne({ _id: req.params.id });
  res.render('edit', {
    post,
  });
};

exports.updatePost = async (req, res) => {
  const post = await Posts.findById({ _id: req.params.id });
  post.title = req.body.title;
  post.description = req.body.description;
  post.save();

  res.redirect(`/posts/${req.params.id}`);
};

exports.deletePost = async (req, res) => {
  await Posts.findByIdAndRemove({ _id: req.params.id });
  res.redirect('/');
};
