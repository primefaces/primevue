/**
 *
 * Password displays strength indicator for password fields.
 *
 * [Live Demo](https://www.primevue.org/password/)
 *
 * @module passwordstyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum PasswordClasses {
    root = 'p-password',
    ptInput = 'p-password-input',
    maskIcon = 'p-password-mask-icon',
    unmaskIcon = 'p-password-unmask-icon',
    overlay = 'p-password-overlay',
    meter = 'p-password-meter',
    meterLabel = 'p-password-meter-label',
    meterText = 'p-password-meter-text'
}

export interface PasswordStyle extends BaseStyle {}
