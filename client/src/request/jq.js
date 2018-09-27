$(() => {
	const btn = $('#ajax-jq-button');
	btn.on('click', () => {
		$.ajax('http://localhost:3000').done(xhr => {
			console.log(xhr);
		});
	});
});
