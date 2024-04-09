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
    menu: 'p-tieredmenu-root-list',
    menuitem: ({ instance, processedItem }) => [
        'p-tieredmenu-item',
        {
            'p-tieredmenu-item-active': instance.isItemActive(processedItem),
            'p-focus': instance.isItemFocused(processedItem),
            'p-disabled': instance.isItemDisabled(processedItem)
        }
    ],
    content: 'p-tieredmenu-item-content',
    action: 'p-tieredmenu-item-link',
    icon: 'p-tieredmenu-item-icon',
    text: 'p-tieredmenu-item-label',
    submenuIcon: 'p-tieredmenu-submenu-icon',
    submenu: 'p-tieredmenu-submenu-list',
    separator: 'p-tieredmenu-separator',
    end: 'p-tieredmenu-end'
};

export default BaseStyle.extend({
    name: 'tieredmenu',
    classes,
    inlineStyles
});
