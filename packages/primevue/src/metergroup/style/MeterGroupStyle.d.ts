/**
 *
 * MeterGroup is a group of process status indicators.
 *
 * [Live Demo](https://primevue.org/metergroup)
 *
 * @module metergroupstyle
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum MeterGroupClasses {
    /**
     * Class name of the root element
     */
    root = 'p-metergroup',
    /**
     * Class name of the meters element
     */
    meters = 'p-metergroup-meters',
    /**
     * Class name of the meter element
     */
    meter = 'p-metergroup-meter',
    /**
     * Class name of the label list element
     */
    labelList = 'p-metergroup-label-list',
    /**
     * Class name of the label element
     */
    label = 'p-metergroup-label',
    /**
     * Class name of the label icon element
     */
    labelIcon = 'p-metergroup-label-icon',
    /**
     * Class name of the label marker element
     */
    labelMarker = 'p-metergroup-label-marker',
    /**
     * Class name of the label text element
     */
    labelText = 'p-metergroup-label-text'
}

export interface MeterGroupStyle extends BaseStyle {}
