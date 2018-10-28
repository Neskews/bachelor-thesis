document
	.getElementById('selector-matches-ecma-button')
	.addEventListener('click', () => {
		let htmlDivElements = document.querySelectorAll('div');

		const filteredHtmlDivElements = Array.from(htmlDivElements).filter(
			element => element.classList.contains('frame')
		);

		// const filteredHtmlDivElements = [];
		// htmlDivElements = Array.from(htmlDivElements);
		// for (let i = 0; i < htmlDivElements.length; i++) {
		// 	if (htmlDivElements[i].classList.contains('frame')) {
		// 		filteredHtmlDivElements.push(htmlDivElements[i]);
		// 	}
		// }

		document.getElementById('selector-matches-ecma-result').innerHTML = `${
			filteredHtmlDivElements.length
		} matches`;
	});
