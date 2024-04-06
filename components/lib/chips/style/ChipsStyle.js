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
        'p-chips-list',
        {
            'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled'
        }
    ],
    token: ({ state, index }) => ['p-chips-item', { 'p-focus': state.focusedIndex === index }],
    label: 'p-chips-item-label',
    removeTokenIcon: 'p-chips-item-icon',
    inputToken: 'p-chips-input-item'
};

export default BaseStyle.extend({
    name: 'chips',
    classes
});
