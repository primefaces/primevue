import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ props }) => [
        'p-selectbutton p-component',
        {
            'p-disabled': props.disabled,
            'p-invalid': props.invalid
        }
    ],
    button: ({ instance, option }) => [
        'p-selectbutton-button',
        {
            'p-highlight': instance.isSelected(option),
            'p-disabled': instance.isOptionDisabled(option)
        }
    ],
    label: 'p-selectbutton-label'
};

export default BaseStyle.extend({
    name: 'selectbutton',
    classes
});
