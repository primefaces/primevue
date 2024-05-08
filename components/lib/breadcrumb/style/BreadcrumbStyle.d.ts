/**
 *
 * Breadcrumb provides contextual information about page hierarchy.
 *
 * [Live Demo](https://www.primevue.org/breadcrumb/)
 *
 * @module breadcrumbstyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum BreadcrumbClasses {
    root = 'p-breadcrumb',
    list = 'p-breadcrumb-list',
    homeItem = 'p-breadcrumb-home-item',
    separator = 'p-breadcrumb-separator',
    item = 'p-breadcrumb-item',
    itemLink = 'p-breadcrumb-item-link',
    itemIcon = 'p-breadcrumb-item-icon',
    itemLabel = 'p-breadcrumb-item-label'
}

export interface BreadcrumbStyle extends BaseStyle {}
