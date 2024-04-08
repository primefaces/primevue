export default {
    css: ({ dt }) => `
.p-panel {
    border: 1px solid ${dt('panel.border.color')};
    border-radius: ${dt('rounded.base')};
    background: ${dt('panel.background')};
    color: ${dt('panel.color')};
}

.p-panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.125rem;
}

.p-panel-toggleable .p-panel-header {
    padding: 0.75rem 1.125rem;
}

.p-panel-title {
    line-height: 1;
    font-weight: 600;
}

.p-panel-content {
    padding: 0 1.125rem 1.125rem 1.125rem;
}

.p-panel-footer {
    padding: 0 1.125rem 1.125rem 1.125rem;
}
    `
};
