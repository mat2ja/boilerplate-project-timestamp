const express = require('express');
const dateFns = require('date-fns');

const { isValid } = dateFns;

const app = express();

const PORT = process.env.PORT || '3000';

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
const cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/views/index.html');
});

app.get('/api', (req, res) => {
	try {
		const now = Date.now();
		res.send({
			unix: now,
			utc: new Date(now),
		});
	} catch (error) {
		res.status(400).send({ error: 'Invalid Date' });
	}
});

app.get('/api/:date', (req, res) => {
	try {
		const parsedDate = Number.isInteger(+req.params.date)
			? new Date(+req.params.date)
			: new Date(req.params.date);

		if (isValid(parsedDate)) {
			const unix = Number.isInteger(+req.params.date)
				? +req.params.date
				: parsedDate.valueOf();

			return res.send({
				unix,
				utc: parsedDate,
			});
		}

		throw new Error();
	} catch (error) {
		res.status(400).send({ error: 'Invalid Date' });
	}
});

// your first API endpoint...
app.get('/api/hello', (req, res) => {
	res.json({ greeting: 'hello API' });
});

// listen for requests :)
const listener = app.listen(PORT, () => {
	console.log(`Your app is listening on port ${listener.address().port}`);
});
