export default {
    variables: {
        colorScheme: {
            light: {
                nav: {
                    background: '{surface.0}',
                    borderColor: '{surface.200}'
                },
                header: {
                    borderColor: '{surface.200}',
                    textColor: '{surface.500}',
                    textColorHover: '{surface.700}'
                }
            },
            dark: {
                nav: {
                    background: '{surface.900}',
                    borderColor: '{surface.700}'
                },
                header: {
                    borderColor: '{surface.700}',
                    textColor: '{surface.400}',
                    textColorHover: '{surface.0}'
                }
            }
        }
    },
    css: `
.p-tabmenu {
    overflow-x: auto;
}

.p-tabmenu-nav {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
    flex: 1 1 auto;
    background: var(--p-tabmenu-nav-background);
    border: 1px solid var(--p-tabmenu-nav-border-color);
    border-width: 0 0 1px 0;
    position: relative;
}

.p-tabmenuitem .p-menuitem-link {
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    border-style: solid;
    border-width: 0 0 1px 0;
    border-color: transparent transparent var(--p-tabmenu-header-border-color) transparent;
    color: var(--p-tabmenu-header-text-color);
    padding: 1rem 1.125rem;
    font-weight: 600;
    border-top-right-radius: var(--p-rounded-base);
    border-top-left-radius: var(--p-rounded-base);
    transition: color var(--p-transition-duration), outline-color var(--p-transition-duration);
    margin: 0 0 -1px 0;
    outline-color: transparent;
}

.p-tabmenuitem .p-menuitem-link:focus-visible {
    outline: var(--p-focus-ring-width) var(--p-focus-ring-style) var(--p-focus-ring-color);
    outline-offset: -1px;
}

.p-tabmenuitem .p-menuitem-icon {
    margin-right: 0.5rem;
}

.p-tabmenu-nav .p-menuitem-text {
    line-height: 1;
}

.p-tabmenuitem:not(.p-highlight):not(.p-disabled):hover .p-menuitem-link {
    color: var(--p-tabmenu-header-text-color-hover);
}

.p-tabmenuitem.p-highlight .p-menuitem-link {
    color: var(--p-primary-color);
}

.p-tabmenu-ink-bar {
    z-index: 1;
    display: block;
    position: absolute;
    bottom: -1px;
    height: 1px;
    background-color: var(--p-primary-color);
    transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
}

.p-tabmenu::-webkit-scrollbar {
    display: none;
}
`
};
