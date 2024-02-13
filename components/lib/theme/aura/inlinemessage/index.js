export default {
    variables: {
        colorScheme: {
            light: {
                info: {
                    background: 'color-mix(in srgb, {blue.50}, transparent 5%)',
                    borderColor: '{blue.200}',
                    textColor: '{blue.600}',
                    boxShadow: '0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)'
                },
                success: {
                    background: 'color-mix(in srgb, {green.50}, transparent 5%)',
                    borderColor: '{green.200}',
                    textColor: '{green.600}',
                    boxShadow: '0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)'
                },
                warn: {
                    background: 'color-mix(in srgb,{yellow.50}, transparent 5%)',
                    borderColor: '{yellow.200}',
                    textColor: '{yellow.600}',
                    boxShadow: '0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)'
                },
                error: {
                    background: 'color-mix(in srgb, {red.50}, transparent 5%)',
                    borderColor: '{red.200}',
                    textColor: '{red.600}',
                    boxShadow: '0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)'
                },
                secondary: {
                    background: 'color-mix(in srgb, {surface.100}, transparent 5%)',
                    borderColor: '{surface.200}',
                    textColor: '{surface.600}',
                    boxShadow: '0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)'
                },
                contrast: {
                    background: 'color-mix(in srgb, {surface.900}, transparent 5%)',
                    borderColor: '{surface.950}',
                    textColor: '{surface.50}',
                    boxShadow: '0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)'
                }
            },
            dark: {
                info: {
                    background: 'color-mix(in srgb, {blue.500}, transparent 84%)',
                    borderColor: 'color-mix(in srgb, {blue.700}, transparent 64%)',
                    textColor: '{blue.500}',
                    boxShadow: '0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)'
                },
                success: {
                    background: 'color-mix(in srgb, {green.500}, transparent 84%)',
                    borderColor: 'color-mix(in srgb, {green.700}, transparent 64%)',
                    textColor: '{green.500}',
                    boxShadow: '0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)'
                },
                warn: {
                    background: 'color-mix(in srgb, {yellow.500}, transparent 84%)',
                    borderColor: 'color-mix(in srgb, {yellow.700}, transparent 64%)',
                    textColor: '{yellow.500}',
                    boxShadow: '0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)'
                },
                error: {
                    background: 'color-mix(in srgb, {red.500}, transparent 84%)',
                    borderColor: 'color-mix(in srgb, {red.700}, transparent 64%)',
                    textColor: '{red.500}',
                    boxShadow: '0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)'
                },
                secondary: {
                    background: 'color-mix(in srgb, {surface.800}, transparent 5%)',
                    borderColor: '{surface.700}',
                    textColor: '{surface.300}',
                    boxShadow: '0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)'
                },
                contrast: {
                    background: 'color-mix(in srgb, {surface.0}, transparent 5%)',
                    borderColor: '{surface.100}',
                    textColor: '{surface.950}',
                    boxShadow: '0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)'
                }
            }
        }
    },
    css: `
.p-inline-message {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 0.75rem;
    margin: 0;
    border-radius: var(--p-rounded-base);
}

.p-inline-message-text {
    font-weight: 500;
}

.p-inline-message-icon {
    flex-shrink: 0;
    margin-right: 0.5rem;
}

.p-inline-message-icon-only .p-inline-message-text {
    visibility: hidden;
    width: 0;
}

.p-fluid .p-inline-message {
    display: flex;
}

.p-inline-message-info {
    background: var(--p-inlinemessage-info-background);
    border: 1px solid var(--p-inlinemessage-info-border-color);
    color: var(--p-inlinemessage-info-text-color);
    box-shadow: var(--p-inlinemessage-info-box-shadow);
}
.p-inline-message-info .p-inline-message-icon {
    color: var(--p-inlinemessage-info-text-color);
}

.p-inline-message-success {
    background: var(--p-inlinemessage-success-background);
    border: 1px solid var(--p-inlinemessage-success-border-color);
    color: var(--p-inlinemessage-success-text-color);
    box-shadow: var(--p-inlinemessage-success-box-shadow);
}
.p-inline-message-success .p-inline-message-icon {
    color: var(--p-inlinemessage-success-text-color);
}

.p-inline-message-warn {
    background: var(--p-inlinemessage-warn-background);
    border: 1px solid var(--p-inlinemessage-warn-border-color);
    color: var(--p-inlinemessage-warn-text-color);
    box-shadow: var(--p-inlinemessage-warn-box-shadow);
}
.p-inline-message-warn .p-inline-message-icon {
    color: var(--p-inlinemessage-warn-text-color);
}

.p-inline-message-error {
    background: var(--p-inlinemessage-error-background);
    border: 1px solid var(--p-inlinemessage-error-border-color);
    color: var(--p-inlinemessage-error-text-color);
    box-shadow: var(--p-inlinemessage-error-box-shadow);
}
.p-inline-message-error .p-inline-message-icon {
    color: var(--p-inlinemessage-error-text-color);
}

.p-inline-message-secondary {
    background: var(--p-inlinemessage-secondary-background);
    border: 1px solid var(--p-inlinemessage-secondary-border-color);
    color: var(--p-inlinemessage-secondary-text-color);
    box-shadow: var(--p-inlinemessage-secondary-box-shadow);
}
.p-inline-message-secondary .p-inline-message-icon {
    color: var(--p-inlinemessage-secondary-text-color);
}

.p-inline-message-contrast {
    background: var(--p-inlinemessage-contrast-background);
    border: 1px solid var(--p-inlinemessage-contrast-border-color);
    color: var(--p-inlinemessage-contrast-text-color);
    box-shadow: var(--p-inlinemessage-contrast-box-shadow);
}
.p-inline-message-contrast .p-inline-message-icon {
    color: var(--p-inlinemessage-contrast-text-color);
}

.p-inline-message-icon-only .p-inline-message-icon {
    margin-right: 0;
}    
`
};
