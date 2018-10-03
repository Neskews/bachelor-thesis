const customHeaderEcmaButton = document.getElementById(
	'ajax-customHeader-ecma-button'
);

customHeaderEcmaButton.addEventListener('click', () => {
	xhr.open('GET', 'https://api.twitch.tv/kraken/users?login=dakotaz');

	xhr.onload = () => {
		document.getElementById('ajax-customHeader-ecma-response').innerHTML = xhr.status;
	};

	xhr.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json');
	xhr.send();
});
