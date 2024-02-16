import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ props }) => [
        'p-selectbutton p-button-group p-component',
        {
            'p-disabled': props.disabled,
            'p-invalid': props.invalid
        }
    ],
    button: ({ instance, option }) => [
        'p-button p-component',
        {
            'p-highlight': instance.isSelected(option),
            'p-disabled': instance.isOptionDisabled(option)
        }
    ],
    label: 'p-button-label'
};

export default BaseStyle.extend({
    name: 'selectbutton',
    classes
});
