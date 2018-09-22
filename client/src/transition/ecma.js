/* Animation with ECMAScript */
// select the element with id 'ecma'
const ecmaCard = document.getElementById('ecma');

// add a transition duration of 0.5 seconds
ecmaCard.style.transitionDuration = '.5s';

// add the mouse enter effect
ecmaCard.addEventListener('mouseenter', () => {
	ecmaCard.style.height = '350px';
});

// add the mouse leave effect
ecmaCard.addEventListener('mouseleave', () => {
	ecmaCard.style.height = '50px';
});
