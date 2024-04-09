export default {
    css: ({ dt }) => `
.p-tieredmenu {
    padding: 0.25rem 0.25rem;
    background: ${dt('tieredmenu.background')};
    color: ${dt('tieredmenu.color')};
    border: 1px solid ${dt('tieredmenu.border.color')};
    border-radius: ${dt('rounded.base')};
    min-width: 12.5rem;
}

.p-tieredmenu-root-list,
.p-tieredmenu-submenu-list {
    margin: 0;
    padding: 0;
    list-style: none;
    outline: 0 none;
}

.p-tieredmenu-submenu-list {
    position: absolute;
    min-width: 100%;
    z-index: 1;
    padding: 0.25rem 0.25rem;
    background: ${dt('tieredmenu.background')};
    color: ${dt('tieredmenu.color')};
    border: 1px solid ${dt('tieredmenu.border.color')};
    border-radius: ${dt('rounded.base')};
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

.p-tieredmenu-item {
    position: relative;
    margin: 2px 0;
}

.p-tieredmenu-item:first-child {
    margin-top: 0;
}

.p-tieredmenu-item:last-child {
    margin-bottom: 0;
}

.p-tieredmenu-item-content {
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')};
    border-radius: ${dt('rounded.sm')};
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
    padding: 0.5rem 0.75rem;
    user-select: none;
}

.p-tieredmenu-item-label {
    line-height: 1;
}

.p-tieredmenu-item-icon {
    color: ${dt('tieredmenu.item.icon.color')};
    margin-right: 0.5rem;
}

.p-tieredmenu-submenu-icon {
    color: ${dt('tieredmenu.item.icon.color')};
    margin-left: auto;
    font-size: 0.875rem;
    width: 0.875rem;
    height: 0.875rem;
}

.p-tieredmenu-item.p-focus > .p-tieredmenu-item-content {
    color: ${dt('tieredmenu.item.focus.color')};
    background: ${dt('tieredmenu.item.focus.background')};
}

.p-tieredmenu-item.p-focus > .p-tieredmenu-item-content .p-tieredmenu-item-icon,
.p-tieredmenu-item.p-focus > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {
    color: ${dt('tieredmenu.item.icon.focus.color')};
}

.p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover {
    color: ${dt('tieredmenu.item.focus.color')};
    background: ${dt('tieredmenu.item.focus.background')};
}

.p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover .p-tieredmenu-item-icon,
.p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover .p-tieredmenu-submenu-icon {
    color: ${dt('tieredmenu.item.icon.focus.color')};
}

.p-tieredmenu-item-active > .p-tieredmenu-item-content {
    color: ${dt('tieredmenu.item.focus.color')};
    background: ${dt('tieredmenu.item.focus.background')};
}

.p-tieredmenu-item-active > .p-tieredmenu-item-content .p-tieredmenu-item-icon,
.p-tieredmenu-item-active > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {
    color: ${dt('tieredmenu.item.icon.focus.color')};
}

.p-tieredmenu-separator {
    border-top: 1px solid ${dt('tieredmenu.separator.border.color')};
    margin: 2px 0;
}

.p-tieredmenu-overlay {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

.p-tieredmenu-enter-from,
.p-tieredmenu-leave-active {
    opacity: 0;
}

.p-tieredmenu-enter-active {
    transition: opacity 250ms;
}
`
};
