import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-tieredmenu {
    background: ${dt('tieredmenu.background')};
    color: ${dt('tieredmenu.color')};
    border: 1px solid ${dt('tieredmenu.border.color')};
    border-radius: ${dt('tieredmenu.border.radius')};
    min-width: 12.5rem;
}

.p-tieredmenu-root-list,
.p-tieredmenu-submenu {
    margin: 0;
    padding: ${dt('tieredmenu.list.padding')};
    list-style: none;
    outline: 0 none;
    display: flex;
    flex-direction: column;
    gap: ${dt('tieredmenu.list.gap')};
}

.p-tieredmenu-submenu {
    position: absolute;
    min-width: 100%;
    z-index: 1;
    background: ${dt('tieredmenu.background')};
    color: ${dt('tieredmenu.color')};
    border: 1px solid ${dt('tieredmenu.border.color')};
    border-radius: ${dt('tieredmenu.border.radius')};
    box-shadow: ${dt('tieredmenu.shadow')};
}

.p-tieredmenu-item {
    position: relative;
}

.p-tieredmenu-item-content {
    transition: background ${dt('tieredmenu.transition.duration')}, color ${dt('tieredmenu.transition.duration')};
    border-radius: ${dt('tieredmenu.item.border.radius')};
    color: ${dt('tieredmenu.item.color')};
}

.p-tieredmenu-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: ${dt('tieredmenu.item.padding')};
    gap: ${dt('tieredmenu.item.gap')};
    user-select: none;
    outline: 0 none;
}

.p-tieredmenu-item-label {
    line-height: 1;
}

.p-tieredmenu-item-icon {
    color: ${dt('tieredmenu.item.icon.color')};
}

.p-tieredmenu-submenu-icon {
    color: ${dt('tieredmenu.submenu.icon.color')};
    margin-left: auto;
    font-size: ${dt('tieredmenu.submenu.icon.size')};
    width: ${dt('tieredmenu.submenu.icon.size')};
    height: ${dt('tieredmenu.submenu.icon.size')};
}

.p-tieredmenu-item.p-focus > .p-tieredmenu-item-content {
    color: ${dt('tieredmenu.item.focus.color')};
    background: ${dt('tieredmenu.item.focus.background')};
}

.p-tieredmenu-item.p-focus > .p-tieredmenu-item-content .p-tieredmenu-item-icon {
    color: ${dt('tieredmenu.item.icon.focus.color')};
}

.p-tieredmenu-item.p-focus > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {
    color: ${dt('tieredmenu.submenu.icon.focus.color')};
}

.p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover {
    color: ${dt('tieredmenu.item.focus.color')};
    background: ${dt('tieredmenu.item.focus.background')};
}

.p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover .p-tieredmenu-item-icon {
    color: ${dt('tieredmenu.item.icon.focus.color')};
}

.p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover .p-tieredmenu-submenu-icon {
    color: ${dt('tieredmenu.submenu.icon.focus.color')};
}

.p-tieredmenu-item-active > .p-tieredmenu-item-content {
    color: ${dt('tieredmenu.item.active.color')};
    background: ${dt('tieredmenu.item.active.background')};
}

.p-tieredmenu-item-active > .p-tieredmenu-item-content .p-tieredmenu-item-icon {
    color: ${dt('tieredmenu.item.icon.active.color')};
}

.p-tieredmenu-item-active > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {
    color: ${dt('tieredmenu.submenu.icon.active.color')};
}

.p-tieredmenu-separator {
    border-top: 1px solid ${dt('tieredmenu.separator.border.color')};
}

.p-tieredmenu-overlay {
    box-shadow: ${dt('tieredmenu.shadow')};
}

.p-tieredmenu-enter-from,
.p-tieredmenu-leave-active {
    opacity: 0;
}

.p-tieredmenu-enter-active {
    transition: opacity 250ms;
}
`;

const inlineStyles = {
    submenu: ({ instance, processedItem }) => ({ display: instance.isItemActive(processedItem) ? 'flex' : 'none' })
};

const classes = {
    root: ({ instance, props }) => [
        'p-tieredmenu p-component',
        {
            'p-tieredmenu-overlay': props.popup
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
    theme,
    classes,
    inlineStyles
});
