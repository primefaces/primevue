export default {
    css: `
.p-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0.75rem;
    background: var(--p-dark-surface-900, var(--p-surface-0));
    border: 1px solid var(--p-dark-surface-700, var(--p-surface-200));
    color: var(--p-dark-surface-0, var(--p-surface-700));
    border-radius: var(--p-border-radius);
    gap: 0.5rem;
}

.p-toolbar-group-start,
.p-toolbar-group-center,
.p-toolbar-group-end {
    display: flex;
    align-items: center;
}

.p-toolbar-separator {
    margin: 0 0.5rem;
}
`
};
