$('#ajax-customHeader-jq-button').on('click', () => {
	$.ajax({
		url: 'https://api.twitch.tv/kraken/users?login=dakotaz',
		beforeSend: xhr =>
			xhr.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json')
	})
		.done((data, textStatus, jqXHR) => {
			$('#ajax-customHeader-jq-response').html(jqXHR.status);
		})
		.fail(jqXHR => {
			$('#ajax-customHeader-jq-response').html(jqXHR.status);
		});
});
