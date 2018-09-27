const reqBtn = document.getElementById('ajax-ecma-button');
const xhr = request;
reqBtn.addEventListener('click', () => {
	xhr.open('GET', 'http://localhost:3000');
	xhr.responseType = 'text';
	xhr.onload = () => {
		const el = document.getElementById('ecma-html-response');
		const html = new window.DOMParser().parseFromString(xhr.response, 'text/html');
		el.innerHTML = html;
	};

	xhr.send();
});
