import BaseStyle from 'primevue/base/style';

const inlineStyles = {
    root: { position: 'relative' }
};

const classes = {
    root: ({ instance, props }) => [
        'p-inputswitch p-component',
        {
            'p-highlight': instance.checked,
            'p-disabled': props.disabled,
            'p-invalid': props.invalid
        }
    ],
    input: 'p-inputswitch-input',
    slider: 'p-inputswitch-slider'
};

export default BaseStyle.extend({
    name: 'inputswitch',
    classes,
    inlineStyles
});
