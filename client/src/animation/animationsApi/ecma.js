const animationsApiMenu = document.getElementById('animations-api');

animationsApiMenu.addEventListener('mouseenter', () => {
	animationsApiMenu.animate([{ height: '50px' }, { height: '350px' }], {
		duration: 500,
		iterations: 1,
		easing: 'ease',
		fill: 'both'
	});
});

animationsApiMenu.addEventListener('mouseout', () => {
	animationsApiMenu.animate([{ height: '350px' }, { height: '50px' }], {
		duration: 500,
		iterations: 1,
		easing: 'ease',
		fill: 'both'
	});
});
