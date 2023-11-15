import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ props }) => [
        'p-dataview p-component',
        {
            'p-dataview-list': props.layout === 'list',
            'p-dataview-grid': props.layout === 'grid'
        }
    ],
    header: 'p-dataview-header',
    paginator: ({ instance }) => (instance.paginatorTop ? 'p-paginator-top' : instance.paginatorBottom ? 'p-paginator-bottom' : ''),
    content: 'p-dataview-content',
    emptyMessage: 'p-dataview-emptymessage',
    footer: 'p-dataview-footer'
};

export default BaseStyle.extend({
    name: 'dataview',
    classes
});
