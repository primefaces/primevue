import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ instance, props }) => [
        'p-inputtextarea p-inputtext p-component',
        {
            'p-filled': instance.filled,
            'p-inputtextarea-resizable ': props.autoResize,
            'p-invalid': props.invalid,
            'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled'
        }
    ]
};

export default BaseStyle.extend({
    name: 'textarea',
    classes
});
