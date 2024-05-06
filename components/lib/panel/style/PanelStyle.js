import BaseStyle from 'primevue/base/style';

const theme = ({ dt }) => `
.p-panel {
    border: 1px solid ${dt('panel.border.color')};
    border-radius: ${dt('border.radius.md')};
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
`;

const classes = {
    root: ({ props }) => [
        'p-panel p-component',
        {
            'p-panel-toggleable': props.toggleable
        }
    ],
    header: 'p-panel-header',
    title: 'p-panel-title',
    headerActions: 'p-panel-header-actions',
    pcToggleButton: 'p-panel-toggle-button',
    contentContainer: 'p-panel-content-container',
    content: 'p-panel-content',
    footer: 'p-panel-footer'
};

export default BaseStyle.extend({
    name: 'panel',
    theme,
    classes
});
