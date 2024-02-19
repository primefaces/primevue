export default {
    css: `
.p-menu {
    padding: 0.25rem 0.25rem;
    background: var(--p-menu-background);
    color: var(--p-menu-text-color);
    border: 1px solid var(--p-menu-border-color);
    border-radius: var(--p-rounded-base);
    min-width: 12.5rem;
}

.p-menu ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.p-menu .p-menuitem {
    margin: 2px 0;
}

.p-menu .p-menuitem:first-child {
    margin-top: 0;
}

.p-menu .p-menuitem:last-child {
    margin-bottom: 0;
}

.p-menu .p-menuitem-link {
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

.p-menu .p-menuitem-text {
    line-height: 1;
}

.p-menu .p-menuitem-content {
    transition: background-color var(--p-transition-duration), color var(--p-transition-duration);
    border-radius: var(--p-rounded-sm);
    color: var(--p-menu-item-text-color);
}

.p-menu .p-menuitem-icon {
    color: var(--p-menu-item-icon-color);
    margin-right: 0.5rem;
}

.p-menu .p-menuitem.p-focus .p-menuitem-content {
    color: var(--p-menu-item-text-color-focus);
    background: var(--p-menu-item-background-focus);
}

.p-menu .p-menuitem.p-focus .p-menuitem-icon {
    color: var(--p-menu-item-icon-color-focus);
}

.p-menu .p-menuitem:not(.p-disabled) .p-menuitem-content:hover {
    color: var(--p-menu-item-text-color-focus);
    background: var(--p-menu-item-background-focus);
}

.p-menu .p-menuitem:not(.p-disabled) .p-menuitem-content:hover .p-menuitem-icon,
.p-menu .p-menuitem:not(.p-disabled) .p-menuitem-content:hover .p-submenu-icon {
    color: var(--p-menu-item-icon-color-focus);
}

.p-menu.p-menu-overlay {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

.p-menu .p-submenu-header {
    margin: 0;
    padding: 0.5rem 0.75rem;
    color: var(--p-menu-submenu-header-text-color);
    font-weight: 600;
}

.p-menu .p-menuitem-separator {
    border-top: 1px solid var(--p-menu-separator-border-color);
    margin: 2px 0;
}
`
};
