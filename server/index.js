const express = require('express');
const app = express();
const port = 3000;

app.get('/', (request, response) => {
	response.setHeader('Access-Control-Allow-Origin', '*');
	setTimeout(function() {
		response.send('<p>some html</p>');
	}, 50);
});

app.listen(port, err => {
	if (err) {
		return console.log('something bad happened', err);
	}

	console.log(`server is listening on ${port}`);
});
