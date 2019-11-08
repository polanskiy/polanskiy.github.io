const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const livereload = require('livereload');
const expressLayout = require('express-ejs-layouts');

const app = express();

app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());
app.use(expressLayout);
app.use('/public', express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('pages/home/home', {
  sosi: 'kek',
}));

const live = livereload.createServer({
  exts: ['js', 'css', 'ejs'],
});

live.watch(path.join(__dirname, 'views'));
live.watch(path.join(__dirname, 'public'));

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Running on port ${port}!`));
