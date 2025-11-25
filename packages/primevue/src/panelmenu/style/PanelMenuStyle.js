import { style } from '@primeuix/styles/panelmenu';
import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: 'p-panelmenu p-component',
    panel: 'p-panelmenu-panel',
    header: ({ instance, item }) => [
        'p-panelmenu-header',
        {
            'p-panelmenu-header-active': instance.isItemActive(item) && !!item.items,
            'p-disabled': instance.isItemDisabled(item)
        }
    ],
    headerContent: 'p-panelmenu-header-content',
    headerLink: 'p-panelmenu-header-link',
    headerIcon: 'p-panelmenu-header-icon',
    headerLabel: 'p-panelmenu-header-label',
    contentContainer: 'p-panelmenu-content-container',
    contentWrapper: 'p-panelmenu-content-wrapper',
    content: 'p-panelmenu-content',
    rootList: 'p-panelmenu-root-list',
    item: ({ instance, processedItem }) => [
        'p-panelmenu-item',
        {
            'p-focus': instance.isItemFocused(processedItem),
            'p-disabled': instance.isItemDisabled(processedItem)
        }
    ],
    itemContent: 'p-panelmenu-item-content',
    itemLink: 'p-panelmenu-item-link',
    itemIcon: 'p-panelmenu-item-icon',
    itemLabel: 'p-panelmenu-item-label',
    submenuIcon: 'p-panelmenu-submenu-icon',
    submenu: 'p-panelmenu-submenu',
    separator: 'p-menuitem-separator'
};

export default BaseStyle.extend({
    name: 'panelmenu',
    style,
    classes
});
