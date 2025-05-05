import { style } from '@primeuix/styles/megamenu';
import BaseStyle from '@primevue/core/base/style';

const inlineStyles = {
    rootList: ({ props }) => ({ 'max-height': props.scrollHeight, overflow: 'auto' })
};

const classes = {
    root: ({ instance }) => [
        'p-megamenu p-component',
        {
            'p-megamenu-mobile': instance.queryMatches,
            'p-megamenu-mobile-active': instance.mobileActive,
            'p-megamenu-horizontal': instance.horizontal,
            'p-megamenu-vertical': instance.vertical
        }
    ],
    start: 'p-megamenu-start',
    button: 'p-megamenu-button',
    rootList: 'p-megamenu-root-list',
    submenuLabel: ({ instance, processedItem }) => [
        'p-megamenu-submenu-label',
        {
            'p-disabled': instance.isItemDisabled(processedItem)
        }
    ],
    item: ({ instance, processedItem }) => [
        'p-megamenu-item',
        {
            'p-megamenu-item-active': instance.isItemActive(processedItem),
            'p-focus': instance.isItemFocused(processedItem),
            'p-disabled': instance.isItemDisabled(processedItem)
        }
    ],
    itemContent: 'p-megamenu-item-content',
    itemLink: 'p-megamenu-item-link',
    itemIcon: 'p-megamenu-item-icon',
    itemLabel: 'p-megamenu-item-label',
    submenuIcon: 'p-megamenu-submenu-icon',
    overlay: 'p-megamenu-overlay',
    grid: 'p-megamenu-grid',
    column: ({ instance, processedItem }) => {
        let length = instance.isItemGroup(processedItem) ? processedItem.items.length : 0;
        let columnClass;

        if (instance.$parentInstance.queryMatches) columnClass = 'p-megamenu-col-12';
        else {
            switch (length) {
                case 2:
                    columnClass = 'p-megamenu-col-6';
                    break;

                case 3:
                    columnClass = 'p-megamenu-col-4';
                    break;

                case 4:
                    columnClass = 'p-megamenu-col-3';
                    break;

                case 6:
                    columnClass = 'p-megamenu-col-2';
                    break;

                default:
                    columnClass = 'p-megamenu-col-12';
                    break;
            }
        }

        return columnClass;
    },
    submenu: 'p-megamenu-submenu',
    separator: 'p-megamenu-separator',
    end: 'p-megamenu-end'
};

export default BaseStyle.extend({
    name: 'megamenu',
    style,
    classes,
    inlineStyles
});
