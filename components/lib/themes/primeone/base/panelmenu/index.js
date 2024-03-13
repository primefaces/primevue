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

.p-panelmenu-header-action {
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

.p-panelmenu .p-submenu-icon,
.p-panelmenu .p-menuitem-icon {
    color: ${dt('panelmenu.item.icon.icolor')};
}

.p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content {
    background: ${dt('panelmenu.item.focus.background')};
    color: ${dt('panelmenu.item.focus.color')};
}

.p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content .p-submenu-icon,
.p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content .p-menuitem-icon {
    color: ${dt('panelmenu.item.icon.focus.color')};
}

.p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover {
    background: ${dt('panelmenu.item.focus.background')};
    color: ${dt('panelmenu.item.focus.color')};
}

.p-panelmenu-header:not(.p-disabled).p-panelmenu-header-content:hover .p-submenu-icon,
.p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover .p-menuitem-icon {
    color: ${dt('panelmenu.item.icon.focus.color')};
}

.p-panelmenu .p-menuitem {
    margin: 2px 0;
}

.p-panelmenu .p-menuitem:first-child {
    margin-top: 0;
}

.p-panelmenu .p-menuitem:last-child {
    margin-bottom: 0;
}

.p-panelmenu .p-submenu-list {
    margin: 4px 0 0 0;
    padding: 0 0 0 1rem;
    list-style: none;
}

.p-panelmenu .p-menuitem-link {
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

.p-panelmenu .p-menuitem-text {
    line-height: 1;
}

.p-panelmenu .p-menuitem-content {
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')};
    border-radius: ${dt('rounded.sm')};
    color: ${dt('panelmenu.item.color')};
}

.p-panelmenu .p-menuitem.p-focus > .p-menuitem-content {
    background: ${dt('panelmenu.item.focus.background')};
    color: ${dt('panelmenu.item.focus.color')};
}

.p-panelmenu .p-menuitem.p-focus > .p-menuitem-icon {
    color: ${dt('panelmenu.item.focus.color')};
}

.p-panelmenu .p-menuitem:not(.p-disabled) > .p-menuitem-content:hover {
    background: ${dt('panelmenu.item.focus.background')};
    color: ${dt('panelmenu.item.focus.color')};
}

.p-panelmenu .p-menuitem:not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-icon,
.p-panelmenu .p-menuitem:not(.p-disabled) > .p-menuitem-content:hover .p-submenu-icon {
    color: ${dt('panelmenu.item.focus.color')};
}
`
};
