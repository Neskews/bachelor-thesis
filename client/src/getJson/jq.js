$(() => {
	const statusNode = $('#jquery-response');
	$('#jQueryButton').on('click', () => {
		statusNode.html('pending ...');

		$.getJSON('http://localhost:3000', (data, text, request) => {
			$(statusNode).html(request.status);
		});
	});
});
