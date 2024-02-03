import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ instance, props }) => [
        'p-inputtext p-component',
        {
            'p-filled': instance.filled,
            'p-inputtext-sm': props.size === 'small',
            'p-inputtext-lg': props.size === 'large',
            'p-invalid': props.invalid,
            'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled'
        }
    ]
};

export default BaseStyle.extend({
    name: 'inputtext',
    classes
});
