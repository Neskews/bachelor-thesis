var open = window.XMLHttpRequest.prototype.open,
	send = window.XMLHttpRequest.prototype.send;

const LOADING_ELEMENT = document.getElementById('isLoading');

function openReplacement(method, url, async, user, password) {
	this._url = url;
	return open.apply(this, arguments);
}

function sendReplacement(data) {
	if (this.onreadystatechange) {
		this._onreadystatechange = this.onreadystatechange;
	}

	LOADING_ELEMENT.style.visibility = 'visible';

	this.onreadystatechange = onReadyStateChangeReplacement;
	return send.apply(this, arguments);
}

function onReadyStateChangeReplacement() {
	LOADING_ELEMENT.style.visibility = 'hidden';

	if (this._onreadystatechange) {
		return this._onreadystatechange.apply(this, arguments);
	}
}

window.XMLHttpRequest.prototype.open = openReplacement;
window.XMLHttpRequest.prototype.send = sendReplacement;
