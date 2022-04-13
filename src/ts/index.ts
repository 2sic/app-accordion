import { initAccordion } from './lib-2sxc-accordion';
import { initAccordionBs5 } from './lib-2sxc-bs5-accordion';

var winAny = window as any;
winAny.appAccordion4 ??= {};
winAny.appAccordion4.init ??= initAccordion;
winAny.appAccordion4.initBs5 ??= initAccordionBs5;