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
    paginator: ({ position }) => 'p-dataview-paginator-' + position,
    content: 'p-dataview-content',
    emptyMessage: 'p-dataview-empty-message', // TODO: remove?
    footer: 'p-dataview-footer'
};

export default BaseStyle.extend({
    name: 'dataview',
    classes
});
