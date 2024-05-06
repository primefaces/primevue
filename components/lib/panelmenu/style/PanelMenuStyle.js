import BaseStyle from 'primevue/base/style';

const theme = ({ dt }) => `
.p-panelmenu {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.p-panelmenu-panel {
    background: ${dt('panelmenu.panel.background')};
    border: 1px solid ${dt('panelmenu.panel.border.color')};
    color: ${dt('panelmenu.panel.color')};
    border-radius: ${dt('rounded.base')};
    padding: 0.25rem 0.25rem;
}

.p-panelmenu-header {
    outline: 0 none;
    border: 0 none;
}

.p-panelmenu-header-content {
    border: 0 none;
    color: ${dt('panelmenu.item.color')};
    border-radius: ${dt('rounded.base')};
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    outline-color: transparent;
}

.p-panelmenu-header-link {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    user-select: none;
    cursor: pointer;
    position: relative;
    text-decoration: none;
    color: inherit;
    padding: 0.5rem 0.75rem;
    font-weight: 600;
}

.p-panelmenu-header-icon,
.p-panelmenu-item-icon,
.p-panelmenu-submenu-icon {
    color: ${dt('panelmenu.item.icon.color')};
}

.p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content {
    background: ${dt('panelmenu.item.focus.background')};
    color: ${dt('panelmenu.item.focus.color')};
}

.p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content .p-panelmenu-submenu-icon,
.p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content .p-panelmenu-header-icon {
    color: ${dt('panelmenu.item.icon.hover.color')};
}

.p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover {
    background: ${dt('panelmenu.item.focus.background')};
    color: ${dt('panelmenu.item.focus.color')};
}

.p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover .p-panelmenu-submenu-icon,
.p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover .p-panelmenu-header-icon {
    color: ${dt('panelmenu.item.icon.hover.color')};
}

.p-panelmenu .p-panelmenu-item {
    margin: 2px 0;
}

.p-panelmenu .p-panelmenu-item:first-child {
    margin-top: 0;
}

.p-panelmenu .p-panelmenu-item:last-child {
    margin-bottom: 0;
}

.p-panelmenu-submenu {
    margin: 4px 0 0 0;
    padding: 0 0 0 1rem;
    outline: 0;
    list-style: none;
}

.p-panelmenu-item-link {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    user-select: none;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    position: relative;
    overflow: hidden;
    padding: 0.5rem 0.75rem;
}

.p-panelmenu-item-label {
    line-height: 1;
}

.p-panelmenu-item-content {
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')};
    border-radius: ${dt('rounded.sm')};
    color: ${dt('panelmenu.item.color')};
}

.p-panelmenu-item.p-focus > .p-panelmenu-item-content {
    background: ${dt('panelmenu.item.focus.background')};
    color: ${dt('panelmenu.item.focus.color')};
}

.p-panelmenu-item.p-focus > .p-panelmenu-item-icon {
    color: ${dt('panelmenu.item.focus.color')};
}

.p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover {
    background: ${dt('panelmenu.item.focus.background')};
    color: ${dt('panelmenu.item.focus.color')};
}

.p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover .p-panelmenu-item-icon,
.p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover .p-panelmenu-submenu-icon {
    color: ${dt('panelmenu.item.icon.hover.color')};
}
`;

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
    headerLink: 'p-panelmenu-header-link',
    headerIcon: 'p-panelmenu-header-icon',
    headerLabel: 'p-panelmenu-header-label',
    contentContainer: 'p-panelmenu-content-container',
    content: 'p-panelmenu-content',
    rootList: 'p-panelmenu-root-list',
    item: ({ instance, processedItem }) => [
        'p-panelmenu-item',
        {
            'p-focus': instance.isItemFocused(processedItem),
            'p-disabled': instance.isItemDisabled(processedItem)
        }
    ],
    itemContent: 'p-panelmenu-item-content',
    itemLink: 'p-panelmenu-item-link',
    itemIcon: 'p-panelmenu-item-icon',
    itemLabel: 'p-panelmenu-item-label',
    submenuIcon: 'p-panelmenu-submenu-icon',
    submenu: 'p-panelmenu-submenu',
    separator: 'p-menuitem-separator'
};

export default BaseStyle.extend({
    name: 'panelmenu',
    theme,
    classes
});
