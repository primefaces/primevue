import BaseStyle from 'primevue/base/style';

const inlineStyles = {
    submenu: ({ instance, processedItem }) => ({ display: instance.isItemActive(processedItem) ? 'block' : 'none' })
};

const classes = {
    root: ({ instance }) => [
        'p-menubar p-component',
        {
            'p-menubar-mobile': instance.queryMatches,
            'p-menubar-mobile-active': instance.mobileActive
        }
    ],
    start: 'p-menubar-start',
    button: 'p-menubar-button',
    menu: 'p-menubar-root-list',
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
    separator: 'p-menuitem-separator',
    end: 'p-menubar-end'
};

export default BaseStyle.extend({
    name: 'menubar',
    classes,
    inlineStyles
});
