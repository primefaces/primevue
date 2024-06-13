/**
 *
 * PickList is used to reorder items between different lists.
 *
 * [Live Demo](https://primevue.org/picklist)
 *
 * @module pickliststyle
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum PickListClasses {
    /**
     * Class name of the root element
     */
    root = 'p-picklist',
    /**
     * Class name of the source controls element
     */
    sourceControls = 'p-picklist-source-controls',
    /**
     * Class name of the source list container element
     */
    sourceListContainer = 'p-picklist-source-list-container',
    /**
     * Class name of the transfer controls element
     */
    transferControls = 'p-picklist-transfer-controls',
    /**
     * Class name of the target list container element
     */
    targetListContainer = 'p-picklist-target-list-container',
    /**
     * Class name of the target controls element
     */
    targetControls = 'p-picklist-target-controls'
}

export interface PickListStyle extends BaseStyle {}
