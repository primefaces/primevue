/**
 *
 * MeterGroup is a group of process status indicators.
 *
 * [Live Demo](https://primevue.org/metergroup)
 *
 * @module metergroupstyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum MeterGroupClasses {
    root = 'p-metergroup',
    meters = 'p-metergroup-meters',
    meter = 'p-metergroup-meter',
    labelList = 'p-metergroup-label-list',
    label = 'p-metergroup-label',
    labelIcon = 'p-metergroup-label-icon',
    labelMarker = 'p-metergroup-label-marker',
    labelText = 'p-metergroup-label-text'
}

export interface MeterGroupStyle extends BaseStyle {}
