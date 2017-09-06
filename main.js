(function init () {

	const navToggles = document.querySelectorAll('.js-nav-toggle');
	const navOverlay = document.querySelector('.js-nav-overlay');

	[...navToggles].forEach(button => button.addEventListener('click', () => {
		handleRestOfPage('.js-nav-overlay');
		navOverlay.classList.toggle('hidden');
	}));

	const buttons = document.querySelectorAll('.js-product-details-toggle');
	const overlays = document.querySelectorAll('.js-product-details-overlay');

	[...buttons].forEach(button => button.addEventListener('click', (e) => {
		handleRestOfPage('.js-product-details-overlay');
///		const overlayName = e.target.dataset.overlayName;
		const overlay = [...overlays].find(el => el.dataset.overlayName === e.target.dataset.overlayName);
		overlay.classList.toggle('hidden');
	}));

	function handleRestOfPage (selector) {
		const everything = document.querySelectorAll(`*:not(${selector})`);
		[...everything].forEach(element => {
			element.style.overflow = element.style.overflow === 'hidden' ? 'visible' : 'hidden';
		});
	}

})();
