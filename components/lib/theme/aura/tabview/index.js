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
                },
                navigatorIcon: {
                    background: '{surface.0}',
                    color: '{surface.500}',
                    colorHover: '{surface.700}',
                    boxShadow: '0px 0px 10px 50px rgba(255, 255, 255, 0.6)'
                },
                content: {
                    background: '{surface.0}',
                    textColor: '{surface.700}'
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
                },
                navigatorIcon: {
                    background: '{surface.900}',
                    color: '{surface.400}',
                    colorHover: '{surface.0}',
                    boxShadow: '0px 0px 10px 50px color-mix(in srgb, var(--p-surface-900), transparent 50%)'
                },
                content: {
                    background: '{surface.900}',
                    textColor: '{surface.0}'
                }
            }
        }
    },
    css: `
.p-tabview-nav-container {
    position: relative;
}

.p-tabview-scrollable > .p-tabview-nav-container {
    overflow: hidden;
}

.p-tabview-nav-content {
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scrollbar-width: none;
    overscroll-behavior: contain auto;
}

.p-tabview-nav {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
    flex: 1 1 auto;
    background: var(--p-tabview-nav-background);
    border: 1px solid var(--p-tabview-nav-border-color);
    border-width: 0 0 1px 0;
    position: relative;
}

.p-tabview-nav-link {
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    border-style: solid;
    border-width: 0 0 1px 0;
    border-color: transparent transparent var(--p-tabview-header-border-color) transparent;
    color: var(--p-tabview-header-text-color);
    padding: 1rem 1.125rem;
    font-weight: 600;
    border-top-right-radius: var(--p-rounded-base);
    border-top-left-radius: var(--p-rounded-base);
    transition: color var(--p-transition-duration), outline-color var(--p-transition-duration);
    margin: 0 0 -1px 0;
    outline-color: transparent;
}

.p-tabview-header:not(.p-disabled) .p-tabview-nav-link:focus-visible {
    outline: var(--p-focus-ring-width) var(--p-focus-ring-style) var(--p-focus-ring-color);
    outline-offset: -1px;
}

.p-tabview-header:not(.p-highlight):not(.p-disabled):hover >.p-tabview-nav-link {
    color: var(--p-tabview-header-text-color-hover);
}

.p-tabview-header.p-highlight > .p-tabview-nav-link {
    color: var(--p-primary-color);
}

.p-tabview-ink-bar {
    display: none;
    z-index: 1;
}

.p-tabview-title {
    line-height: 1;
    white-space: nowrap;
}

.p-tabview-nav-btn {
    position: absolute;
    top: 0;
    z-index: 2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--p-tabview-navigator-icon-background);
    color: var(--p-tabview-navigator-icon-color);
    width: 2.5rem;
    border-radius: 0;
    outline-color: transparent;
    transition: color var(--p-transition-duration), outline-color var(--p-transition-duration);
    box-shadow: var(--p-tabview-navigator-icon-box-shadow);
}

.p-tabview-nav-btn:focus-visible {
    outline: var(--p-focus-ring-width) var(--p-focus-ring-style) var(--p-focus-ring-color);
    outline-offset: -2px;
}

.p-tabview-nav-btn:hover {
    color: var(--p-tabview-navigator-icon-color-hover);
}

.p-tabview-nav-prev {
    left: 0;
}

.p-tabview-nav-next {
    right: 0;
}

.p-tabview-nav-content::-webkit-scrollbar {
    display: none;
}

.p-tabview-panels {
    background: var(--p-tabview-content-background);
    color: var(--p-tabview-content-text-color);
    padding: 0.875rem 1.125rem 1.125rem 1.125rem;
}

.p-tabview-ink-bar {
    z-index: 1;
    display: block;
    position: absolute;
    bottom: -1px;
    height: 1px;
    background-color: var(--p-primary-color);
    transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
}
`
};
