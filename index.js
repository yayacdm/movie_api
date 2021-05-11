const express = require('express'),
	morgan = require('morgan');

const app = express();

const mongoose = require('mongoose');
const Models = require('./models.js');

const Movies = Models.Movie;
const Users = Models.User;

mongoose.connect('mongodb://localhost:27017/myFlixDB', { useNewUrlParser: true, useUnifiedTopology: true });

// GET requests
app.get('/', (req, res) => {
  res.send('Live-action movies based on Video Games and produced in the US from the last 10 years.');
});

app.use(morgan('common'));

app.use(express.static('public'));

app.get('/movies', (req, res) => {
  res.json(movies);
});

app.get('/movies/[ID]', (req, res) => {
  res.json();
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Uh-oh! Something went wrong!');
});

// listen for requests
app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});
