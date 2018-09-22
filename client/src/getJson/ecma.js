const request = new XMLHttpRequest();

const requestButton = document.getElementById('ecmaButton');
const successNode = document.getElementById('ecma-response');

requestButton.addEventListener('click', () => {
	successNode.innerHTML = 'pending ...';

	request.onload = () => (successNode.innerHTML = request.status);

	request.open('GET', 'http://localhost:3000');
	request.send();
});
