export default {
    variables: {
        colorScheme: {
            light: {
                info: {
                    background: 'color-mix(in srgb, {blue.50}, transparent 5%)',
                    borderColor: '{blue.200}',
                    textColor: '{blue.600}',
                    boxShadow: '0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)',
                    closeBackgroundHover: '{blue.100}'
                },
                success: {
                    background: 'color-mix(in srgb, {green.50}, transparent 5%)',
                    borderColor: '{green.200}',
                    textColor: '{green.600}',
                    boxShadow: '0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)',
                    closeBackgroundHover: '{green.100}'
                },
                warn: {
                    background: 'color-mix(in srgb,{yellow.50}, transparent 5%)',
                    borderColor: '{yellow.200}',
                    textColor: '{yellow.600}',
                    boxShadow: '0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)',
                    closeBackgroundHover: '{yellow.100}'
                },
                error: {
                    background: 'color-mix(in srgb, {red.50}, transparent 5%)',
                    borderColor: '{red.200}',
                    textColor: '{red.600}',
                    boxShadow: '0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)',
                    closeBackgroundHover: '{red.100}'
                },
                secondary: {
                    background: '{surface.100}',
                    borderColor: '{surface.200}',
                    textColor: '{surface.600}',
                    boxShadow: '0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)',
                    closeBackgroundHover: '{surface.200}'
                },
                contrast: {
                    background: '{surface.900}',
                    borderColor: '{surface.950}',
                    textColor: '{surface.50}',
                    boxShadow: '0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)',
                    closeBackgroundHover: '{surface.800}'
                }
            },
            dark: {
                info: {
                    background: 'color-mix(in srgb, {blue.500}, transparent 84%)',
                    borderColor: 'color-mix(in srgb, {blue.700}, transparent 64%)',
                    textColor: '{blue.500}',
                    boxShadow: '0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)',
                    closeBackgroundHover: 'rgba(255, 255, 255, 0.05)'
                },
                success: {
                    background: 'color-mix(in srgb, {green.500}, transparent 84%)',
                    borderColor: 'color-mix(in srgb, {green.700}, transparent 64%)',
                    textColor: '{green.500}',
                    boxShadow: '0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)',
                    closeBackgroundHover: 'rgba(255, 255, 255, 0.05)'
                },
                warn: {
                    background: 'color-mix(in srgb, {yellow.500}, transparent 84%)',
                    borderColor: 'color-mix(in srgb, {yellow.700}, transparent 64%)',
                    textColor: '{yellow.500}',
                    boxShadow: '0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)',
                    closeBackgroundHover: 'rgba(255, 255, 255, 0.05)'
                },
                error: {
                    background: 'color-mix(in srgb, {red.500}, transparent 84%)',
                    borderColor: 'color-mix(in srgb, {red.700}, transparent 64%)',
                    textColor: '{red.500}',
                    boxShadow: '0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)',
                    closeBackgroundHover: 'rgba(255, 255, 255, 0.05)'
                },
                secondary: {
                    background: '{surface.800}',
                    borderColor: '{surface.700}',
                    textColor: '{surface.300}',
                    boxShadow: '0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)',
                    closeBackgroundHover: '{surface.700}'
                },
                contrast: {
                    background: '{surface.0}',
                    borderColor: '{surface.100}',
                    textColor: '{surface.950}',
                    boxShadow: '0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)',
                    closeBackgroundHover: '{surface.100}'
                }
            }
        }
    },
    css: `
.p-message-wrapper {
    display: flex;
    align-items: center;
    padding: 0.5rem 0.75rem;
}

.p-message {
    margin: 1rem 0;
    border-radius: 6px;
}

.p-message-icon {
    flex-shrink: 0;
}

.p-message-close {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-left: auto;
    overflow: hidden;
    position: relative;
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 50%;
    background: transparent;
    transition: background-color var(--p-transition-duration), color var(--p-transition-duration), outline-color var(--p-transition-duration);
    outline-color: transparent;
    color: inherit;
}

.p-message-close:focus-visible {
    outline-width: var(--p-focus-ring-width);
    outline-style: var(--p-focus-ring-style);
    outline-offset: var(--p-focus-ring-offset);
}

.p-message-info {
    background: var(--p-message-info-background);
    border: 1px solid var(--p-message-info-border-color);
    color: var(--p-message-info-text-color);
    box-shadow: var(--p-message-info-box-shadow);
}

.p-message-info .p-message-close:focus-visible {
    outline-color: var(--p-message-info-text-color);
}

.p-message-info .p-message-close:hover {
    background: var(--p-message-info-close-background-hover);
}

.p-message-success {
    background: var(--p-message-success-background);
    border: 1px solid var(--p-message-success-border-color);
    color: var(--p-message-success-text-color);
    box-shadow: var(--p-message-success-box-shadow);
}

.p-message-success .p-message-close:focus-visible {
    outline-color: var(--p-message-success-text-color);
}

.p-message-success .p-message-close:hover {
    background: var(--p-message-success-close-background-hover);
}

.p-message-warn {
    background: var(--p-message-warn-background);
    border: 1px solid var(--p-message-warn-border-color);
    color: var(--p-message-warn-text-color);
    box-shadow: var(--p-message-warn-box-shadow);
}

.p-message-warn .p-message-close:focus-visible {
    outline-color: var(--p-message-warn-text-color);
}

.p-message-warn .p-message-close:hover {
    background: var(--p-message-warn-close-background-hover);
}

.p-message-error {
    background: var(--p-message-error-background);
    border: 1px solid var(--p-message-error-border-color);
    color: var(--p-message-error-text-color);
    box-shadow: var(--p-message-error-box-shadow);
}

.p-message-error .p-message-close:focus-visible {
    outline-color: var(--p-message-error-text-color);
}

.p-message-error .p-message-close:hover {
    background: var(--p-message-error-close-background-hover);
}

.p-message-secondary {
    background: var(--p-message-secondary-background);
    border: 1px solid var(--p-message-secondary-border-color);
    color: var(--p-message-secondary-text-color);
    box-shadow: var(--p-message-secondary-box-shadow);
}

.p-message-secondary .p-message-close:focus-visible {
    outline-color: var(--p-message-secondary-text-color);
}

.p-message-secondary .p-message-close:hover {
    background: var(--p-message-secondary-close-background-hover);
}

.p-message-contrast {
    background: var(--p-message-contrast-background);
    border: 1px solid var(--p-message-contrast-border-color);
    color: var(--p-message-contrast-text-color);
    box-shadow: var(--p-message-contrast-box-shadow);
}

.p-message-contrast .p-message-close:focus-visible {
    outline-color: var(--p-message-contrast-text-color);
}

.p-message-contrast .p-message-close:hover {
    background: var(--p-message-contrast-close-background-hover);
}

.p-message-text {
    font-size: 1rem;
    font-weight: 500;
}

.p-message-icon {
    font-size: 1rem;
    margin-right: 0.5rem;
}

.p-message .p-icon:not(.p-message-close-icon) {
    width: 1rem;
    height: 1rem;
}

.p-message-enter-from {
    opacity: 0;
}

.p-message-enter-active {
    transition: opacity 0.3s;
}

.p-message.p-message-leave-from {
    max-height: 1000px;
}

.p-message.p-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin: 0;
}

.p-message-leave-active {
    overflow: hidden;
    transition: max-height 0.3s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin 0.15s;
}

.p-message-leave-active .p-message-close {
    display: none;
}
`
};
