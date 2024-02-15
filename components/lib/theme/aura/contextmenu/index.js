export default {
    variables: {
        colorScheme: {
            light: {
                root: {
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
                },
                separator: {
                    borderColor: '{surface.200}'
                }
            },
            dark: {
                root: {
                    background: '{surface.900}',
                    borderColor: '{surface.700}',
                    textColor: '{surface.0}'
                },
                item: {
                    backgroundFocus: '{surface.800}',
                    text: {
                        color: '{surface.0}',
                        colorFocus: '{surface.0}'
                    },
                    icon: {
                        color: '{surface.500}',
                        colorFocus: '{surface.400}'
                    }
                },
                separator: {
                    borderColor: '{surface.700}'
                }
            }
        }
    },
    css: `
.p-contextmenu {
    padding: 0.25rem 0.25rem;
    background: var(--p-contextmenu-background);
    color: var(--p-contextmenu-text-color);
    border: 1px solid var(--p-contextmenu-border-color);
    border-radius: var(--p-rounded-base);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
    min-width: 12.5rem;
}

.p-contextmenu ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.p-contextmenu-root-list {
    outline: 0 none;
}

.p-contextmenu .p-submenu-list {
    position: absolute;
    min-width: 100%;
    z-index: 1;
    padding: 0.25rem 0.25rem;
    background: var(--p-contextmenu-background);
    color: var(--p-contextmenu-text-color);
    border: 1px solid var(--p-contextmenu-border-color);
    border-radius: var(--p-rounded-base);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

.p-contextmenu .p-menuitem-link {
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

.p-contextmenu .p-menuitem-text {
    line-height: 1;
}

.p-contextmenu .p-menuitem {
    position: relative;
    margin: 2px 0;
}

.p-contextmenu .p-menuitem:first-child {
    margin-top: 0;
}
.p-contextmenu .p-menuitem:last-child {
    margin-bottom: 0;
}

.p-contextmenu .p-menuitem-content {
    transition: background-color var(--p-transition-duration), color var(--p-transition-duration);
    border-radius: var(--p-rounded-sm);
    color: var(--p-contextmenu-item-text-color);
}

.p-contextmenu .p-menuitem-icon {
    color: var(--p-contextmenu-item-icon-color);
    margin-right: 0.5rem;
}

.p-contextmenu .p-submenu-icon {
    color: var(--p-contextmenu-item-icon-color);
    margin-left: auto;
    font-size: 0.875rem;
    width: 0.875rem;
    height: 0.875rem;
} 

.p-contextmenu .p-menuitem.p-focus > .p-menuitem-content {
    color: var(--p-contextmenu-item-text-color-focus);
    background: var(--p-contextmenu-item-background-focus);
}

.p-contextmenu .p-menuitem.p-focus > .p-menuitem-content .p-menuitem-icon,
.p-contextmenu .p-menuitem.p-focus > .p-menuitem-content .p-submenu-icon {
    color: var(--p-contextmenu-item-icon-color-focus);
}

.p-contextmenu .p-menuitem:not(.p-disabled) > .p-menuitem-content:hover {
    color: var(--p-contextmenu-item-text-color-focus);
    background: var(--p-contextmenu-item-background-focus);
}

.p-contextmenu .p-menuitem:not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-icon, 
.p-contextmenu .p-menuitem:not(.p-disabled) > .p-menuitem-content:hover .p-submenu-icon {
    color: var(--p-contextmenu-item-icon-color-focus);
}

.p-contextmenu .p-menuitem.p-menuitem-active > .p-menuitem-content {
    color: var(--p-contextmenu-item-text-color-focus);
    background: var(--p-contextmenu-item-background-focus);
}

.p-contextmenu .p-menuitem.p-menuitem-active > .p-menuitem-content .p-menuitem-icon,
.p-contextmenu .p-menuitem.p-menuitem-active > .p-menuitem-content .p-submenu-icon {
    color: var(--p-contextmenu-item-icon-color-focus);
}

.p-contextmenu .p-menuitem-separator {
    border-top: 1px solid var(--p-contextmenu-separator-border-color);
    margin: 2px 0;
}

.p-contextmenu-enter-from,
.p-contextmenu-leave-active {
    opacity: 0;
}

.p-contextmenu-enter-active {
    transition: opacity 250ms;
}
`
};
