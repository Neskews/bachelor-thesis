const ajaxGetJsonEcmaButton = document.getElementById('ajax-getJson-ecma-button');
const successNode = document.getElementById('ajax-getJson-ecma-response');

ajaxGetJsonEcmaButton.addEventListener('click', () => {
	successNode.innerHTML = 'pending ...';

	xhr.onload = () => (successNode.innerHTML = xhr.status);

	xhr.open('GET', 'http://localhost:3000');
	xhr.send();
});
