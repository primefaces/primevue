/**
 *
 * Steps components is an indicator for the steps in a wizard workflow. Example below uses nested routes with Steps.
 *
 * [Live Demo](https://www.primevue.org/steps/)
 *
 * @module stepsstyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum StepsClasses {
    root = 'p-steps',
    list = 'p-steps-list',
    item = 'p-steps-item',
    itemLink = 'p-steps-item-link',
    itemNumber = 'p-steps-item-number',
    itemLabel = 'p-steps-item-label'
}

export interface StepsStyle extends BaseStyle {}
