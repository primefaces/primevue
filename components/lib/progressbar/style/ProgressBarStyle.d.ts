/**
 *
 * ProgressBar is a process status indicator.
 *
 * [Live Demo](https://www.primevue.org/progressbar)
 *
 * @module progressbarstyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum ProgressBarClasses {
    root = 'p-progressbar',
    indeterminateContainer = 'p-progressbar-indeterminate-container',
    value = 'p-progressbar-value',
    label = 'p-progressbar-label'
}

export interface ProgressBarStyle extends BaseStyle {}
