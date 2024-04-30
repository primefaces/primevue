import BaseStyle from 'primevue/base/style';

const inlineStyles = {
    submenu: ({ instance, processedItem }) => ({ display: instance.isItemActive(processedItem) ? 'block' : 'none' })
};

const classes = {
    root: ({ instance, props }) => [
        'p-tieredmenu p-component',
        {
            'p-tieredmenu-overlay': props.popup,
            'p-ripple-disabled': instance.$primevue.config.ripple === false
        }
    ],
    start: 'p-tieredmenu-start',
    rootList: 'p-tieredmenu-root-list',
    item: ({ instance, processedItem }) => [
        'p-tieredmenu-item',
        {
            'p-tieredmenu-item-active': instance.isItemActive(processedItem),
            'p-focus': instance.isItemFocused(processedItem),
            'p-disabled': instance.isItemDisabled(processedItem)
        }
    ],
    itemContent: 'p-tieredmenu-item-content',
    itemLink: 'p-tieredmenu-item-link',
    itemIcon: 'p-tieredmenu-item-icon',
    itemLabel: 'p-tieredmenu-item-label',
    submenuIcon: 'p-tieredmenu-submenu-icon',
    submenu: 'p-tieredmenu-submenu',
    separator: 'p-tieredmenu-separator',
    end: 'p-tieredmenu-end'
};

export default BaseStyle.extend({
    name: 'tieredmenu',
    classes,
    inlineStyles
});
