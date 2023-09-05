<script>
import BaseComponent from 'primevue/basecomponent';
import { useStyle } from 'primevue/usestyle';

const styles = `
.p-picklist {
    display: flex;
}

.p-picklist-buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.p-picklist-list-wrapper {
    flex: 1 1 50%;
}

.p-picklist-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: auto;
    min-height: 12rem;
    max-height: 24rem;
}

.p-picklist-item {
    cursor: pointer;
    overflow: hidden;
    position: relative;
}

.p-picklist-item.p-picklist-flip-enter-active.p-picklist-flip-enter-to,
.p-picklist-item.p-picklist-flip-leave-active.p-picklist-flip-leave-to {
    transition: none !important;
}
`;

const classes = {
    root: ({ props }) => [
        'p-picklist p-component',
        {
            'p-picklist-striped': props.stripedRows
        }
    ],
    sourceControls: 'p-picklist-buttons p-picklist-source-controls',
    sourceWrapper: 'p-picklist-list-wrapper p-picklist-source-wrapper',
    sourceHeader: 'p-picklist-header',
    sourceList: 'p-picklist-list p-picklist-source-list',
    buttons: 'p-picklist-buttons p-picklist-transfer-buttons',
    targetWrapper: 'p-picklist-list-wrapper p-picklist-target-wrapper',
    targetHeader: 'p-picklist-header',
    targetList: 'p-picklist-list p-picklist-target',
    item: ({ instance, item, id, listIndex }) => [
        'p-picklist-item',
        {
            'p-highlight': instance.isSelected(item, listIndex),
            'p-focus': id === instance.focusedOptionId
        }
    ],
    targetControls: 'p-picklist-buttons p-picklist-target-controls'
};

const { load: loadStyle } = useStyle(styles, { name: 'picklist', manual: true });

export default {
    name: 'BasePickList',
    extends: BaseComponent,
    props: {
        modelValue: {
            type: Array,
            default: () => [[], []]
        },
        selection: {
            type: Array,
            default: () => [[], []]
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
        showSourceControls: {
            type: Boolean,
            default: true
        },
        showTargetControls: {
            type: Boolean,
            default: true
        },
        targetListProps: {
            type: null,
            default: null
        },
        sourceListProps: {
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
        moveToTargetProps: {
            type: null,
            default: null
        },
        moveAllToTargetProps: {
            type: null,
            default: null
        },
        moveToSourceProps: {
            type: null,
            default: null
        },
        moveAllToSourceProps: {
            type: null,
            default: null
        },
        tabindex: {
            type: Number,
            default: 0
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
