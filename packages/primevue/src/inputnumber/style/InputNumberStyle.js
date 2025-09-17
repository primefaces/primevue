import { style } from '@primeuix/styles/inputnumber';
import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: ({ instance, props }) => [
        'p-inputnumber p-component p-inputwrapper',
        {
            'p-invalid': instance.$invalid,
            'p-inputwrapper-filled': instance.$filled || props.allowEmpty === false,
            'p-inputwrapper-focus': instance.focused,
            'p-inputnumber-stacked': props.showButtons && props.buttonLayout === 'stacked',
            'p-inputnumber-horizontal': props.showButtons && props.buttonLayout === 'horizontal',
            'p-inputnumber-vertical': props.showButtons && props.buttonLayout === 'vertical',
            'p-inputnumber-fluid': instance.$fluid
        }
    ],
    pcInputText: 'p-inputnumber-input',
    clearIcon: 'p-inputnumber-clear-icon',
    buttonGroup: 'p-inputnumber-button-group',
    incrementButton: ({ instance, props }) => [
        'p-inputnumber-button p-inputnumber-increment-button',
        {
            'p-disabled': props.showButtons && props.max !== null && instance.maxBoundry()
        }
    ],
    decrementButton: ({ instance, props }) => [
        'p-inputnumber-button p-inputnumber-decrement-button',
        {
            'p-disabled': props.showButtons && props.min !== null && instance.minBoundry()
        }
    ]
};

export default BaseStyle.extend({
    name: 'inputnumber',
    style,
    classes
});
