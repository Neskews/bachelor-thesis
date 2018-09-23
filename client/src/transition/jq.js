$('#jquery')
	.on('mouseenter', function() {
		$(this).animate({ height: '350px' }, 500);
	})
	.on('mouseleave', function() {
		$(this).animate({ height: '50px' }, 500);
	});
