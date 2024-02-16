export default {
    variables: {
        colorScheme: {
            light: {
                list: {
                    background: '{surface.0}',
                    borderColor: '{surface.200}'
                },
                header: {
                    textColor: '{surface.500}'
                },
                item: {
                    background: 'transparent',
                    backgroundHover: '{surface.100}',
                    backgroundFocus: '{surface.100}',
                    textColor: '{surface.700}',
                    textColorHover: '{surface.800}',
                    textColorFocus: '{surface.800}'
                },
                control: {
                    background: '{surface.100}',
                    backgroundHover: '{surface.200}',
                    backgroundActive: '{surface.300}',
                    borderColor: '{surface.100}',
                    borderColorHover: '{surface.200}',
                    borderColorActive: '{surface.300}',
                    textColor: '{surface.600}',
                    textColorHover: '{surface.700}',
                    textColorActive: '{surface.800}'
                }
            },
            dark: {
                list: {
                    background: '{surface.900}',
                    borderColor: '{surface.700}'
                },
                header: {
                    textColor: '{surface.400}'
                },
                item: {
                    background: 'transparent',
                    backgroundHover: '{surface.800}',
                    backgroundFocus: '{surface.800}',
                    textColor: '{surface.0}',
                    textColorHover: '{surface.0}',
                    textColorFocus: '{surface.0}'
                },
                control: {
                    background: '{surface.800}',
                    backgroundHover: '{surface.700}',
                    backgroundActive: '{surface.600}',
                    borderColor: '{surface.800}',
                    borderColorHover: '{surface.700}',
                    borderColorActive: '{surface.600}',
                    textColor: '{surface.300}',
                    textColorHover: '{surface.200}',
                    textColorActive: '{surface.100}'
                }
            }
        }
    },
    css: `
.p-orderlist {
    display: flex;
    gap: 1.125rem;
}

.p-orderlist-controls {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
}

.p-orderlist-list-container {
    flex: 1 1 auto;
    background: var(--p-orderlist-list-background);
    border: 1px solid var(--p-orderlist-list-border-color);
    border-radius: var(--p-rounded-base);
}

.p-orderlist .p-orderlist-header {
    color: var(--p-orderlist-header-text-color);
    border: 0 none;
    padding: 0.75rem 1rem 0.5rem 1rem;
    font-weight: 600;
}

.p-orderlist-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: auto;
    min-height: 12rem;
    max-height: 24rem;
    padding: 0.25rem 0.25rem;
    outline: 0 none;
}

.p-orderlist-item {
    cursor: pointer;
    overflow: hidden;
    position: relative;
    padding: 0.5rem 0.75rem;
    margin: 2px 0;
    border-radius: var(--p-rounded-base);
    border: 0 none;
    color: var(--p-orderlist-item-text-color);
    background: var(--p-orderlist-item-background);
    outline-color: transparent;
    transition: transform var(--p-transition-duration), background-color var(--p-transition-duration), color var(--p-transition-duration), outline-color var(--p-transition-duration);
}

.p-orderlist-item:first-child {
    margin-top: 0;
}

.p-orderlist-item:last-child {
    margin-bottom: 0;
}

.p-orderlist-item:not(.p-highlight):hover {
    color: var(--p-orderlist-item-text-color-focus);
    background: var(--p-orderlist-item-background-focus);
}

.p-orderlist-item.p-focus {
    color: var(--p-orderlist-item-text-color-focus);
    background: var(--p-orderlist-item-background-focus);
}

.p-orderlist-item.p-highlight {
    background: var(--p-list-item-highlight-background);
    color: var(--p-list-item-highlight-text-color);
}

.p-orderlist-item.p-highlight.p-focus {
    background: var(--p-list-item-highlight-background-focus);
    color: var(--p-list-item-highlight-text-color-focus);
}

.p-orderlist-controls .p-button {
    background: var(--p-orderlist-control-background);
    border: 1px solid var(--p-orderlist-control-border-color);
    color: var(--p-order-listcontrol-text-color);
    outline-color: transparent;
    transition: opacity var(--p-transition-duration), outline-color var(--p-transition-duration), background-color var(--p-transition-duration), color var(--p-transition-duration), border-color var(--p-transition-duration);
}

.p-orderlist-controls .p-button:not(:disabled):hover {
    background: var(--p-orderlist-control-background-hover);
    border: 1px solid var(--p-orderlist-control-border-color-hover);
    color: var(--p-order-listcontrol-text-color-hover);
}

.p-orderlist-controls .p-button:not(:disabled):active {
    background: var(--p-orderlist-control-background-active);
    border: 1px solid var(--p-orderlist-control-border-color-active);
    color: var(--p-order-listcontrol-text-color-active);
}

.p-orderlist-controls .p-button:focus-visible {
    outline: var(--p-focus-ring-width) var(--p-focus-ring-style) var(--p-button-primary-background);
    outline-offset: var(--p-focus-ring-offset);
}
`
};
