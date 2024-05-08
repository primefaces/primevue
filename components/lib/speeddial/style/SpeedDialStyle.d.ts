/**
 *
 * When pressed, a floating action button can display multiple primary actions that can be performed on a page.
 *
 * [Live Demo](https://www.primevue.org/speeddial/)
 *
 * @module speeddialstyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum SpeedDialClasses {
    root = 'p-speeddial',
    pcButton = 'p-speeddial-button',
    list = 'p-speeddial-list',
    item = 'p-speeddial-item',
    action = 'p-speeddial-action',
    actionIcon = 'p-speeddial-action-icon',
    mask = 'p-speeddial-mask'
}

export interface SpeedDialStyle extends BaseStyle {}
