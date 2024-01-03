export default {
    variables: {
        common: {
            header: {
                paddingX: '{p.5}',
                paddingY: '{p.5}',
                borderWidth: '1px',
                borderStyle: 'solid',
                fontWeight: 700
            },
            content: {
                paddingX: '{p.5}',
                paddingY: '{p.5}',
                borderWidth: '1px',
                borderStyle: 'solid'
            },
            tab: {
                gap: '4px'
            }
        },
        light: {
            header: {
                borderColor: '{shade.300}',
                color: '{shade.600}',
                background: '{shade.100}',
                states: {
                    hover: {
                        background: '{shade.200}',
                        borderColor: '{shade.300}',
                        color: '{shade.800}'
                    },
                    active: {
                        background: '{shade.100}',
                        borderColor: '{shade.300}',
                        color: '{shade.800}',
                        states: {
                            hover: {
                                borderColor: '{shade.300}',
                                background: '{shade.200}',
                                color: '{shade.800}'
                            }
                        }
                    }
                }
            },
            content: {
                borderColor: '{shade.300}',
                background: '{shade.0}',
                color: '{shade.700}'
            }
        },
        dark: {
            header: {
                borderColor: '{shade.300}',
                color: '{shade.600}',
                background: '{shade.100}',
                states: {
                    hover: {
                        background: '{shade.200}',
                        borderColor: '{shade.300}',
                        color: '{shade.800}'
                    },
                    active: {
                        background: '{shade.100}',
                        borderColor: '{shade.300}',
                        color: '{shade.800}'
                    },
                    activeHover: {
                        borderColor: '{shade.300}',
                        background: '{shade.200}',
                        color: '{shade.800}'
                    }
                }
            },
            content: {
                borderColor: '{shade.300}',
                background: '{shade.0}',
                color: '{shade.700}'
            }
        }
    },
    css: `
.p-accordion-header-action {
    cursor: pointer;
    display: flex;
    align-items: center;
    user-select: none;
    position: relative;
    text-decoration: none;
    padding: var(--p-accordion-header-padding-y) var(--p-accordion-header-padding-x);
    border: var(--p-accordion-header-border-width) var(--p-accordion-header-border-style) var(--p-accordion-header-border-color);
    color: var(--p-accordion-header-color);
    background: var(--p-accordion-header-background);
    font-weight: var(--p-accordion-header-font-weight);
    border-radius: var(--p-border-radius);
    transition: var(--p-transition);
}
.p-accordion-header-action:focus {
    z-index: 1;
}
.p-accordion-header-text {
    line-height: 1;
}
.p-accordion-toggle-icon {
    margin-right: var(--p-inline-gap);
}
.p-accordion-header:not(.p-disabled) .p-accordion-header-action:focus-visible {
    outline: var(--p-focus-outline); /* @todo */
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: inset var(--p-focus-shadow);
}
.p-accordion-header:not(.p-highlight):not(.p-disabled):hover .p-accordion-header-action {
    background: var(--p-accordion-header-hover-background);
    border-color: var(--p-accordion-header-hover-border-color);
    color: var(--p-accordion-header-hover-color);
}
.p-accordion-header:not(.p-disabled).p-highlight .p-accordion-header-action {
    background: var(--p-accordion-header-active-background);
    border-color: var(--p-accordion-header-active-border-color);
    color: var(--p-accordion-header-active-color);
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}
.p-accordion-header:not(.p-disabled).p-highlight:hover .p-accordion-header-action {
    border-color: var(--p-accordion-header-active-hover-border-color);
    background: var(--p-accordion-header-active-hover-background);
    color: var(--p-accordion-header-active-hover-color);
}
.p-accordion-content {
    padding: var(--p-accordion-content-padding-y) var(--p-accordion-content-padding-x);
    border: var(--p-accordion-content-border-width) var(--p-accordion-content-border-style) var(--p-accordion-content-border-color);
    background: var(--p-accordion-content-background);
    color: var(--p-accordion-content-color);
    border-top: 0;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    border-bottom-right-radius: var(--p-border-radius);
    border-bottom-left-radius: var(--p-border-radius);
}
.p-accordion-tab {
    margin-bottom: var(--p-accordion-tab-gap);
}
    `
};
