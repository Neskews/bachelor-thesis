const ajaxStatusCodeEcmaButton = document.getElementById(
	'ajax-statusCode-ecma-button'
);

xhr.onerror = () => {
	alert('error');
};

ajaxStatusCodeEcmaButton.onclick = () => {
	xhr.open('GET', 'http://localhost:3000');
	console.log('opened');

	xhr.onload = () => {
		switch (xhr.status) {
		case 200:
			alert('worked');
			break;
		default:
			alert('default');
		}
	};

	xhr.send();
	console.log('sent');
};
