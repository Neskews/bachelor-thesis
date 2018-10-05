const postDataEcmaButton = document.getElementById('ajax-post-ecma-button');

postDataEcmaButton.addEventListener('click', () => {
	xhr.open('POST', 'http://localhost:3000/data');
	const formData = new FormData();
	formData.append('a', 1);
	formData.append('b', 2);
	formData.append('c', 3);
	xhr.send(formData);
});

xhr.onload = () => {
	document.getElementById('ajax-post-ecma-response').innerHTML = xhr.status;
};
