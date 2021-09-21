import { hide, show, toggle } from 'slidetoggle';
document.addEventListener("DOMContentLoaded", (event) => {
	// get navHight correct scrollposition
	var navHeight = document.getElementsByTagName('header')[0].offsetHeight;

	// attach click to all accordions when loading
	var accordionOpener = document.querySelectorAll('.app-accordion4-title');

	accordionOpener.forEach((elem: HTMLElement, index) => {	
		elem.addEventListener('click', (event) => {
			event.preventDefault();

			const currentElem = event.currentTarget as HTMLElement;
			const parent = currentElem.parentElement;	
			const sibling = currentElem.nextElementSibling as HTMLElement;		

			// add hash to url
			location.hash = currentElem.dataset.hash;

			// open / close mechanic for slide
			toggle(sibling, {});
			parent.classList.toggle('active');
		})
	});

	// get hash from url and open specific item
	if(window.location.hash){
		const hash = window.location.hash.replace('#', '');
		const targetHashElem = document.getElementById(`hash-${hash}`);
		
		// if target element exists scroll to element and open it
		if(targetHashElem){
			const elemOffsetX = targetHashElem.getBoundingClientRect().top + window.scrollY - navHeight;
			const sibling = targetHashElem.nextElementSibling as HTMLElement; 

			targetHashElem.parentElement.classList.add('active');

			// scroll to element which should open then
			window.scrollTo({
				top: elemOffsetX,
				left: 0,
				behavior: 'smooth'
			});

			// open accordion
			toggle(sibling, {});
		}
	}
});