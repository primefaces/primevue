/**
 *
 * Button is an extension to standard button element with icons and theming.
 *
 * [Live Demo](https://www.primevue.org/button/)
 *
 * @module buttonstyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum ButtonClasses {
    root = 'p-button',
    loadingIcon = 'p-button-loading-icon',
    icon = 'p-button-icon',
    label = 'p-button-label'
}

export interface ButtonStyle extends BaseStyle {}
