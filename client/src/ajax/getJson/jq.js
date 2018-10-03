$(() => {
	const statusNode = $('#ajax-getJson-jq-response');
	$('#ajax-getJson-jq-button').on('click', () => {
		// $.ajax('http://localhost:3000').done((data, statusText, jqXHR) => console.log(jqXHR.status));
		const jq = $.getJSON('http://localhost:3000');
		jq.done(data => console.log(data));
	});
});
