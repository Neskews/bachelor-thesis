const selectorHeaderButtonEcma = document.getElementById(
	'selector-headlines-ecma-button'
);

selectorHeaderButtonEcma.addEventListener('click', () => {
	const selectorHeaderResultEcma = document.getElementById(
		'selector-headlines-ecma-result'
	);

	const selectorHeaderResultEcmaLength = document.querySelectorAll(
		'h1,h2,h3,h4,h5,h6'
	).length;

	document.getElementById(
		'selector-headlines-ecma-result'
	).innerHTML = `${selectorHeaderResultEcmaLength} matches`;
});
