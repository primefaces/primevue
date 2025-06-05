/**
 *
 * ToggleSwitch is used to select a boolean value.
 *
 * [Live Demo](https://www.primevue.org/toggleswitch/)
 *
 * @module toggleswitchstyle
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum ToggleSwitchClasses {
    /**
     * Class name of the root element
     */
    root = 'p-toggleswitch',
    /**
     * Class name of the input element
     */
    input = 'p-toggleswitch-input',
    /**
     * Class name of the slider element
     */
    slider = 'p-toggleswitch-slider',
    /**
     * Class name of the handle element
     */
    handle = 'p-toggleswitch-handle'
}

export interface ToggleSwitchStyle extends BaseStyle {}
