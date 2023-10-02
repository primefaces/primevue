import BaseStyle from 'primevue/base/style';

const css = `
@layer primevue {
    .p-orderlist {
        display: flex;
    }

    .p-orderlist-controls {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .p-orderlist-list-container {
        flex: 1 1 auto;
    }

    .p-orderlist-list {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: auto;
        min-height: 12rem;
        max-height: 24rem;
    }

    .p-orderlist-item {
        cursor: pointer;
        overflow: hidden;
        position: relative;
    }

    .p-orderlist.p-state-disabled .p-orderlist-item,
    .p-orderlist.p-state-disabled .p-button {
        cursor: default;
    }

    .p-orderlist.p-state-disabled .p-orderlist-list {
        overflow: hidden;
    }
}
`;

const classes = {
    root: ({ props }) => [
        'p-orderlist p-component',
        {
            'p-orderlist-striped': props.stripedRows
        }
    ],
    controls: 'p-orderlist-controls',
    header: 'p-orderlist-header',
    container: 'p-orderlist-list-container',
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
    css,
    classes
});
