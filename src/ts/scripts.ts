document.addEventListener("DOMContentLoaded", (event) => {
	// get navHight correct scrollposition
	var navHeight = document.getElementsByTagName('header')[0].offsetHeight;

	// attach click to all accordions when loading
	var accordionOpener = document.querySelectorAll('.co-accordion-title');

	accordionOpener.forEach((elem: HTMLElement, index) => {		
		elem.addEventListener('click', (event) => {
			event.preventDefault();

			const currentElem = event.currentTarget as HTMLElement;
			const parent = currentElem.parentElement;			

			// add hash to url
			location.hash = currentElem.dataset.hash;

			// open / close mechanic for slide
			if (!parent.classList.contains('active')) {
				openAccordion(currentElem);        
			} else {
				closeAccordion(currentElem)
			}
		})
	});

	// get hash from url and open specific item
	if(window.location.hash){
		const hash = window.location.hash.replace('#', '');
		const targetHashElem = document.getElementById(`hash-${hash}`);
		
		// if target element exists scroll to element
		if(targetHashElem){
			const elemOffsetX = targetHashElem.getBoundingClientRect().top + window.scrollY - navHeight
			
			window.scrollTo({
				top: elemOffsetX,
				left: 0,
				behavior: 'smooth'
			});

			openAccordion(targetHashElem);         
		}
	}

	function openAccordion(elem: HTMLElement) {
		const parent = elem.parentElement;			
		const sibling = elem.nextElementSibling as HTMLElement;
		
		parent.classList.add('active');
		sibling.style.height = 'auto';

		let height = sibling.clientHeight + "px";

		sibling.style.height = '0px';

		setTimeout(() => {
			sibling.style.height = height;
		}, 0);
	}

	function closeAccordion(elem: HTMLElement) {
		const parent = elem.parentElement;			
		const sibling = elem.nextElementSibling as HTMLElement;

		sibling.style.height = sibling.clientHeight + "px";

		setTimeout(() => {
			sibling.style.height = '0px';
		}, 0)

		sibling.addEventListener('transitionend', function () {
			parent.classList.remove('active');
		}, {
			once: true
		});
	}
});