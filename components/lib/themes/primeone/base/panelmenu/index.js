export default {
    css: ({ dt }) => `
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
    color: ${dt('panelmenu.item.icon.focus.color')};
}

.p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover {
    background: ${dt('panelmenu.item.focus.background')};
    color: ${dt('panelmenu.item.focus.color')};
}

.p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover .p-panelmenu-submenu-icon,
.p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover .p-panelmenu-header-icon {
    color: ${dt('panelmenu.item.icon.focus.color')};
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

.p-menupanelmenu-item.p-focus > .p-panelmenu-item-content {
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
    color: ${dt('panelmenu.item.icon.focus.color')};
}
`
};
