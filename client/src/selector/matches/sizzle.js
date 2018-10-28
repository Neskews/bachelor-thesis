$('#selector-matches-sizzle-button').on('click', () => {
	const selectorMatchesSizzleResult = Sizzle.matches('.frame', Sizzle('div'));

	$('#selector-matches-sizzle-result').html(
		`${selectorMatchesSizzleResult.length} matches`
	);
});
