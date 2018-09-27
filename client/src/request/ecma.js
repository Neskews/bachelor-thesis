const reqBtn = document.getElementById('ajax-ecma-button');
const xhr = request;
reqBtn.addEventListener('click', () => {
	request.open('GET', 'http://localhost:3000');
	request.onload = () => {
		const data = request.responseText;
		const domParser = new DOMParser();
		const html = domParser.parseFromString(data, 'text/html');
		console.log(html);
	};

	xhr.send();
});
