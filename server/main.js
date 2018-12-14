const express = require('express');
const cors = require('cors');
const formidableMiddleware = require('express-formidable');

const app = express();
const port = 3000;

app.use(cors());
app.use(formidableMiddleware());

app.get('/', (request, response) => {
	response.send('<p>A response from the server.</p>');
});

app.get('/cache', (request, response) => {
	response.send(
		`the server received header cache-control with value: ${
			request.headers['cache-control']
		}`
	);
});

app.post('/data', (request, response) => {
	response.send(
		`Got following data from the client: ${JSON.stringify(request.fields)}`
	);
});

app.get('/getJson', (request, response) => {
	response.send(
		{
			foo: 'bar'
		}
	);
});

app.get('/global', (request, response) => {
	setTimeout(() => {
		response.send(
			'The server send a response with a timeout of 1000 ms.'
		);
	}, 1000);
});

app.get('/getScript', (request, response) => {
	response.send('alert(\'This script comes from the server\');');
});


app.listen(port, err => {
	if (err) {
		return console.log('something bad happened', err);
	}

	console.log(`server is listening on ${port}`);
});
