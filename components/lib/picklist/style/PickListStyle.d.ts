/**
 *
 * PickList is used to reorder items between different lists.
 *
 * [Live Demo](https://primevue.org/picklist)
 *
 * @module pickliststyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum PickListClasses {
    root = 'p-picklist',
    sourceControls = 'p-picklist-source-controls',
    sourceListContainer = 'p-picklist-source-list-container',
    transferControls = 'p-picklist-transfer-controls',
    targetListContainer = 'p-picklist-target-list-container',
    targetControls = 'p-picklist-target-controls'
}

export interface PickListStyle extends BaseStyle {}
