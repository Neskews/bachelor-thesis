$('#ajax-standard-jq-button').on('click', () => {
	$.ajax('http://localhost:3000', { dataType: 'html' }).done((data, status, xhr) => {
		$('#ajax-standard-jq-response').html(xhr.status);
	});
});