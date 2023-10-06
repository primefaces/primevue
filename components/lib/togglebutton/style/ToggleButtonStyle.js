import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ instance, props }) => [
        'p-button p-togglebutton p-component',
        {
            'p-focus': instance.focused,
            'p-button-icon-only': instance.hasIcon && !instance.hasLabel,
            'p-disabled': props.disabled,
            'p-highlight': props.modelValue === true
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
    name: 'accordion',
    classes
});
