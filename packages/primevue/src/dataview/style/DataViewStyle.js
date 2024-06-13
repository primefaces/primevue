import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-dataview {
    border-color: ${dt('dataview.border.color')};
    border-width: ${dt('dataview.border.width')};
    border-style: solid;
    border-radius: ${dt('dataview.border.radius')};
    padding: ${dt('dataview.padding')};
}

.p-dataview-header {
    background: ${dt('dataview.header.background')};
    color: ${dt('dataview.header.color')};
    border-color: ${dt('dataview.header.border.color')};
    border-width: ${dt('dataview.header.border.width')};
    border-style: solid;
    padding: ${dt('dataview.header.padding')};
    border-radius: ${dt('dataview.header.border.radius')};
}

.p-dataview-content {
    background: ${dt('dataview.content.background')};
    border-color: ${dt('dataview.content.border.color')};
    border-width: ${dt('dataview.content.border.width')};
    border-style: solid;
    color: ${dt('dataview.content.color')};
    padding: ${dt('dataview.content.padding')};
    border-radius: ${dt('dataview.content.border.radius')};
}

.p-dataview-footer {
    background: ${dt('dataview.footer.background')};
    color: ${dt('dataview.footer.color')};
    border-color: ${dt('dataview.footer.border.color')};
    border-width: ${dt('dataview.footer.border.width')};
    border-style: solid;
    padding: ${dt('dataview.footer.padding')};
    border-radius: ${dt('dataview.footer.border.radius')};
}

.p-dataview-paginator-top {
    border-width: ${dt('dataview.paginator.top.border.width')};
    border-color: ${dt('dataview.paginator.top.border.color')};
    border-style: solid;
}

.p-dataview-paginator-bottom {
    border-width: ${dt('dataview.paginator.bottom.border.width')};
    border-color: ${dt('dataview.paginator.bottom.border.color')};
    border-style: solid;
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
    pcPaginator: ({ position }) => 'p-dataview-paginator-' + position,
    content: 'p-dataview-content',
    emptyMessage: 'p-dataview-empty-message', // TODO: remove?
    footer: 'p-dataview-footer'
};

export default BaseStyle.extend({
    name: 'dataview',
    theme,
    classes
});
