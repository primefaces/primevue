import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ props }) => [
        'p-listbox p-component',
        {
            'p-listbox-striped': props.stripedRows,
            'p-disabled': props.disabled,
            'p-invalid': props.invalid
        }
    ],
    header: 'p-listbox-header',
    filterContainer: 'p-listbox-filter-container',
    filterInput: 'p-listbox-filter',
    filterIcon: 'p-listbox-filter-icon',
    wrapper: 'p-listbox-list-container',
    list: 'p-listbox-list',
    itemGroup: 'p-listbox-option-group',
    item: ({ instance, option, index, getItemOptions }) => [
        'p-listbox-option',
        {
            'p-listbox-option-selected': instance.isSelected(option),
            'p-focus': instance.focusedOptionIndex === instance.getOptionIndex(index, getItemOptions),
            'p-disabled': instance.isOptionDisabled(option)
        }
    ],
    emptyMessage: 'p-listbox-empty-message'
};

export default BaseStyle.extend({
    name: 'listbox',
    classes
});
