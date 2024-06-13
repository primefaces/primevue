import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-contextmenu {
    background: ${dt('contextmenu.background')};
    color: ${dt('contextmenu.color')};
    border: 1px solid ${dt('contextmenu.border.color')};
    border-radius: ${dt('contextmenu.border.radius')};
    box-shadow: ${dt('contextmenu.shadow')};
    min-width: 12.5rem;
}

.p-contextmenu-root-list,
.p-contextmenu-submenu {
    margin: 0;
    padding: ${dt('contextmenu.list.padding')};
    list-style: none;
    outline: 0 none;
    display: flex;
    flex-direction: column;
    gap: ${dt('contextmenu.list.gap')};
}

.p-contextmenu-submenu {
    position: absolute;
    display: flex;
    flex-direction: column;
    min-width: 100%;
    z-index: 1;
    background: ${dt('contextmenu.background')};
    color: ${dt('contextmenu.color')};
    border: 1px solid ${dt('contextmenu.border.color')};
    border-radius: ${dt('contextmenu.border.radius')};
    box-shadow: ${dt('contextmenu.shadow')};
}

.p-contextmenu-item {
    position: relative;
}

.p-contextmenu-item-content {
    transition: background ${dt('contextmenu.transition.duration')}, color ${dt('contextmenu.transition.duration')};
    border-radius: ${dt('contextmenu.item.border.radius')};
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
    padding: ${dt('contextmenu.item.padding')};
    gap: ${dt('contextmenu.item.gap')};
    user-select: none;
}

.p-contextmenu-item-label {
    line-height: 1;
}

.p-contextmenu-item-icon {
    color: ${dt('contextmenu.item.icon.color')};
}

.p-contextmenu-submenu-icon {
    color: ${dt('contextmenu.submenu.icon.color')};
    margin-left: auto;
    font-size: ${dt('contextmenu.submenu.icon.size')};
    width: ${dt('contextmenu.submenu.icon.size')};
    height: ${dt('contextmenu.submenu.icon.size')};
}

.p-contextmenu-item.p-focus > .p-contextmenu-item-content {
    color: ${dt('contextmenu.item.focus.color')};
    background: ${dt('contextmenu.item.focus.background')};
}

.p-contextmenu-item.p-focus > .p-contextmenu-item-content .p-contextmenu-item-icon {
    color: ${dt('contextmenu.item.icon.focus.color')};
}

.p-contextmenu-item.p-focus > .p-contextmenu-item-content .p-contextmenu-submenu-icon {
    color: ${dt('contextmenu.submenu.icon.focus.color')};
}

.p-contextmenu-item:not(.p-disabled) > .p-contextmenu-item-content:hover {
    color: ${dt('contextmenu.item.focus.color')};
    background: ${dt('contextmenu.item.focus.background')};
}

.p-contextmenu-item:not(.p-disabled) > .p-contextmenu-item-content:hover .p-contextmenu-item-icon {
    color: ${dt('contextmenu.item.icon.focus.color')};
}

.p-contextmenu-item:not(.p-disabled) > .p-contextmenu-item-content:hover .p-contextmenu-submenu-icon {
    color: ${dt('contextmenu.submenu.icon.focus.color')};
}

.p-contextmenu-item-active > .p-contextmenu-item-content {
    color: ${dt('contextmenu.item.active.color')};
    background: ${dt('contextmenu.item.active.background')};
}

.p-contextmenu-item-active > .p-contextmenu-item-content .p-contextmenu-item-icon {
    color: ${dt('contextmenu.item.icon.active.color')};
}

.p-contextmenu-item-active > .p-contextmenu-item-content .p-contextmenu-submenu-icon {
    color: ${dt('contextmenu.submenu.icon.active.color')};
}

.p-contextmenu-separator {
    border-top: 1px solid  ${dt('contextmenu.separator.border.color')};
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
