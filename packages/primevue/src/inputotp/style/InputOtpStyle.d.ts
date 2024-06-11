/**
 *
 * InputOtp is used to enter one time passwords.
 *
 * [Live Demo](https://www.primevue.org/inputotp/)
 *
 * @module inputotpstyle
 *
 */
import { BaseStyle } from '../../base/style/BaseStyle';

export enum InputOtpClasses {
    /**
     * Class name of the root element
     */
    root = 'p-inputotp',
    /**
     * Class name of the input element
     */
    pcInput = 'p-inputotp-input'
}

export interface InputOtpStyle extends BaseStyle {}
