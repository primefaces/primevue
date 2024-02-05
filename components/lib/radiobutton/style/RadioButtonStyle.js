import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ instance, props }) => [
        'p-radiobutton p-component',
        {
            'p-highlight': instance.checked,
            'p-disabled': props.disabled,
            'p-invalid': props.invalid,
            'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled'
        }
    ],
    box: 'p-radiobutton-box',
    input: 'p-radiobutton-input',
    icon: 'p-radiobutton-icon'
};

export default BaseStyle.extend({
    name: 'radiobutton',
    classes
});
