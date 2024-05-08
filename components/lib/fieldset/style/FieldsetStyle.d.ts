/**
 *
 * Fieldset is a grouping component with the optional content toggle feature.
 *
 * [Live Demo](https://www.primevue.org/fieldset/)
 *
 * @module fieldsetstyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum FieldsetClasses {
    root = 'p-fieldset',
    legend = 'p-fieldset-legend',
    legendLabel = 'p-fieldset-legend-label',
    toggleIcon = 'p-fieldset-toggle-icon',
    contentContainer = 'p-fieldset-content-container',
    content = 'p-fieldset-content'
}

export interface FieldsetStyle extends BaseStyle {}
