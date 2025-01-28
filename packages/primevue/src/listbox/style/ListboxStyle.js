import { style } from '@primeuix/styles/listbox';
import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: ({ instance, props }) => [
        'p-listbox p-component',
        {
            'p-listbox-striped': props.striped,
            'p-disabled': props.disabled,
            'p-invalid': instance.$invalid
        }
    ],
    header: 'p-listbox-header',
    pcFilter: 'p-listbox-filter',
    listContainer: 'p-listbox-list-container',
    list: 'p-listbox-list',
    optionGroup: 'p-listbox-option-group',
    option: ({ instance, props, option, index, getItemOptions }) => [
        'p-listbox-option',
        {
            'p-listbox-option-selected': instance.isSelected(option) && props.highlightOnSelect,
            'p-focus': instance.focusedOptionIndex === instance.getOptionIndex(index, getItemOptions),
            'p-disabled': instance.isOptionDisabled(option)
        }
    ],
    optionCheckIcon: 'p-listbox-option-check-icon',
    optionBlankIcon: 'p-listbox-option-blank-icon',
    emptyMessage: 'p-listbox-empty-message'
};

export default BaseStyle.extend({
    name: 'listbox',
    style,
    classes
});
