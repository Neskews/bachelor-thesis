const ecmaCard = document.getElementById('animations-ecma');

ecmaCard.style.transitionDuration = '.5s';

ecmaCard.addEventListener('mouseenter', () => {
	ecmaCard.style.height = '350px';
});

ecmaCard.addEventListener('mouseleave', () => {
	ecmaCard.style.height = '50px';
});
