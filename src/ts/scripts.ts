declare let slideDown : any;
declare let slideUp : any;
declare let slideToggle : any;

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
			const sibling = currentElem.nextElementSibling;		

			// add hash to url
			location.hash = currentElem.dataset.hash;

			// open / close mechanic for slide
			slideToggle(sibling);  
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
			targetHashElem.parentElement.classList.add('active');

			window.scrollTo({
				top: elemOffsetX,
				left: 0,
				behavior: 'smooth'
			});

			slideToggle(targetHashElem.nextElementSibling);        
		}
	}
});