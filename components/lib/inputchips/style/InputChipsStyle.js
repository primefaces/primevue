import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ instance, props }) => [
        'p-inputchips p-component p-inputwrapper',
        {
            'p-disabled': props.disabled,
            'p-invalid': props.invalid,
            'p-focus': instance.focused,
            'p-inputwrapper-filled': (props.modelValue && props.modelValue.length) || (instance.inputValue && instance.inputValue.length),
            'p-inputwrapper-focus': instance.focused
        }
    ],
    container: ({ props, instance }) => [
        'p-inputchips-input',
        {
            'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled'
        }
    ],
    token: ({ state, index }) => ['p-inputchips-chip', { 'p-focus': state.focusedIndex === index }],
    label: 'p-inputchips-chip-label',
    removeTokenIcon: 'p-inputchips-chip-icon',
    inputToken: 'p-inputchips-input-item'
};

export default BaseStyle.extend({
    name: 'inputchips',
    classes
});
