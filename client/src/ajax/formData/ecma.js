const formDataEcmaButton = document.getElementById('ajax-formData-ecma-button');
const formElement = document.getElementById('ajax-formData-ecma-form');

formDataEcmaButton.addEventListener('click', () => {
	const formData = new FormData(formElement);
    
	xhr.onload = () => console.log(xhr.status);

	xhr.open('POST', 'http://localhost:3000');
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.send(formData);
});
