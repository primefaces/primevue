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
    button: 'p-togglebutton-button',
    icon: ({ instance, props }) => [
        'p-togglebutton-icon',
        {
            'p-togglebutton-icon-left': props.iconPos === 'left' && instance.label,
            'p-togglebutton-icon-right': props.iconPos === 'right' && instance.label
        }
    ],
    label: 'p-togglebutton-label'
};

export default BaseStyle.extend({
    name: 'togglebutton',
    classes
});
