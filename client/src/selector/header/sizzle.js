const selectorHeaderButtonSizzle = Sizzle(
	'#selector-headlines-sizzle-button'
)[0];

selectorHeaderButtonSizzle.addEventListener('click', () => {
	const selectorHeaderResultSizzle = Sizzle(
		'#selector-headlines-sizzle-result'
	)[0];

	const selectorHeaderResultSizzleLength = Sizzle(':header').length;
	selectorHeaderResultSizzle.innerHTML = `${selectorHeaderResultSizzleLength} matches`;
});
