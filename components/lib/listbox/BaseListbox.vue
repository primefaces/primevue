<script>
import BaseComponent from 'primevue/basecomponent';
import { useStyle } from 'primevue/usestyle';

const styles = `
.p-listbox-list-wrapper {
    overflow: auto;
}

.p-listbox-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.p-listbox-item {
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.p-listbox-item-group {
    cursor: auto;
}

.p-listbox-filter-container {
    position: relative;
}

.p-listbox-filter-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
}

.p-listbox-filter {
    width: 100%;
}
`;

const classes = {
    root: ({ instance, props }) => [
        'p-listbox p-component',
        {
            'p-focus': instance.focused,
            'p-disabled': props.disabled
        }
    ],
    header: 'p-listbox-header',
    filterContainer: 'p-listbox-filter-container',
    filterInput: 'p-listbox-filter p-inputtext p-component',
    filterIcon: 'p-listbox-filter-icon',
    wrapper: 'p-listbox-list-wrapper',
    list: 'p-listbox-list',
    itemGroup: 'p-listbox-item-group',
    item: ({ instance, option, index, getItemOptions }) => [
        'p-listbox-item',
        {
            'p-highlight': instance.isSelected(option),
            'p-focus': instance.focusedOptionIndex === instance.getOptionIndex(index, getItemOptions),
            'p-disabled': instance.isOptionDisabled(option)
        }
    ],
    emptyMessage: 'p-listbox-empty-message'
};

const { load: loadStyle } = useStyle(styles, { name: 'listbox', manual: true });

export default {
    name: 'BaseListbox',
    extends: BaseComponent,
    props: {
        modelValue: null,
        options: Array,
        optionLabel: null,
        optionValue: null,
        optionDisabled: null,
        optionGroupLabel: null,
        optionGroupChildren: null,
        listStyle: null,
        disabled: Boolean,
        dataKey: null,
        multiple: Boolean,
        metaKeySelection: Boolean,
        filter: Boolean,
        filterPlaceholder: String,
        filterLocale: String,
        filterMatchMode: {
            type: String,
            default: 'contains'
        },
        filterFields: {
            type: Array,
            default: null
        },
        filterInputProps: null,
        virtualScrollerOptions: {
            type: Object,
            default: null
        },
        autoOptionFocus: {
            type: Boolean,
            default: true
        },
        selectOnFocus: {
            type: Boolean,
            default: false
        },
        filterMessage: {
            type: String,
            default: null
        },
        selectionMessage: {
            type: String,
            default: null
        },
        emptySelectionMessage: {
            type: String,
            default: null
        },
        emptyFilterMessage: {
            type: String,
            default: null
        },
        emptyMessage: {
            type: String,
            default: null
        },
        filterIcon: {
            type: String,
            default: undefined
        },
        tabindex: {
            type: Number,
            default: 0
        },
        'aria-label': {
            type: String,
            default: null
        },
        'aria-labelledby': {
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
