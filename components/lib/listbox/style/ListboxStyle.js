import BaseStyle from 'primevue/base/style';

const css = `
@layer primevue {
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

export default BaseStyle.extend({
    name: 'listbox',
    css,
    classes
});
