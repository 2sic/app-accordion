import { hide, show, toggle } from 'slidetoggle';

var winAny = window as any;
winAny.appAccordion4 ??= {};
winAny.appAccordion4.init ??= initAccordion;

// Todo Roman
// 1. Get init to use turnOn (otherwise Oqtane won't work - https://app-dev.2sxc.org/content-accordion/de-de/)
//    Ideally pass in the module-id or something, to be sure it initialized the correct thing
// 2. Fix open/closed icons to the right of the accordion
// 3. also check todo in CSS 
// - font name looks fishy
// - h2 etc. look wrong inside the accordion

function initAccordion(data: any /* todo: if many params, make interface */) {
  // todo:
}

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