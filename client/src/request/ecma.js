const reqBtn = document.getElementById('ajax-ecma-button');
reqBtn.addEventListener('click', () => {
	request.open('GET', 'http://localhost:3000');
	request.onload = () => {
		const data = request.responseText;
	};

	request.send();
});