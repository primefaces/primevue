export default {
    variables: {
        common: {},
        light: {},
        dark: {}
    },
    css: `
.p-fieldset-legend > a,
.p-fieldset-legend > span {
    display: flex;
    align-items: center;
    justify-content: center;
}
.p-fieldset-toggleable .p-fieldset-legend a {
    cursor: pointer;
    user-select: none;
    overflow: hidden;
    position: relative;
    text-decoration: none;
    padding: var(--p-panel-header-padding);
    color: var(--p-panel-header-text-color);
    border-radius: var(--p-border-radius);
    transition: var(--p-list-item-transition);
}
.p-fieldset-legend-text {
    line-height: 1;
}
.p-fieldset {
    border: var(--p-panel-content-border);
    background: var(--p-panel-content-bg);
    color: var(--p-panel-content-text-color);
    border-radius: var(--p-border-radius);
}
.p-fieldset-legend {
    padding: var(--p-panel-header-padding);
    border: var(--p-panel-header-border);
    color: var(--p-panel-header-text-color);
    background: var(--p-panel-header-bg);
    font-weight: var(--p-panel-header-font-weight);
    border-radius: var(--p-border-radius);
}
.p-fieldset-content {
    padding: var(--p-panel-content-padding);
}
.p-fieldset-toggleable .p-fieldset-legend {
    padding: 0;
    transition: var(--p-action-icon-transition);
}
.p-fieldset-toggleable .p-fieldset-legend a .p-fieldset-toggler {
    margin-right: var(--p-inline-spacing);
}
.p-fieldset-toggleable .p-fieldset-legend a:focus-visible {
    outline: var(--p-focus-outline);
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: var(--p-focus-shadow);
}
.p-fieldset-toggleable .p-fieldset-legend a:hover {
    color: var(--p-panel-header-text-hover-color);
}
.p-fieldset-toggleable .p-fieldset-legend:hover {
    background: var(--p-panel-header-hover-bg);
    border-color: var(--p-panel-header-hover-border-color);
    color: var(--p-panel-header-text-hover-color);
}
    `
};
