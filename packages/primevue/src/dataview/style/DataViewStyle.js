import { style } from '@primeuix/styles/dataview';
import BaseStyle from '@primevue/core/base/style';

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
    style,
    classes
});
