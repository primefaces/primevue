import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ props }) => [
        'p-orderlist p-component',
        {
            'p-orderlist-striped': props.stripedRows
        }
    ],
    controls: 'p-orderlist-controls',
    container: 'p-orderlist-list-container',
    header: 'p-orderlist-header',
    list: 'p-orderlist-list',
    item: 'p-orderlist-item'
};

export default BaseStyle.extend({
    name: 'orderlist',
    classes
});
