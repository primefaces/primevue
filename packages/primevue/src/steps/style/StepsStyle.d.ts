/**
 *
 * Steps components is an indicator for the steps in a wizard workflow. Example below uses nested routes with Steps.
 *
 * [Live Demo](https://www.primevue.org/steps/)
 *
 * @module stepsstyle
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum StepsClasses {
    /**
     * Class name of the root element
     */
    root = 'p-steps',
    /**
     * Class name of the list element
     */
    list = 'p-steps-list',
    /**
     * Class name of the item element
     */
    item = 'p-steps-item',
    /**
     * Class name of the item link element
     */
    itemLink = 'p-steps-item-link',
    /**
     * Class name of the item number element
     */
    itemNumber = 'p-steps-item-number',
    /**
     * Class name of the item label element
     */
    itemLabel = 'p-steps-item-label'
}

export interface StepsStyle extends BaseStyle {}
