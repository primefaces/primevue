export default {
    css: `
.p-panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.p-panel-title {
    line-height: 1;
}
.p-panel-header-icon {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    overflow: hidden;
    position: relative;
}
.p-panel .p-panel-header {
    padding: 1.125rem;
    color: var(--p-dark-surface-0, var(--p-surface-700));
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
}
.p-panel .p-panel-header .p-panel-title {
    font-weight: 600;
}
.p-panel .p-panel-header .p-panel-header-icon {
    width: 1.75rem;
    height: 1.75rem;
    color: #a1a1aa;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s,
        box-shadow 0.2s, outline-color 0.2s;
    outline-color: transparent;
}
.p-panel .p-panel-header .p-panel-header-icon:enabled:hover {
    color: var(--p-dark-surface-0, var(--p-surface-700));
    border-color: transparent;
    background: rgba(255, 255, 255, 0.03);
}
.p-panel .p-panel-header .p-panel-header-icon:focus-visible {
    outline: 1px solid var(--p-focus-ring-color);
    outline-offset: 2px;
    box-shadow: none;
}
.p-panel.p-panel-toggleable .p-panel-header {
    padding: 0.75rem 1.125rem;
}
.p-panel .p-panel-content {
    padding: 0 1.125rem 1.125rem 1.125rem;
    color: var(--p-dark-surface-0, var(--p-surface-700));
    border-top: 0 none;
}
.p-panel .p-panel-content:last-child {
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
}
.p-panel .p-panel-footer {
    padding: 0 1.125rem 1.125rem 1.125rem;
    color: var(--p-dark-surface-0, var(--p-surface-700));
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
    border-top: 0 none;
}
.p-panel {
    border: 1px solid var(--p-dark-surface-700, var(--p-surface-200));
    border-radius: 6px;
    background-color: var(--p-dark-surface-900, var(--p-surface-0));
}
.p-panel .p-panel-header,
.p-panel .p-panel-content,
.p-panel .p-panel-footer {
    background: transparent;
    border: 0 none;
}
.p-panel:has(.p-panel-footer) .p-panel-content {
    padding-bottom: 0.875rem;
}
    `
};
