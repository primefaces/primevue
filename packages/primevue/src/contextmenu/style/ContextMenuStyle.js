import { style } from '@primeuix/styles/contextmenu';
import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: ({ instance }) => [
        'p-contextmenu p-component',
        {
            'p-contextmenu-mobile': instance.queryMatches
        }
    ],
    rootList: 'p-contextmenu-root-list',
    item: ({ instance, processedItem }) => [
        'p-contextmenu-item',
        {
            'p-contextmenu-item-active': instance.isItemActive(processedItem),
            'p-focus': instance.isItemFocused(processedItem),
            'p-disabled': instance.isItemDisabled(processedItem)
        }
    ],
    itemContent: 'p-contextmenu-item-content',
    itemLink: 'p-contextmenu-item-link',
    itemIcon: 'p-contextmenu-item-icon',
    itemLabel: 'p-contextmenu-item-label',
    submenuIcon: 'p-contextmenu-submenu-icon',
    submenu: 'p-contextmenu-submenu',
    separator: 'p-contextmenu-separator'
};

export default BaseStyle.extend({
    name: 'contextmenu',
    style,
    classes
});
