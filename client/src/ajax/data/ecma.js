const postDataEcmaButton = document.getElementById('ajax-post-ecma-button');

postDataEcmaButton.addEventListener('click', () => {
	xhr.open('POST', 'http://localhost:3000/data');
	const formData = new FormData();
	xhr.send(formData);
});

xhr.onload = () => {
	document.getElementById('ajax-post-ecma-response').innerHTML = xhr.status;
};
