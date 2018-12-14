const express = require('express');
const app = express();
const formidable = require('express-formidable');
const port = 3000;

app.use(formidable());

app.get('/', (request, response) => {
	response.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
	setTimeout(() => {
		response.send('<p>my html</p>');
	}, 2);
});

app.get('/html', (request, response) => {
	response.setHeader('Access-Control-Allow-Origin', '*');

	setTimeout(() => {
		response.send('<p>this is html</p>');
	}, 1000);
});

app.get('/converter', (request, response) => {
	response.setHeader('Access-Control-Allow-Origin', '*');
	response.setHeader('Content-Type', 'application/customtype');

	setTimeout(() => {
		response.send('this worked!');
	}, 1000);
});

app.post('/', (request, response) => {
	response.setHeader('Access-Control-Allow-Origin', '*');
	setTimeout(function() {
		response.send('<p>received html</p>');
	}, 1000);
});

app.options('/auth', (request, response) => {
	response.setHeader('Access-Control-Allow-Origin', '*');
	response.send('authorized');
});

app.get('/cors', (request, response) => {
	response.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
	response.send('this origin was allowed!');
});

app.get('/getJson', (request, response) => {
	response.setHeader('Access-Control-Allow-Origin', '*');
	setTimeout(function() {
		response.send({ some: 'json', other: 'prop' });
	}, 50);
});

app.get('/getScript', (request, response) => {
	response.setHeader('Access-Control-Allow-Origin', '*');
	const script = 'alert(\'This script is comes form the server\');';

	setTimeout(function() {
		response.send(script);
	}, 50);
});

app.get('/global', (request, response) => {
	response.setHeader('Access-Control-Allow-Origin', '*');
	setTimeout(() => {
		response.send();
	}, 1000);
});

app.post('/data', (request, response) => {
	response.setHeader('Access-Control-Allow-Origin', '*');

	setTimeout(() => {
		response.send(request.fields);
	}, 50);
});

app.get('/data', (request, response) => {
	response.setHeader('Access-Control-Allow-Origin', '*');

	console.log(request.fields);

	setTimeout(() => {
		response.send(request.fields);
	}, 50);
});

app.post('/custom', (request, response) => {
	response.setHeader('Access-Control-Allow-Origin', 'customheader');

	console.log('there was something');
});

app.listen(port, err => {
	if (err) {
		return console.log('something bad happened', err);
	}

	console.log(`server is listening on ${port}`);
});
