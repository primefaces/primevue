import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ instance, props }) => [
        'p-checkbox p-component',
        {
            'p-highlight': instance.checked,
            'p-disabled': props.disabled,
            'p-invalid': props.invalid,
            'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled'
        }
    ],
    box: 'p-checkbox-box',
    input: 'p-checkbox-input',
    icon: 'p-checkbox-icon'
};

export default BaseStyle.extend({
    name: 'checkbox',
    classes
});
