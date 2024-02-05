import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ instance, props }) => [
        'p-listbox p-component',
        {
            'p-disabled': props.disabled,
            'p-invalid': props.invalid
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
    classes
});
