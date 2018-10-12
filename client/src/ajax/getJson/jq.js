$(() => {
	const statusNode = $('#ajax-getJson-jq-response');
	$('#ajax-getJson-jq-button').on('click', () => {
		const jq = $.getJSON('http://localhost:3000');
		const node = $('#ajax-getJson-jq-response');
		node.html(jq.responseText);
	});
});
