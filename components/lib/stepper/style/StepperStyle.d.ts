/**
 *
 * Stepper is a component that streamlines a wizard-like workflow, organizing content into coherent steps and visually guiding users through a numbered progression in a multi-step process.
 *
 * [Live Demo](https://www.primevue.org/stepper/)
 *
 * @module stepperstyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum StepperClasses {
    root = 'p-stepper',
    list = 'p-stepper-list',
    stepperItem = 'p-stepper-item',
    stepperItemHeader = 'p-stepper-item-header',
    stepperItemNumber = 'p-stepper-item-number',
    stepperItemTitle = 'p-stepper-item-title',
    stepperSeparator = 'p-stepper-separator',
    stepperPanelContentContainer = 'p-stepper-panel-content-container',
    stepperPanelContent = 'p-stepper-panel-content',
    panels = 'p-stepper-panels',
    panel = 'p-stepper-panel'
}

export interface StepperStyle extends BaseStyle {}
