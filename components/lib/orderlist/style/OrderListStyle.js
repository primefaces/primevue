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
    item: ({ instance, item, id }) => [
        'p-orderlist-item',
        {
            'p-highlight': instance.isSelected(item),
            'p-focus': id === instance.focusedOptionId
        }
    ]
};

export default BaseStyle.extend({
    name: 'orderlist',
    classes
});
