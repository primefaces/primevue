import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ instance, props }) => [
        'p-checkbox p-component',
        {
            'p-checkbox-checked': props.modelValue === true,
            'p-checkbox-disabled': props.disabled,
            'p-checkbox-focused': instance.focused
        }
    ],
    checkbox: ({ instance, props }) => [
        'p-checkbox-box',
        {
            'p-highlight': props.modelValue != null,
            'p-disabled': props.disabled,
            'p-focus': instance.focused
        }
    ],
    checkIcon: 'p-checkbox-icon',
    uncheckIcon: 'p-checkbox-icon',
    nullableIcon: 'p-checkbox-icon'
};

export default BaseStyle.extend({
    name: 'tristatecheckbox',
    classes
});
