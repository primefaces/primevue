export default {
    css: `
.p-tieredmenu {
    padding: 0.25rem 0.25rem;
    background: var(--p-tieredmenu-background);
    color: var(--p-tieredmenu-text-color);
    border: 1px solid var(--p-tieredmenu-border-color);
    border-radius: var(--p-rounded-base);
    min-width: 12.5rem;
}

.p-tieredmenu ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.p-tieredmenu-root-list {
    outline: 0 none;
}

.p-tieredmenu .p-submenu-list {
    position: absolute;
    min-width: 100%;
    z-index: 1;
    padding: 0.25rem 0.25rem;
    background: var(--p-tieredmenu-background);
    color: var(--p-tieredmenu-text-color);
    border: 1px solid var(--p-tieredmenu-border-color);
    border-radius: var(--p-rounded-base);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

.p-tieredmenu .p-menuitem-link {
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

.p-tieredmenu .p-menuitem-text {
    line-height: 1;
}

.p-tieredmenu .p-menuitem {
    position: relative;
    margin: 2px 0;
}

.p-tieredmenu .p-menuitem:first-child {
    margin-top: 0;
}
.p-tieredmenu .p-menuitem:last-child {
    margin-bottom: 0;
}

.p-tieredmenu .p-menuitem-content {
    transition: background-color var(--p-transition-duration), color var(--p-transition-duration);
    border-radius: var(--p-rounded-sm);
    color: var(--p-tieredmenu-item-text-color);
}

.p-tieredmenu .p-menuitem-icon {
    color: var(--p-tieredmenu-item-icon-color);
    margin-right: 0.5rem;
}

.p-tieredmenu .p-submenu-icon {
    color: var(--p-tieredmenu-item-icon-color);
    margin-left: auto;
    font-size: 0.875rem;
    width: 0.875rem;
    height: 0.875rem;
}

.p-tieredmenu .p-menuitem.p-focus > .p-menuitem-content {
    color: var(--p-tieredmenu-item-text-color-focus);
    background: var(--p-tieredmenu-item-background-focus);
}

.p-tieredmenu .p-menuitem.p-focus > .p-menuitem-content .p-menuitem-icon,
.p-tieredmenu .p-menuitem.p-focus > .p-menuitem-content .p-submenu-icon {
    color: var(--p-tieredmenu-item-icon-color-focus);
}

.p-tieredmenu .p-menuitem:not(.p-disabled) > .p-menuitem-content:hover {
    color: var(--p-tieredmenu-item-text-color-focus);
    background: var(--p-tieredmenu-item-background-focus);
}

.p-tieredmenu .p-menuitem:not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-icon,
.p-tieredmenu .p-menuitem:not(.p-disabled) > .p-menuitem-content:hover .p-submenu-icon {
    color: var(--p-tieredmenu-item-icon-color-focus);
}

.p-tieredmenu .p-menuitem.p-menuitem-active > .p-menuitem-content {
    color: var(--p-tieredmenu-item-text-color-focus);
    background: var(--p-tieredmenu-item-background-focus);
}

.p-tieredmenu .p-menuitem.p-menuitem-active > .p-menuitem-content .p-menuitem-icon,
.p-tieredmenu .p-menuitem.p-menuitem-active > .p-menuitem-content .p-submenu-icon {
    color: var(--p-tieredmenu-item-icon-color-focus);
}

.p-tieredmenu .p-menuitem-separator {
    border-top: 1px solid var(--p-tieredmenu-separator-border-color);
    margin: 2px 0;
}

.p-tieredmenu.p-tieredmenu-overlay {
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
