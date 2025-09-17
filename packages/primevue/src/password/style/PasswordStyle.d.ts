/**
 *
 * Password displays strength indicator for password fields.
 *
 * [Live Demo](https://www.primevue.org/password/)
 *
 * @module passwordstyle
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum PasswordClasses {
    /**
     * Class name of the root element
     */
    root = 'p-password',
    /**
     * Class name of the pt input element
     */
    pcInput = 'p-password-input',
    /**
     * Class name of the mask icon element
     */
    maskIcon = 'p-password-mask-icon',
    /**
     * Class name of the unmask icon element
     */
    unmaskIcon = 'p-password-unmask-icon',
    /**
     * Class name of the clear icon element
     */
    clearIcon = 'p-password-clear-icon',
    /**
     * Class name of the overlay element
     */
    overlay = 'p-password-overlay',
    /**
     * Class name of the meter element
     */
    meter = 'p-password-meter',
    /**
     * Class name of the meter label element
     */
    meterLabel = 'p-password-meter-label',
    /**
     * Class name of the meter text element
     */
    meterText = 'p-password-meter-text'
}

export interface PasswordStyle extends BaseStyle {}
