import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ instance, props }) => [
        'p-chips p-component p-inputwrapper',
        {
            'p-disabled': props.disabled,
            'p-invalid': props.invalid,
            'p-focus': instance.focused,
            'p-inputwrapper-filled': (props.modelValue && props.modelValue.length) || (instance.inputValue && instance.inputValue.length),
            'p-inputwrapper-focus': instance.focused
        }
    ],
    container: ({ props, instance }) => [
        'p-chips-group',
        {
            'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled'
        }
    ],
    token: ({ state, index }) => ['p-chips-chip', { 'p-focus': state.focusedIndex === index }],
    label: 'p-chips-chip-label',
    removeTokenIcon: 'p-chips-chip-icon',
    inputToken: 'p-chips-input-chip'
};

export default BaseStyle.extend({
    name: 'chips',
    classes
});
