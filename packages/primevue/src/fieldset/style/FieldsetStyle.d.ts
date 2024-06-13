/**
 *
 * Fieldset is a grouping component with the optional content toggle feature.
 *
 * [Live Demo](https://www.primevue.org/fieldset/)
 *
 * @module fieldsetstyle
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum FieldsetClasses {
    /**
     * Class name of the root element
     */
    root = 'p-fieldset',
    /**
     * Class name of the legend element
     */
    legend = 'p-fieldset-legend',
    /**
     * Class name of the legend label element
     */
    legendLabel = 'p-fieldset-legend-label',
    /**
     * Class name of the toggle icon element
     */
    toggleIcon = 'p-fieldset-toggle-icon',
    /**
     * Class name of the content container element
     */
    contentContainer = 'p-fieldset-content-container',
    /**
     * Class name of the content element
     */
    content = 'p-fieldset-content'
}

export interface FieldsetStyle extends BaseStyle {}
