const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const PostSchema = new Schema({
  title: String,
  description: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Posts = mongoose.model('Post', PostSchema);

module.exports = Posts;