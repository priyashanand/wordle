const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');


const db = new sqlite3.Database('database.db');

const initScript = fs.readFileSync('init_db.sql', 'utf8');
db.exec(initScript, (err) => {
  if (err) {
    console.error('Error initializing database:', err.message);
  } else {
    console.log('Database initialized successfully');
  }
});

app.get('/', (req, res) => {
  db.get('SELECT word FROM words ORDER BY RANDOM() LIMIT 1', (err, row) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send('Internal Server Error');
    }

    const word = row ? row.word : 'fallback'; 

    res.render('index', { word });
  });
});

app.post('/check', (req, res) => {
  const guessedWord = req.body.guess;

  db.get('SELECT word FROM words ORDER BY RANDOM() LIMIT 1', (err, row) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send('Internal Server Error');
    }

    const targetWord = row ? row.word : 'fallback';

    const result = checkWord(targetWord, guessedWord);

    res.json({ result });
  });
});

function checkWord(targetWord, guessedWord) {
  return targetWord === guessedWord;
}

app.listen(port, () => {
  console.log(`Wordle game app listening at http://localhost:${port}`);
});
