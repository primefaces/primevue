/**
 *
 * Button is an extension to standard button element with icons and theming.
 *
 * [Live Demo](https://www.primevue.org/button/)
 *
 * @module buttonstyle
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum ButtonClasses {
    /**
     * Class name of the root element
     */
    root = 'p-button',
    /**
     * Class name of the loading icon element
     */
    loadingIcon = 'p-button-loading-icon',
    /**
     * Class name of the icon element
     */
    icon = 'p-button-icon',
    /**
     * Class name of the label element
     */
    label = 'p-button-label'
}

export interface ButtonStyle extends BaseStyle {}
