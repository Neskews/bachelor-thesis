request.open('GET', 'http://localhost:3000');

const reqBtn = document.getElementById('ajax-ecma-button');
reqBtn.addEventListener('click', () => {
	request.onload = () => {
		const data = request.responseText;
		console.log(request.responseText);
	};

	request.send();
});
