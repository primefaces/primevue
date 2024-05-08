import BaseStyle from 'primevue/base/style';

const theme = ({ dt }) => `
.p-contextmenu {
    padding: 0.25rem 0.25rem;
    background: ${dt('contextmenu.background')};
    color: ${dt('contextmenu.color')};
    border: 1px solid ${dt('contextmenu.border.color')};
    border-radius: ${dt('border.radius.md')};
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
    min-width: 12.5rem;
}

.p-contextmenu-root-list,
.p-contextmenu-submenu {
    margin: 0;
    padding: 0;
    list-style: none;
    outline: 0 none;
}

.p-contextmenu-submenu {
    position: absolute;
    min-width: 100%;
    z-index: 1;
    padding: 0.25rem 0.25rem;
    background: ${dt('contextmenu.background')};
    color: ${dt('contextmenu.color')};
    border: 1px solid ${dt('contextmenu.border.color')};
    border-radius: ${dt('border.radius.md')};
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

.p-contextmenu-item {
    position: relative;
    margin: 2px 0;
}

.p-contextmenu-item:first-child {
    margin-top: 0;
}
.p-contextmenu-item:last-child {
    margin-bottom: 0;
}

.p-contextmenu-item-content {
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')};
    border-radius: ${dt('border.radius.sm')};
    color: ${dt('contextmenu.item.color')};
}

.p-contextmenu-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: 0.5rem 0.75rem;
    user-select: none;
}

.p-contextmenu-item-label {
    line-height: 1;
}

.p-contextmenu-item-icon {
    color: ${dt('contextmenu.item.icon.color')};
    margin-right: 0.5rem;
}

.p-contextmenu-submenu-icon {
    color: ${dt('contextmenu.item.icon.color')};
    margin-left: auto;
    font-size: 0.875rem;
    width: 0.875rem;
    height: 0.875rem;
}

.p-contextmenu-item.p-focus > .p-contextmenu-item-content {
    color: ${dt('contextmenu.item.focus.color')};
    background: ${dt('contextmenu.item.focus.background')};
}

.p-contextmenu-item.p-focus > .p-contextmenu-item-content .p-contextmenu-item-icon,
.p-contextmenu-item.p-focus > .p-contextmenu-item-content .p-contextmenu-submenu-icon {
    color: ${dt('contextmenu.item.icon.hover.color')};
}

.p-contextmenu-item:not(.p-disabled) > .p-contextmenu-item-content:hover {
    color: ${dt('contextmenu.item.focus.color')};
    background: ${dt('contextmenu.item.focus.background')};
}

.p-contextmenu-item:not(.p-disabled) > .p-contextmenu-item-content:hover .p-contextmenu-item-icon,
.p-contextmenu-item:not(.p-disabled) > .p-contextmenu-item-content:hover .p-contextmenu-submenu-icon {
    color: ${dt('contextmenu.item.icon.hover.color')};
}

.p-contextmenu-item-active > .p-contextmenu-item-content {
    color: ${dt('contextmenu.item.focus.color')};
    background: ${dt('contextmenu.item.focus.background')};
}

.p-contextmenu-item-active > .p-contextmenu-item-content .p-contextmenu-item-icon,
.p-contextmenu-item-active > .p-contextmenu-item-content .p-contextmenu-submenu-icon {
    color: ${dt('contextmenu.item.icon.hover.color')};
}

.p-contextmenu-separator {
    border-top: 1px solid  ${dt('contextmenu.separator.border.color')};
    margin: 2px 0;
}

.p-contextmenu-enter-from,
.p-contextmenu-leave-active {
    opacity: 0;
}

.p-contextmenu-enter-active {
    transition: opacity 250ms;
}
`;

const classes = {
    root: 'p-contextmenu p-component',
    rootList: 'p-contextmenu-root-list',
    item: ({ instance, processedItem }) => [
        'p-contextmenu-item',
        {
            'p-contextmenu-item-active': instance.isItemActive(processedItem),
            'p-focus': instance.isItemFocused(processedItem),
            'p-disabled': instance.isItemDisabled(processedItem)
        }
    ],
    itemContent: 'p-contextmenu-item-content',
    itemLink: 'p-contextmenu-item-link',
    itemIcon: 'p-contextmenu-item-icon',
    itemLabel: 'p-contextmenu-item-label',
    submenuIcon: 'p-contextmenu-submenu-icon',
    submenu: 'p-contextmenu-submenu',
    separator: 'p-contextmenu-separator'
};

export default BaseStyle.extend({
    name: 'contextmenu',
    theme,
    classes
});
