import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ instance, props }) => [
        'p-inputnumber p-component p-inputwrapper',
        {
            'p-inputwrapper-filled': instance.filled || props.allowEmpty === false,
            'p-inputwrapper-focus': instance.focused,
            'p-inputnumber-buttons-stacked': props.showButtons && props.buttonLayout === 'stacked',
            'p-inputnumber-buttons-horizontal': props.showButtons && props.buttonLayout === 'horizontal',
            'p-inputnumber-buttons-vertical': props.showButtons && props.buttonLayout === 'vertical',
            'p-invalid': props.invalid
        }
    ],
    input: ({ props, instance }) => [
        'p-inputnumber-input',
        {
            'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled'
        }
    ],
    buttonGroup: 'p-inputnumber-button-group',
    incrementButton: ({ instance, props }) => [
        'p-inputnumber-button p-inputnumber-button-up',
        {
            'p-disabled': props.showButtons && props.max !== null && instance.maxBoundry()
        }
    ],
    decrementButton: ({ instance, props }) => [
        'p-inputnumber-button p-inputnumber-button-down',
        {
            'p-disabled': props.showButtons && props.min !== null && instance.minBoundry()
        }
    ]
};

export default BaseStyle.extend({
    name: 'inputnumber',
    classes
});
