const ajaxEcmaButton = document.getElementById('ajax-standard-ecma-button');
ajaxEcmaButton.addEventListener('click', () => {
	xhr.open('GET', 'http://localhost:3000');
	xhr.onload = () => {
		document.getElementById('ajax-standard-ecma-response').innerHTML = xhr.status;
	};
	xhr.send();
});
