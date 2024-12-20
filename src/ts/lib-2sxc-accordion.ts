import { show, toggle } from 'slidetoggle';
import { AccordionOptions } from './lib-2sxc-accordion-options';

/*
  This is a shared code used in various 2sxc apps. Make sure that they are in sync, so if you improve it, improve all 2sxc apps which use this. 
  ATM they are:
  - Accordion
  - FAQ
  - App School System

  The master with the newest / best version must always be the Accordion, the others should then get a fresh copy.
  Because this is shared, all parameters like DOM-IDs etc. must be provided in the Init-call that it can work across apps
*/ 

export function initAccordion({ domId, options } : { domId: string, options: AccordionOptions }) {
  // get navHight for correct scrollposition
  var nav = (document.getElementsByTagName(options.tagStickyHeader)[0] as HTMLElement);
  var navHeight = (nav != null ? nav.offsetHeight : 0);
  
  let accordionWrapper = document.querySelector(`[${domId}]`);
  if (!accordionWrapper) {
    return;
  }
  // attach click to all accordions when loading
  var accordionOpener = accordionWrapper.querySelectorAll(`.${options.accordionOpener}`);
  
  accordionOpener.forEach((elem: Element) => {	
    elem.addEventListener('click', (event) => {
      event.preventDefault();

      const currentElem = event.currentTarget as HTMLElement;
      const hash = currentElem.dataset.accordionParent ? currentElem.dataset.accordionParent.replace('#', '') : '';
      const parent = currentElem.parentElement;
      const targetOpenElem = accordionWrapper.querySelector(`[${options.attrChild}="${hash}"]`) as HTMLElement;		

      // add hash to url
      history.pushState({}, "", `${hash}`); 

      // open / close mechanic for slide
      toggle(targetOpenElem, {});
      if (parent) {
        parent.classList.toggle(`${options.classIsExpanded}`);
      }
    })
  });

  // get hash from url and open specific item
  if(window.location.hash){
    const hash = window.location.hash.replace('#', '');
    const targetHashElem = accordionWrapper.querySelector(`[${options.attrChild}="${hash}"]`);
    
    // if target element exists scroll to element and open it
    if(targetHashElem){
      const elemOffsetX = targetHashElem.getBoundingClientRect().top + window.scrollY - navHeight;
      const targetOpenElem = accordionWrapper.querySelector(`[${options.attrChild}="${hash}"]`) as HTMLElement;		

      if (targetHashElem.parentElement) {
        targetHashElem.parentElement.classList.add(`${options.classIsExpanded}`);
      }

      // open accordion
      show(targetOpenElem, {
        onAnimationEnd: () => {
          // scroll to element which should open then
          window.scrollTo({
            top: elemOffsetX,
            left: 0,
            behavior: 'smooth'
          });
        }
      });
    }
  }
}