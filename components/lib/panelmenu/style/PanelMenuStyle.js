import BaseStyle from 'primevue/base/style';

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
    headerAction: 'p-panelmenu-header-link',
    headerIcon: 'p-panelmenu-header-icon',
    headerLabel: 'p-panelmenu-header-label',
    toggleableContent: 'p-panelmenu-content-container',
    menuContent: 'p-panelmenu-content',
    menu: 'p-panelmenu-root-list',
    menuitem: ({ instance, processedItem }) => [
        'p-panelmenu-item',
        {
            'p-focus': instance.isItemFocused(processedItem),
            'p-disabled': instance.isItemDisabled(processedItem)
        }
    ],
    content: 'p-panelmenu-item-content',
    action: 'p-panelmenu-item-link',
    icon: 'p-panelmenu-item-icon',
    label: 'p-panelmenu-item-label',
    submenuIcon: 'p-panelmenu-submenu-icon',
    submenu: 'p-panelmenu-submenu',
    separator: 'p-menuitem-separator'
};

export default BaseStyle.extend({
    name: 'panelmenu',
    classes
});
