import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ instance, props }) => [
        'p-togglebutton p-component',
        {
            'p-disabled': props.disabled,
            'p-highlight': instance.active,
            'p-invalid': props.invalid
        }
    ],
    input: 'p-togglebutton-input',
    box: ({ instance }) => [
        'p-button p-component',
        {
            'p-button-icon-only': instance.hasIcon && !instance.hasLabel
        }
    ],
    icon: ({ instance, props }) => [
        'p-button-icon',
        {
            'p-button-icon-left': props.iconPos === 'left' && instance.label,
            'p-button-icon-right': props.iconPos === 'right' && instance.label
        }
    ],
    label: 'p-button-label'
};

export default BaseStyle.extend({
    name: 'togglebutton',
    classes
});
