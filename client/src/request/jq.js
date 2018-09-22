$(() => {
	$('#ajax-jq-button').on('click', () => {
		$.ajax('http://localhost:3000', {
			dataType: 'html'
		}).done(data => {
			console.log(data);
		});
	});
});
