import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ props, instance }) => [
        'p-inputmask p-inputtext p-component',
        {
            'p-filled': instance.filled,
            'p-invalid': props.invalid,
            'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled'
        }
    ]
};

export default BaseStyle.extend({
    name: 'inputmask',
    classes
});
