const express = require('express'),
	morgan = require('morgan');

const app = express();

let movies = [
  {
    title: 'Resident Evil: Retribution',
    publisher: 'Capcom',
		year: '2012'
  },
  {
    title: 'Silent Hill: Revelation',
    publisher: 'Konami',
		year: '2012'
  },
  {
    title: 'Need For Speed',
    publisher: 'Electronic Arts',
		year: '2014'
  },
	{
    title: 'Hitman: Agent 47',
    publisher: 'Square Enix',
		year: '2015'
  },
  {
    title: 'Warcraft',
    publisher: 'Blizzard Entertainment',
		year: '2016'
  },
  {
    title: 'Assassin\'s Creed',
    publisher: 'Ubisoft',
		year: '2016'
  },
	{
    title: 'Resident Evil: The Final Chapter',
    publisher: 'Capcom',
		year: '2017'
  },
  {
    title: 'Tomb Raider',
    publisher: 'Square Enix',
		year: '2018'
  },
  {
    title: 'Rampage',
    publisher: 'Midway',
		year: '2018'
  },
	{
    title: 'Dead Trigger',
    publisher: 'Madfinger Games',
		year: '2019'
  },
  {
    title: 'Detective Pikachu',
    publisher: 'Nintendo',
		year: '2019'
  },
  {
    title: 'Sonic The Hedgehog',
    publisher: 'Sega',
		year: '2020'
  },
	{
		title: 'Monster Hunter',
		publisher: 'Capcom',
		year: '2020'
	},
	{
		title: 'Mortal Kombat',
		publisher: 'WB Games',
		year: '2021'
	}
];

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
  res.send('Successful GET request returning data on a single movie');
});

app.get('/genres', (req, res) => {
  res.send('Successful GET request returning data on genres');
});

app.get('/directors/[ID]', (req, res) => {
  res.send('Successful GET request returning data on a single director');
});

app.get('/movies/[ID]', (req, res) => {
  res.send('Successful GET request returning data on a single movie');
});

app.post('/users', (req, res) => {
  res.send('Successful POST request registering new user');
});

app.put('/users/[ID]', (req, res) => {
  res.send('Successful PUT request updating user info');
});

app.post('/users/favs', (req, res) => {
  res.send('Successful POST request adding movie to favorites list');
});

app.delete('/users/favs', (req, res) => {
  res.send('Successful POST request removing movie from favorites list');
});

app.delete('/users', (req, res) => {
  res.send('Successful DELETE request removing user');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Uh-oh! Something went wrong!');
});

// listen for requests
app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});
