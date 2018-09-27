const express = require('express');
const app = express();
const port = 3000;

app.get('/', (request, response) => {
	response.setHeader('Access-Control-Allow-Origin', '*');
	setTimeout(function() {
<<<<<<< HEAD
		response.send('<p>some html</p>');
=======
		response.send('<p>html</p>');
>>>>>>> c3d1fa38b0900927bcac09a8051c695dedd1ef1d
	}, 50);
});

app.listen(port, err => {
	if (err) {
		return console.log('something bad happened', err);
	}

	console.log(`server is listening on ${port}`);
});
