<script>
import BaseComponent from 'primevue/basecomponent';
import { useStyle } from 'primevue/usestyle';

const styles = `
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

const { load: loadStyle } = useStyle(styles, { name: 'orderlist', manual: true });

export default {
    name: 'BaseOrderList',
    extends: BaseComponent,
    props: {
        modelValue: {
            type: Array,
            default: null
        },
        selection: {
            type: Array,
            default: null
        },
        dataKey: {
            type: String,
            default: null
        },
        listStyle: {
            type: null,
            default: null
        },
        metaKeySelection: {
            type: Boolean,
            default: true
        },
        responsive: {
            type: Boolean,
            default: true
        },
        breakpoint: {
            type: String,
            default: '960px'
        },
        stripedRows: {
            type: Boolean,
            default: false
        },
        tabindex: {
            type: Number,
            default: 0
        },
        listProps: {
            type: null,
            default: null
        },
        moveUpButtonProps: {
            type: null,
            default: null
        },
        moveTopButtonProps: {
            type: null,
            default: null
        },
        moveDownButtonProps: {
            type: null,
            default: null
        },
        moveBottomButtonProps: {
            type: null,
            default: null
        },
        'aria-labelledby': {
            type: String,
            default: null
        },
        'aria-label': {
            type: String,
            default: null
        }
    },
    css: {
        classes,
        loadStyle
    },
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
