const express = require('express'),
	morgan = require('morgan');

const app = express();

let movies = [
  {
    title: 'Resident Evil: Retribution',
		year: '2012',
    publisher: 'Capcom',
		director: 'Paul W. S. Anderson'
  },
  {
    title: 'Silent Hill: Revelation',
		year: '2012',
    publisher: 'Konami',
		director: 'M. J. Bassett'
  },
  {
    title: 'Need For Speed',
		year: '2014',
    publisher: 'Electronic Arts',
		director: 'Scott Waugh'
  },
	{
    title: 'Hitman: Agent 47',
		year: '2015',
    publisher: 'Square Enix',
		director: 'Aleksander Bach'
  },
  {
    title: 'Warcraft',
		year: '2016',
    publisher: 'Blizzard Entertainment',
		director: 'Duncan Jones'
  },
  {
    title: 'Assassin\'s Creed',
		year: '2016',
    publisher: 'Ubisoft',
		director: 'Justin Kurzel'
  },
	{
    title: 'Resident Evil: The Final Chapter',
		year: '2017',
    publisher: 'Capcom',
		director: 'Paul W. S. Anderson'
  },
  {
    title: 'Tomb Raider',
		year: '2018',
    publisher: 'Square Enix',
		director: 'Roar Uthaug'
  },
  {
    title: 'Rampage',
		year: '2018',
    publisher: 'Midway',
		director: 'Brad Peyton'
  },
	{
    title: 'Dead Trigger',
		year: '2019',
    publisher: 'Madfinger Games',
		director: 'Mike Cuff'
  },
  {
    title: 'Detective Pikachu',
		year: '2019',
    publisher: 'Nintendo',
		director: 'Rob Letterman'
  },
  {
    title: 'Sonic The Hedgehog',
		year: '2020',
    publisher: 'Sega',
		director: 'Jeff Fowler'
  },
	{
		title: 'Monster Hunter',
		year: '2020',
		publisher: 'Capcom',
		director: 'Paul W. S. Anderson'
	},
	{
		title: 'Mortal Kombat',
		year: '2021',
		publisher: 'WB Games',
		director: 'Simon McQuoid'
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
