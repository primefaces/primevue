import BaseStyle from 'primevue/base/style';

const theme = ({ dt }) => `
.p-dataview-header {
    background: ${dt('dataview.header.background')};
    color: ${dt('dataview.header.color')};
    border: 1px solid ${dt('dataview.header.border.color')};
    border-width: 0 0 1px 0;
    padding: 0.75rem 1rem;
}

.p-dataview-content {
    background: ${dt('dataview.content.background')};
    color: ${dt('dataview.content.color')};
}

.p-dataview-footer {
    background: ${dt('dataview.footer.background')};
    color: ${dt('dataview.footer.color')};
    border: 1px solid ${dt('dataview.footer.border.color')};
    border-width: 1px 0 0 0;
    padding: 0.75rem 1rem;
}

.p-dataview-paginator-top {
    border: solid ${dt('dataview.header.border.color')};
    border-width: 0 0 1px 0;
}

.p-dataview-paginator-bottom {
    border: solid ${dt('dataview.footer.border.color')};
    border-width: 1px 0 0 0;
}
`;

const classes = {
    root: ({ props }) => [
        'p-dataview p-component',
        {
            'p-dataview-list': props.layout === 'list',
            'p-dataview-grid': props.layout === 'grid'
        }
    ],
    header: 'p-dataview-header',
    paginator: ({ position }) => 'p-dataview-paginator-' + position,
    content: 'p-dataview-content',
    emptyMessage: 'p-dataview-empty-message', // TODO: remove?
    footer: 'p-dataview-footer'
};

export default BaseStyle.extend({
    name: 'dataview',
    theme,
    classes
});
