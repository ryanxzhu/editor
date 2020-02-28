if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

const express = require('express'),
	app = express(),
	mongoose = require('mongoose');

const indexRouter = require('./routes/index');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', (err) => console.error(err));
db.once('open', () => console.log('Connected to Mongoose'));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static('public'));

app.use('/', indexRouter);

app.listen(process.env.PORT || 3000);
