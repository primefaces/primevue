export default {
    variables: {
        common: {
            header: {
                borderWidth: '1px',
                borderStyle: 'solid',
                paddingX: '{p.5}',
                paddingY: '{p.5}',
                fontWeight: 700
            },
            headerIcon: {
                width: '2rem',
                height: '2rem',
                borderWidth: '0',
                borderStyle: 'none',
                borderRadius: '50%'
            },
            toggleableHeader: {
                paddingX: '{p.5}',
                paddingY: '{p.3}'
            },
            content: {
                paddingX: '{p.5}',
                paddingY: '{p.5}',
                borderWidth: '1px',
                borderStyle: 'solid'
            },
            footer: {
                paddingX: '{p.5}',
                paddingY: '{p.3}',
                borderWidth: '1px',
                borderStyle: 'solid'
            }
        },
        light: {
            header: {
                borderColor: '{surface.200}',
                background: '{surface.50}',
                color: '{surface.700}'
            },
            headerIcon: {
                color: '{surface.600}',
                borderColor: 'transparent',
                background: 'transparent',
                states: {
                    hover: {
                        color: '{surface.800}',
                        borderColor: 'transparent',
                        background: '{surface.100}'
                    },
                    focus: {}
                }
            },
            content: {
                borderColor: '{surface.200}',
                background: '{surface.0}',
                color: '{surface.700}'
            },
            footer: {
                borderColor: '{surface.200}',
                background: '{surface.0}',
                color: '{surface.700}'
            }
        },
        dark: {
            header: {
                borderColor: '{surface.200}',
                background: '{surface.50}',
                color: '{surface.700}'
            },
            headerIcon: {
                color: '{surface.600}',
                borderColor: 'transparent',
                background: 'transparent',
                states: {
                    hover: {
                        color: '{surface.800}',
                        borderColor: 'transparent',
                        background: '{surface.100}'
                    }
                }
            },
            content: {
                borderColor: '{surface.200}',
                background: '{surface.0}',
                color: '{surface.700}'
            },
            footer: {
                borderColor: '{surface.200}',
                background: '{surface.0}',
                color: '{surface.700}'
            }
        }
    },
    css: `
.p-panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: var(--p-panel-header-border-width) var(--p-panel-header-border-style) var(--p-panel-header-border-color);
    padding: var(--p-panel-header-padding-y) var(--p-panel-header-padding-x);
    background: var(--p-panel-header-background);
    color: var(--p-panel-header-color);
    border-top-right-radius: var(--p-border-radius);
    border-top-left-radius: var(--p-border-radius);
}
.p-panel-title {
    line-height: 1;
    font-weight: var(--p-panel-header-font-weight);
}
.p-panel-header-icon {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    width: var(--p-panel-header-icon-width);
    height: var(--p-panel-header-icon-height);
    color: var(--p-panel-header-icon-color);
    border: var(--p-panel-header-icon-border-width) var(--p-panel-header-icon-border-style) var(--p-panel-header-icon-border-color);
    background: var(--p-panel-header-icon-background);
    border-radius: var(--p-panel-header-icon-border-radius);
    transition: var(--p-transition);
}
.p-panel-header-icon:enabled:hover {
    color: var(--p-panel-header-icon-hover-color);
    border-color: var(--p-panel-header-icon-hover-border-color);
    background: var(--p-panel-header-icon-hover-background);
}
.p-panel-header-icon:focus-visible {
    outline: var(--p-focus-outline); /* @todo */
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: var(--p-focus-shadow);
}
.p-panel-toggleable > .p-panel-header {
    padding: var(--p-panel-toggleable-header-padding-y) var(--p-panel-toggleable-header-padding-x);
}
.p-panel-content {
    padding: var(--p-panel-content-padding-y) var(--p-panel-content-padding-x);
    border: var(--p-panel-content-border-width) var(--p-panel-content-border-style) var(--p-panel-content-border-color);
    background: var(--p-panel-content-background);
    color: var(--p-panel-content-color);
    border-top: 0;
}
.p-panel-content:last-child {
    border-bottom-right-radius: var(--p-border-radius);
    border-bottom-left-radius: var(--p-border-radius);
}
.p-panel-footer {
    padding: var(--p-panel-footer-padding-y) var(--p-panel-footer-padding-x);
    border: var(--p-panel-footer-border-width) var(--p-panel-footer-border-style) var(--p-panel-footer-border-color);
    background: var(--p-panel-footer-background);
    color: var(--p-panel-footer-color);
    border-bottom-right-radius: var(--p-border-radius);
    border-bottom-left-radius: var(--p-border-radius);
    border-top: 0;
}
    `
};
