export default {
    variables: {
        colorScheme: {
            light: {
                panel: {
                    background: '{surface.0}',
                    borderColor: '{surface.200}',
                    textColor: '{surface.700}'
                },
                item: {
                    backgroundFocus: '{surface.100}',
                    text: {
                        color: '{surface.700}',
                        colorFocus: '{surface.800}'
                    },
                    icon: {
                        color: '{surface.400}',
                        colorFocus: '{surface.500}'
                    }
                }
            },
            dark: {}
        }
    },
    css: `
.p-panelmenu {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.p-panelmenu-panel {
    background: var(--p-panelmenu-panel-background);
    border: 1px solid var(--p-panelmenu-panel-border-color);
    color: var(--p-panelmenu-panel-text-color);
    border-radius: var(--p-rounded-base);
    padding: 0.25rem 0.25rem;
}

.p-panelmenu-header {
    outline: 0 none;
    border: 0 none;
}

.p-panelmenu-header-content {
    border: 0 none;
    color: var(--p-panelmenu-item-text-color);
    border-radius: var(--p-rounded-base);
    transition: background-color 0.2s, color 0.2s, outline-color 0.2s;
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
    color: var(--p-panelmenu-item-icon-color);
}

.p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content {
    background: var(--p-panelmenu-item-background-focus);
    color: var(--p-panelmenu-item-text-color-focus);
}

.p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content .p-submenu-icon,
.p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content .p-menuitem-icon {
    color: var(--p-panelmenu-item-icon-color-focus);
}

.p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover {
    background: var(--p-panelmenu-item-background-focus);
    color: var(--p-panelmenu-item-text-color-focus);
}

.p-panelmenu-header:not(.p-disabled).p-panelmenu-header-content:hover .p-submenu-icon,
.p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover .p-menuitem-icon {
    color: var(--p-panelmenu-item-icon-color-focus);
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
    transition: background-color var(--p-transition-duration), color var(--p-transition-duration);
    border-radius: var(--p-rounded-sm);
    color: var(--p-menu-item-text-color);
}

.p-panelmenu .p-menuitem.p-focus > .p-menuitem-content {
    color: var(--p-panelmenu-item-text-color-focus);
    background: var(--p-panelmenu-item-background-focus);
}

.p-panelmenu .p-menuitem.p-focus > .p-menuitem-icon {
    color: var(--p-panelmenu-item-icon-color-focus);
}

.p-panelmenu .p-menuitem:not(.p-disabled) > .p-menuitem-content:hover {
    color: var(--p-panelmenu-item-text-color-focus);
    background: var(--p-panelmenu-item-background-focus);
}

.p-panelmenu .p-menuitem:not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-icon, 
.p-panelmenu .p-menuitem:not(.p-disabled) > .p-menuitem-content:hover .p-submenu-icon {
    color: var(--p-panelmenu-item-icon-color-focus);
}
`
};
