export default {
    css: `
.p-badge {
    display: inline-flex;
    border-radius: 10px;
    justify-content: center;
    padding: 0 0.5rem;
    background: var(--p-badge-primary-background);
    color: var(--p-badge-primary-text-color);
    font-size: 0.75rem;
    font-weight: 700;
    min-width: 1.5rem;
    height: 1.5rem;
    line-height: 1.5rem;
}

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge .p-badge {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}

.p-badge-dot {
    width: 0.5rem;
    min-width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    padding: 0;
}

.p-badge-no-gutter {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background-color: var(--p-badge-secondary-background);
    color: var(--p-badge-secondary-text-color);
}

.p-badge-success {
    background-color: var(--p-badge-success-background);
    color: var(--p-badge-success-text-color);
}

.p-badge-info {
    background-color: var(--p-badge-info-background);
    color: var(--p-badge-info-text-color);
}

.p-badge-warning {
    background-color: var(--p-badge-warn-background);
    color: var(--p-badge-warn-text-color);
}

.p-badge-danger {
    background-color: var(--p-badge-danger-background);
    color: var(--p-badge-danger-text-color);
}

.p-badge-contrast {
    background-color: var(--p-badge-contrast-background);
    color: var(--p-badge-contrast-text-color);
}

.p-badge-lg {
    font-size: 1.125rem;
    min-width: 2.25rem;
    height: 2.25rem;
    line-height: 2.25rem;
}

.p-badge-xl {
    font-size: 1.5rem;
    min-width: 3rem;
    height: 3rem;
    line-height: 3rem;
}
    `
};
