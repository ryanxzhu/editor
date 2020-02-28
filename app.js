if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

const express = require('express'),
	app = express();

const indexRouter = require('./routes/index');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static('public'));

app.use('/', indexRouter);

app.listen(process.env.PORT || 3000);
