export default {
    variables: {
        common: {},
        light: {},
        dark: {}
    },
    css: `
.p-toolbar {
    justify-content: space-between;
    flex-wrap: wrap;
    background: var(--p-panel-header-bg);
    border: var(--p-panel-header-border);
    padding: var(--p-panel-header-padding);
    border-radius: var(--p-border-radius);
    gap: var(--p-inline-spacing);
}
.p-toolbar,
.p-toolbar-group-center,
.p-toolbar-group-end,
.p-toolbar-group-left,
.p-toolbar-group-right,
.p-toolbar-group-start {
    display: flex;
    align-items: center;
}
.p-toolbar-separator {
    margin: 0 var(--p-inline-spacing);
}
    `
};
