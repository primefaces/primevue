import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ instance }) => [
        'p-contextmenu p-component',
        {
            'p-ripple-disabled': instance.$primevue.config.ripple === false
        }
    ],
    menu: 'p-contextmenu-root-list',
    menuitem: ({ instance, processedItem }) => [
        'p-contextmenu-item',
        {
            'p-contextmenu-item-active': instance.isItemActive(processedItem),
            'p-focus': instance.isItemFocused(processedItem),
            'p-disabled': instance.isItemDisabled(processedItem)
        }
    ],
    content: 'p-contextmenu-item-content',
    action: 'p-contextmenu-item-link',
    icon: 'p-contextmenu-item-icon',
    label: 'p-contextmenu-item-label',
    submenuIcon: 'p-contextmenu-submenu-icon',
    submenu: 'p-contextmenu-submenu-list',
    separator: 'p-contextmenu-separator'
};

export default BaseStyle.extend({
    name: 'contextmenu',
    classes
});
