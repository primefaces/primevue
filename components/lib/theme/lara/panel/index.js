export default {
    css: `
.p-panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: var(--p-panel-header-border-width) var(--p-panel-header-border-style) var(--p-panel-header-border-color);
    padding: var(--p-panel-header-padding-y) var(--p-panel-header-padding-x);
    background: var(--p-surface-100, --p-dark-surface-900);
    color: var(--p-panel-header-color);
    border-top-right-radius: var(--p-border-radius);
    border-top-left-radius: var(--p-border-radius);
}
.p-panel-title {
    line-height: 1;
    font-weight: var(--p-panel-header-font-weight);
}
.p-panel-header-icon {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    width: var(--p-panel-header-icon-width);
    height: var(--p-panel-header-icon-height);
    color: var(--p-panel-header-icon-color);
    border: var(--p-panel-header-icon-border-width) var(--p-panel-header-icon-border-style) var(--p-panel-header-icon-border-color);
    background: var(--p-panel-header-icon-background);
    border-radius: var(--p-panel-header-icon-border-radius);
    transition: var(--p-transition);
    outline-color: transparent;
}
.p-panel-header-icon:enabled:hover {
    color: var(--p-panel-header-icon-hover-color);
    border-color: var(--p-panel-header-icon-hover-border-color);
    background: var(--p-panel-header-icon-hover-background);
}
.p-panel-header-icon:focus-visible {
    outline: var(--p-focus-ring-width) var(--p-focus-ring-style) var(--p-focus-ring-color);
    outline-offset: var(--p-focus-ring-offset);
}
.p-panel-toggleable > .p-panel-header {
    padding: var(--p-panel-toggleable-header-padding-y) var(--p-panel-toggleable-header-padding-x);
}
.p-panel-content {
    padding: var(--p-panel-content-padding-y) var(--p-panel-content-padding-x);
    border: var(--p-panel-content-border-width) var(--p-panel-content-border-style) var(--p-panel-content-border-color);
    background: var(--p-panel-content-background);
    color: var(--p-panel-content-color);
    border-top: 0;
}
.p-panel-content:last-child {
    border-bottom-right-radius: var(--p-border-radius);
    border-bottom-left-radius: var(--p-border-radius);
}
.p-panel-footer {
    padding: var(--p-panel-footer-padding-y) var(--p-panel-footer-padding-x);
    border: var(--p-panel-footer-border-width) var(--p-panel-footer-border-style) var(--p-panel-footer-border-color);
    background: var(--p-panel-footer-background);
    color: var(--p-panel-footer-color);
    border-bottom-right-radius: var(--p-border-radius);
    border-bottom-left-radius: var(--p-border-radius);
    border-top: 0;
}
    `
};
