import BaseStyle from 'primevue/base/style';

const css = `
@layer primevue {
    .p-panelmenu .p-panelmenu-header-action {
        display: flex;
        align-items: center;
        user-select: none;
        cursor: pointer;
        position: relative;
        text-decoration: none;
    }

    .p-panelmenu .p-panelmenu-header-action:focus {
        z-index: 1;
    }

    .p-panelmenu .p-submenu-list {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .p-panelmenu .p-menuitem-link {
        display: flex;
        align-items: center;
        user-select: none;
        cursor: pointer;
        text-decoration: none;
        position: relative;
        overflow: hidden;
    }

    .p-panelmenu .p-menuitem-text {
        line-height: 1;
    }
}
`;

const classes = {
    root: 'p-panelmenu p-component',
    panel: 'p-panelmenu-panel',
    header: ({ instance, item }) => [
        'p-panelmenu-header',
        {
            'p-highlight': instance.isItemActive(item) && !!item.items,
            'p-disabled': instance.isItemDisabled(item)
        }
    ],
    headerContent: 'p-panelmenu-header-content',
    headerAction: 'p-panelmenu-header-action',
    headerIcon: 'p-menuitem-icon',
    headerLabel: 'p-menuitem-text',
    toggleableContent: 'p-toggleable-content',
    menuContent: 'p-panelmenu-content',
    menu: 'p-panelmenu-root-list',
    menuitem: ({ instance, processedItem }) => [
        'p-menuitem',
        {
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
    name: 'panelmenu',
    css,
    classes
});
