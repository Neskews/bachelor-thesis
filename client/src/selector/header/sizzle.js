const selectorHeaderButtonSizzle = Sizzle(
	'#selector-headlines-sizzle-button'
)[0];

selectorHeaderButtonSizzle.addEventListener('click', () => {
	const selectorHeaderResultSizzle = Sizzle(':header');

	Sizzle('#selector-headlines-sizzle-result')[0].innerHTML = `${
		selectorHeaderResultSizzle.length
	} matches`;
});
