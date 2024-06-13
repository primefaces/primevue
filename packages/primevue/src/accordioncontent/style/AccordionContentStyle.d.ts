/**
 *
 * AccordionContent is a helper component for Accordion component.
 *
 * [Live Demo](https://www.primevue.org/accordion/)
 *
 * @module accordioncontentstyle
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum AccordionContentClasses {
    /**
     * Class name of the root element
     */
    root = 'p-accordioncontent',
    /**
     * Class name of the content element
     */
    content = 'p-accordioncontent-content'
}

export interface AccordionContentStyle extends BaseStyle {}
