/**
 *
 * Step is a helper component for Stepper component.
 *
 * [Live Demo](https://www.primevue.org/stepper/)
 *
 * @module stepstyle
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum StepClasses {
    /**
     * Class name of the root element
     */
    root = 'p-step',
    /**
     * Class name of the header element
     */
    header = 'p-step-header',
    /**
     * Class name of the number element
     */
    number = 'p-step-number',
    /**
     * Class name of the title element
     */
    title = 'p-step-title'
}

export interface StepStyle extends BaseStyle {}
