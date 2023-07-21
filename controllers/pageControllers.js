exports.getAboutPage = (req, res) => {
  res.render('about');
};

exports.getPostPage = (req, res) => {
  res.render('post');
};

exports.getAddPage = (req, res) => {
  res.render('add_post');
};
