document
	.getElementById('selector-matches-ecma-button')
	.addEventListener('click', () => {
		const htmlDivElements = document.querySelectorAll('div');

		const filteredHtmlDivElements = Array.from(htmlDivElements).filter(
			element => element.classList.contains('frame')
		);

		document.getElementById('selector-matches-ecma-result').innerHTML = `${
			filteredHtmlDivElements.length
		} matches`;
	});
