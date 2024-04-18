import BaseStyle from 'primevue/base/style';

const inlineStyles = {
    root: { position: 'relative' }
};

const classes = {
    root: ({ instance, props }) => [
        'p-toggleswitch p-component',
        {
            'p-toggleswitch-checked': instance.checked,
            'p-disabled': props.disabled,
            'p-invalid': props.invalid
        }
    ],
    input: 'p-toggleswitch-input',
    slider: 'p-toggleswitch-slider'
};

export default BaseStyle.extend({
    name: 'toggleswitch',
    classes,
    inlineStyles
});
