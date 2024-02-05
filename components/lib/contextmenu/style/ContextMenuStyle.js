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
        'p-menuitem',
        {
            'p-menuitem-active p-highlight': instance.isItemActive(processedItem),
            'p-focus': instance.isItemFocused(processedItem),
            'p-disabled': instance.isItemDisabled(processedItem)
        }
    ],
    content: 'p-menuitem-content',
    action: 'p-menuitem-link',
    icon: 'p-menuitem-icon',
    label: 'p-menuitem-text',
    submenuIcon: 'p-submenu-icon',
    submenu: 'p-submenu-list',
    separator: 'p-menuitem-separator'
};

export default BaseStyle.extend({
    name: 'contextmenu',
    classes
});
