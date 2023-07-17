const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const path = require('path');
const Posts = require('./models/Posts');

const app = express();

//Connect MONGODB

mongoose.connect('mongodb://127.0.0.1:27017/cleanblog-test-db');

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ROUTES
app.get('/', async (req, res) => {
  const allPosts = await Posts.find({});
  res.render('index', {
    allPosts,
  });
});

// rest render kisminda ilk parametre hangi sayfayi gonderecegi, ikinci paramtre obje.

app.get('/posts/:id', async (req, res) => {
  const post = await Posts.findById(req.params.id);
  res.render('post', {
    post
  })
})


app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/post', (req, res) => {
  res.render('post');
});
app.get('/add_post', (req, res) => {
  res.render('add_post');
});

app.post('/posts', async (req, res) => {
  await Posts.create(req.body);
  res.redirect('/');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda baslatildi..`);
});
