$('#ajax-jq-button').on('click', () => {
	$.ajax('http://localhost:3000', { dataType: 'html' }).done(xhr =>
		console.log($.parseHTML(xhr))
	);
});
