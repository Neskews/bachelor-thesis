$('#ajax-post-jq-button').on('click', () => {
	$.post('http://localhost:3000/data', { a: 1, b: { c: 2, d: 3 } }).done(
		(data, successText, jqXHR) => {
			$('#ajax-post-jq-response').html(jqXHR.status);
		}
	);
});
