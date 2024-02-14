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
                },
                toggleIcon: {
                    color: '{surface.500}',
                    colorHover: '{surface.600}',
                    backgroundHover: '{surface.100}'
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
                },
                toggleIcon: {
                    color: '{surface.400}',
                    colorHover: '{surface.300}',
                    backgroundHover: '{surface.800}'
                }
            }
        }
    },
    css: `
.p-menubar {
    display: flex;
    align-items: center;
    padding: 0.5rem 0.5rem;
    background: var(--p-menubar-background);
    color: var(--p-menubar-text-color);
    border: 1px solid var(--p-menubar-border-color);
    border-radius: var(--p-rounded-base);
}

.p-menubar ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.p-menubar .p-menuitem-link {
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

.p-menubar .p-menuitem-text {
    line-height: 1;
}

.p-menubar-root-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    outline: 0 none;
}

.p-menubar-root-list > .p-menuitem-active > .p-submenu-list {
    display: block;
}

.p-menubar .p-menuitem-content {
    transition: background-color var(--p-transition-duration), color var(--p-transition-duration);
    border-radius: var(--p-rounded-sm);
    color: var(--p-menubar-item-text-color);
}

.p-menubar .p-menuitem-icon {
    color: var(--p-menubar-item-icon-color);
    margin-right: 0.5rem;
}

.p-menubar .p-menuitem.p-focus > .p-menuitem-content {
    color: var(--p-menubar-item-text-color-focus);
    background: var(--p-menubar-item-background-focus);
}

.p-menubar .p-menuitem.p-focus > .p-menuitem-content .p-menuitem-icon,
.p-menubar .p-menuitem.p-focus > .p-menuitem-content .p-submenu-icon {
    color: var(--p-menubar-item-icon-color-focus);
}

.p-menubar .p-menuitem:not(.p-disabled) > .p-menuitem-content:hover {
    color: var(--p-menubar-item-text-color-focus);
    background: var(--p-menubar-item-background-focus);
}

.p-menubar .p-menuitem:not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-icon, 
.p-menubar .p-menuitem:not(.p-disabled) > .p-menuitem-content:hover .p-submenu-icon {
    color: var(--p-menubar-item-icon-color-focus);
}

.p-menubar .p-menuitem-active > .p-menuitem-content {
    color: var(--p-menubar-item-text-color-focus);
    background: var(--p-menubar-item-background-focus);
}

.p-menubar .p-menuitem-active > .p-menuitem-content .p-menuitem-icon,
.p-menubar .p-menuitem-active > .p-menuitem-content .p-submenu-icon {
    color: var(--p-menubar-item-icon-color-focus);
}

.p-menubar .p-submenu-icon {
    color: var(--p-menubar-item-icon-color);
    margin-left: auto;
    font-size: 0.875rem;
    width: 0.875rem;
    height: 0.875rem;
}

.p-menubar-root-list > .p-menuitem > .p-menuitem-content .p-submenu-icon {
    margin-left: 0.5rem;
}

.p-menubar .p-submenu-list {
    display: none;
    position: absolute;
    min-width: 12.5rem;
    z-index: 1;
    padding: 0.25rem 0.25rem;
    background: var(--p-menubar-background);
    color: var(--p-menubar-text-color);
    border: 1px solid var(--p-menubar-border-color);
    border-radius: var(--p-rounded-base);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

.p-menubar .p-submenu-list .p-menuitem-separator {
    border-top: 1px solid var(--p-menubar-separator-border-color);
    margin: 2px 0;
}

.p-menubar .p-submenu-list .p-menuitem {
    position: relative;
    margin: 2px 0;
}

.p-menubar .p-submenu-list .p-menuitem:first-child {
    margin-top: 0;
}

.p-menubar .p-submenu-list .p-menuitem:last-child {
    margin-bottom: 0;
}

.p-menubar .p-submenu-list > .p-menuitem-active > .p-submenu-list {
    display: block;
    left: 100%;
    top: 0;
}

.p-menubar .p-menubar-end {
    margin-left: auto;
    align-self: center;
}

.p-menubar-button {
    display: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 1.75rem;
    height: 1.75rem;
    position: relative;
    color: var(--p-menubar-toggle-icon-color);
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color var(--p-transition-duration), color var(--p-transition-duration), outline-color var(--p-transition-duration);
    outline-color: transparent;
}

.p-menubar-button:hover {
    color: var(--p-menubar-toggle-icon-color-hover);
    background: var(--p-menubar-toggle-icon-background-hover);
}

.p-menubar-button:focus-visible {
    outline: var(--p-focus-ring-width) var(--p-focus-ring-style) var(--p-focus-ring-color);
    outline-offset: var(--p-focus-ring-offset);
}

.p-menubar-mobile {
    position: relative;
}

.p-menubar-mobile .p-menubar-button {
    display: flex;
}

.p-menubar-mobile .p-menubar-root-list {
    position: absolute;
    display: none;
    width: 100%;
    padding: 0.25rem 0.25rem;
    background: var(--p-menubar-background);
    border: 1px solid var(--p-menubar-border-color);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

.p-menubar-mobile-active .p-menubar-root-list {
    display: flex;
    flex-direction: column;
    top: 100%;
    left: 0;
    z-index: 1;
}

.p-menubar-mobile .p-menubar-root-list .p-menuitem {
    width: 100%;
    position: static;
}

.p-menubar-mobile .p-menubar-root-list .p-menuitem-separator {
    border-top: 1px solid #e2e8f0;
    margin: 2px 0;
}

.p-menubar-mobile .p-menubar-root-list > .p-menuitem {
    position: relative;
    margin: 2px 0;
}

.p-menubar-mobile .p-menubar-root-list > .p-menuitem:first-child {
    margin-top: 0;
}

.p-menubar-mobile .p-menubar-root-list > .p-menuitem:last-child {
    margin-bottom: 0;
}

.p-menubar-mobile .p-menubar-root-list > .p-menuitem > .p-menuitem-content .p-submenu-icon {
    margin-left: auto;
    transition: transform 0.2s;
}

.p-menubar-mobile .p-menubar-root-list > .p-menuitem-active > .p-menuitem-content .p-submenu-icon {
    transform: rotate(-180deg);
}

.p-menubar-mobile .p-submenu-list .p-submenu-icon {
    transition: transform 0.2s;
    transform: rotate(90deg);
}

.p-menubar-mobile  .p-menuitem-active > .p-menuitem-content .p-submenu-icon {
    transform: rotate(-90deg);
}

.p-menubar-mobile .p-submenu-list {
    width: 100%;
    position: static;
    box-shadow: none;
    border: 0 none;
    padding-left: 1rem;
}
`
};
