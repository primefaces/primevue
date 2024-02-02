import BaseStyle from 'primevue/base/style';

const css = `
@layer primevue {
    .p-inputtextarea-resizable {
        overflow: hidden;
        resize: none;
    }

    .p-fluid .p-inputtextarea {
        width: 100%;
    }
}
`;

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
    css,
    classes
});
