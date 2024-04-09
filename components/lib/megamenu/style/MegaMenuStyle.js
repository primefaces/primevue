import BaseStyle from 'primevue/base/style';

const inlineStyles = {
    submenu: ({ instance, processedItem }) => ({ display: instance.isItemActive(processedItem) ? 'block' : 'none' })
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
    menubutton: 'p-megamenu-button',
    menu: 'p-megamenu-root-list',
    submenuHeader: ({ instance, processedItem }) => [
        'p-megamenu-submenu-item',
        {
            'p-disabled': instance.isItemDisabled(processedItem)
        }
    ],
    menuitem: ({ instance, processedItem }) => [
        'p-megamenu-item',
        {
            'p-megamenu-item-active': instance.isItemActive(processedItem),
            'p-focus': instance.isItemFocused(processedItem),
            'p-disabled': instance.isItemDisabled(processedItem)
        }
    ],
    content: 'p-megamenu-item-content',
    action: 'p-megamenu-item-link',
    icon: 'p-megamenu-item-icon',
    label: 'p-megamenu-item-text',
    submenuIcon: 'p-megamenu-submenu-icon',
    panel: 'p-megamenu-panel',
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
    submenuLabel: 'p-megamenu-submenu-item-label',
    separator: 'p-megamenu-separator',
    end: 'p-megamenu-end'
};

export default BaseStyle.extend({
    name: 'megamenu',
    classes,
    inlineStyles
});
