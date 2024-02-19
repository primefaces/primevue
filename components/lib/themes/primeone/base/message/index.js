export default {
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
