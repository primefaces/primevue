export default {
    css: `
.p-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0.75rem;
    background: var(--p-toolbar-background);
    border: 1px solid var(--p-toolbar-border-color);
    color: var(--p-toolbar-text-color);
    border-radius: var(--p-rounded-base);
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
