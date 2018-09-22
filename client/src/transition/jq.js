$(() => {
	$('#jquery')
		.on('mouseenter', () => {
			$(this).animate({ height: '350px' }, 500);
		})
		.on('mouseleave', () => {
			$(this).animate({ height: '50px' }, 500);
		});
});
