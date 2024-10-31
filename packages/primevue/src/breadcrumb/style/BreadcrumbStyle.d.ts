/**
 *
 * Breadcrumb provides contextual information about page hierarchy.
 *
 * [Live Demo](https://www.primevue.org/breadcrumb/)
 *
 * @module breadcrumbstyle
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum BreadcrumbClasses {
    /**
     * Class name of the root element
     */
    root = 'p-breadcrumb',
    /**
     * Class name of the list element
     */
    list = 'p-breadcrumb-list',
    /**
     * Class name of the home item element
     */
    homeItem = 'p-breadcrumb-home-item',
    /**
     * Class name of the separator element
     */
    separator = 'p-breadcrumb-separator',
    /**
     * Class name of the separator icon element
     */
    separatorIcon = 'p-breadcrumb-separator-icon',
    /**
     * Class name of the item element
     */
    item = 'p-breadcrumb-item',
    /**
     * Class name of the item link element
     */
    itemLink = 'p-breadcrumb-item-link',
    /**
     * Class name of the item icon element
     */
    itemIcon = 'p-breadcrumb-item-icon',
    /**
     * Class name of the item label element
     */
    itemLabel = 'p-breadcrumb-item-label'
}

export interface BreadcrumbStyle extends BaseStyle {}
