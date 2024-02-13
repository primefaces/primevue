export default {
    variables: {
        colorScheme: {
            light: {
                blur: '1.5px',
                info: {
                    background: 'color-mix(in srgb, {blue.50}, transparent 5%)',
                    borderColor: '{blue.200}',
                    textColor: '{blue.600}',
                    detailTextColor: '{surface.700}',
                    boxShadow: '0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)',
                    closeBackgroundHover: '{blue.100}'
                },
                success: {
                    background: 'color-mix(in srgb, {green.50}, transparent 5%)',
                    borderColor: '{green.200}',
                    textColor: '{green.600}',
                    detailTextColor: '{surface.700}',
                    boxShadow: '0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)',
                    closeBackgroundHover: '{green.100}'
                },
                warn: {
                    background: 'color-mix(in srgb,{yellow.50}, transparent 5%)',
                    borderColor: '{yellow.200}',
                    textColor: '{yellow.600}',
                    detailTextColor: '{surface.700}',
                    boxShadow: '0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)',
                    closeBackgroundHover: '{yellow.100}'
                },
                error: {
                    background: 'color-mix(in srgb, {red.50}, transparent 5%)',
                    borderColor: '{red.200}',
                    textColor: '{red.600}',
                    detailTextColor: '{surface.700}',
                    boxShadow: '0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)',
                    closeBackgroundHover: '{red.100}'
                },
                secondary: {
                    background: '{surface.100}',
                    borderColor: '{surface.200}',
                    textColor: '{surface.600}',
                    detailTextColor: '{surface.700}',
                    boxShadow: '0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)',
                    closeBackgroundHover: '{surface.200}'
                },
                contrast: {
                    background: '{surface.900}',
                    borderColor: '{surface.950}',
                    textColor: '{surface.50}',
                    detailTextColor: '{surface.0}',
                    boxShadow: '0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)',
                    closeBackgroundHover: '{surface.800}'
                }
            },
            dark: {
                blur: '10px',
                info: {
                    background: 'color-mix(in srgb, {blue.500}, transparent 84%)',
                    borderColor: 'color-mix(in srgb, {blue.700}, transparent 64%)',
                    textColor: '{blue.500}',
                    detailTextColor: '{surface.0}',
                    boxShadow: '0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)',
                    closeBackgroundHover: 'rgba(255, 255, 255, 0.05)'
                },
                success: {
                    background: 'color-mix(in srgb, {green.500}, transparent 84%)',
                    borderColor: 'color-mix(in srgb, {green.700}, transparent 64%)',
                    textColor: '{green.500}',
                    detailTextColor: '{surface.0}',
                    boxShadow: '0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)',
                    closeBackgroundHover: 'rgba(255, 255, 255, 0.05)'
                },
                warn: {
                    background: 'color-mix(in srgb, {yellow.500}, transparent 84%)',
                    borderColor: 'color-mix(in srgb, {yellow.700}, transparent 64%)',
                    textColor: '{yellow.500}',
                    detailTextColor: '{surface.0}',
                    boxShadow: '0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)',
                    closeBackgroundHover: 'rgba(255, 255, 255, 0.05)'
                },
                error: {
                    background: 'color-mix(in srgb, {red.500}, transparent 84%)',
                    borderColor: 'color-mix(in srgb, {red.700}, transparent 64%)',
                    textColor: '{red.500}',
                    detailTextColor: '{surface.0}',
                    boxShadow: '0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)',
                    closeBackgroundHover: 'rgba(255, 255, 255, 0.05)'
                },
                secondary: {
                    background: '{surface.800}',
                    borderColor: '{surface.700}',
                    textColor: '{surface.300}',
                    detailTextColor: '{surface.0}',
                    boxShadow: '0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)',
                    closeBackgroundHover: '{surface.700}'
                },
                contrast: {
                    background: '{surface.0}',
                    borderColor: '{surface.100}',
                    textColor: '{surface.950}',
                    detailTextColor: '{surface.950}',
                    boxShadow: '0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)',
                    closeBackgroundHover: '{surface.100}'
                }
            }
        }
    },
    css: `
.p-toast {
    width: 25rem;
    white-space: pre-line;
    word-break: break-word;
}

.p-toast-message {
    backdrop-filter: blur(var(--p-toast-blur));
    margin: 0 0 1rem 0;
    border-radius: var(--p-rounded-base);
}

.p-toast-message-icon {
    flex-shrink: 0;
    font-size: 1.125rem;
    width: 1.125rem;
    height: 1.125rem;
}

.p-toast-message-content {
    display: flex;
    align-items: flex-start;
    padding: 0.75rem;
    gap: 0.5rem;
}

.p-toast-message-text {
    flex: 1 1 auto;
}

.p-toast-summary {
    font-weight: 500;
}
.p-toast-detail {
    margin-top: 0.5rem;
    font-size: 0.875rem;
}

.p-toast-icon-close {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    border-radius: 50%;
    cursor: pointer;
    background: transparent;
    transition: background-color var(--p-transition-duration), color var(--p-transition-duration), outline-color var(--p-transition-duration);
    outline-color: transparent;
    color: inherit;
    width: 1.75rem;
    height: 1.75rem;
    margin-top: -25%;
    right: -25%;
}

.p-toast-icon-close:focus-visible {
    outline-width: var(--p-focus-ring-width);
    outline-style: var(--p-focus-ring-style);
    outline-offset: var(--p-focus-ring-offset);
}

.p-toast-message-info {
    background: var(--p-toast-info-background);
    border: 1px solid var(--p-toast-info-border-color);
    color: var(--p-toast-info-text-color);
    box-shadow: var(--p-toast-info-box-shadow);
}

.p-toast-message-info .p-toast-detail {
    color: var(--p-toast-info-detail-text-color);
}

.p-toast-message-info .p-toast-icon-close:focus-visible {
    outline-color: var(--p-toast-info-text-color);
}

.p-toast-message-info .p-toast-icon-close:hover {
    background: var(--p-toast-info-close-background-hover);
}

.p-toast-message-success {
    background: var(--p-toast-success-background);
    border: 1px solid var(--p-toast-success-border-color);
    color: var(--p-toast-success-text-color);
    box-shadow: var(--p-toast-success-box-shadow);
}

.p-toast-message-success .p-toast-detail {
    color: var(--p-toast-success-detail-text-color);
}

.p-toast-message-success .p-toast-icon-close:focus-visible {
    outline-color: var(--p-toast-success-text-color);
}

.p-toast-message-success .p-toast-icon-close:hover {
    background: var(--p-toast-success-close-background-hover);
}

.p-toast-message-warn {
    background: var(--p-toast-warn-background);
    border: 1px solid var(--p-toast-warn-border-color);
    color: var(--p-toast-warn-text-color);
    box-shadow: var(--p-toast-warn-box-shadow);
}

.p-toast-message-warn .p-toast-detail {
    color: var(--p-toast-warn-detail-text-color);
}

.p-toast-message-warn .p-toast-icon-close:focus-visible {
    outline-color: var(--p-toast-warn-text-color);
}

.p-toast-message-warn .p-toast-icon-close:hover {
    background: var(--p-toast-warn-close-background-hover);
}

.p-toast-message-error {
    background: var(--p-toast-error-background);
    border: 1px solid var(--p-toast-error-border-color);
    color: var(--p-toast-error-text-color);
    box-shadow: var(--p-toast-error-box-shadow);
}

.p-toast-message-error .p-toast-detail {
    color: var(--p-toast-error-detail-text-color);
}

.p-toast-message-error .p-toast-icon-close:focus-visible {
    outline-color: var(--p-toast-error-text-color);
}

.p-toast-message-error .p-toast-icon-close:hover {
    background: var(--p-toast-error-close-background-hover);
}

.p-toast-message-secondary {
    background: var(--p-toast-secondary-background);
    border: 1px solid var(--p-toast-secondary-border-color);
    color: var(--p-toast-secondary-text-color);
    box-shadow: var(--p-toast-secondary-box-shadow);
}

.p-toast-message-secondary .p-toast-detail {
    color: var(--p-toast-secondary-detail-text-color);
}

.p-toast-message-secondary .p-toast-icon-close:focus-visible {
    outline-color: var(--p-toast-secondary-text-color);
}

.p-toast-message-secondary .p-toast-icon-close:hover {
    background: var(--p-toast-secondary-close-background-hover);
}

.p-toast-message-contrast {
    background: var(--p-toast-contrast-background);
    border: 1px solid var(--p-toast-contrast-border-color);
    color: var(--p-toast-contrast-text-color);
    box-shadow: var(--p-toast-contrast-box-shadow);
}

.p-toast-message-contrast .p-toast-detail {
    color: var(--p-toast-contrast-detail-text-color);
}

.p-toast-message-contrast .p-toast-icon-close:focus-visible {
    outline-color: var(--p-toast-contrast-text-color);
}

.p-toast-message-contrast .p-toast-icon-close:hover {
    background: var(--p-toast-contrast-close-background-hover);
}

.p-toast-top-center {
    transform: translateX(-50%);
}

.p-toast-bottom-center {
    transform: translateX(-50%);
}

.p-toast-center {
    min-width: 20vw;
    transform: translate(-50%, -50%);
}

.p-toast-message-enter-from {
    opacity: 0;
    transform: translateY(50%);
}

.p-toast-message-leave-from {
    max-height: 1000px;
}

.p-toast .p-toast-message.p-toast-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin-bottom: 0;
    overflow: hidden;
}

.p-toast-message-enter-active {
    transition: transform 0.3s, opacity 0.3s;
}

.p-toast-message-leave-active {
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin-bottom 0.3s;
}
`
};
