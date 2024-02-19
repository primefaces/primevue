export default {
    css: `
.p-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: var(--p-tag-primary-background);
    color: var(--p-tag-primary-text-color);
    font-size: 0.75rem;
    font-weight: 700;
    padding: 0.25rem 0.4rem;
    border-radius: 6px;
    gap: 0.25rem;
}

.p-tag-icon {
    font-size: 0.75rem;
    width: 0.75rem;
    height: 0.75rem;
}

.p-tag-rounded {
    border-radius: 10rem;
}

.p-tag-success {
    background-color: var(--p-tag-success-background);
    color: var(--p-tag-success-text-color);
}

.p-tag-info {
    background-color: var(--p-tag-info-background);
    color: var(--p-tag-info-text-color);
}

.p-tag-warning {
    background-color: var(--p-tag-warn-background);
    color: var(--p-tag-warn-text-color);
}

.p-tag-danger {
    background-color: var(--p-tag-danger-background);
    color: var(--p-tag-danger-text-color);
}

.p-tag-secondary {
    background-color: var(--p-tag-secondary-background);
    color: var(--p-tag-secondary-text-color);
}

.p-tag-contrast {
    background-color: var(--p-tag-contrast-background);
    color: var(--p-tag-contrast-text-color);
}
`
};
