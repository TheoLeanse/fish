(function init () {

	const navToggles = document.querySelectorAll('.js-nav-toggle');
	const navOverlay = document.querySelector('.js-nav-overlay');

	[...navToggles].forEach(button => button.addEventListener('click', () => {
		console.log('CLICK');
		navOverlay.classList.toggle('hidden');
	}));

	const buttons = document.querySelectorAll('.js-product-details-toggle');
	const overlay = document.querySelector('.js-product-details-overlay');

	[...buttons].forEach(button => button.addEventListener('click', () => {
		overlay.classList.toggle('hidden');
	}));

})();
