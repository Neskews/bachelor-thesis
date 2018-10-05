const express = require('express');
const app = express();
const formidable = require('express-formidable');
const port = 3000;

app.use(formidable());

app.get('/', (request, response) => {
	response.setHeader('Access-Control-Allow-Origin', '*');
	setTimeout(function() {
		response.send('<p>my html</p>');
	}, 50);
});

app.post('/data', (request, response) => {
	response.setHeader('Access-Control-Allow-Origin', '*');

	console.log(request.fields);

	setTimeout(() => {
		response.send(request.fields);
	}, 50);
});

app.listen(port, err => {
	if (err) {
		return console.log('something bad happened', err);
	}

	console.log(`server is listening on ${port}`);
});
