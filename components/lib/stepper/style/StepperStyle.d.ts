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
    /**
     * Class name of the root element
     */
    root = 'p-stepper',
    /**
     * Class name of the list element
     */
    list = 'p-stepper-list',
    /**
     * Class name of the stepper item element
     */
    stepperItem = 'p-stepper-item',
    /**
     * Class name of the stepper item header element
     */
    stepperItemHeader = 'p-stepper-item-header',
    /**
     * Class name of the stepper item number element
     */
    stepperItemNumber = 'p-stepper-item-number',
    /**
     * Class name of the stepper item title element
     */
    stepperItemTitle = 'p-stepper-item-title',
    /**
     * Class name of the stepper separator element
     */
    stepperSeparator = 'p-stepper-separator',
    /**
     * Class name of the stepper panel content container element
     */
    stepperPanelContentContainer = 'p-stepper-panel-content-container',
    /**
     * Class name of the stepper panel content element
     */
    stepperPanelContent = 'p-stepper-panel-content',
    /**
     * Class name of the panels element
     */
    panels = 'p-stepper-panels',
    /**
     * Class name of the panel element
     */
    panel = 'p-stepper-panel'
}

export interface StepperStyle extends BaseStyle {}
