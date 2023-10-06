import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ instance, props }) => [
        'p-radiobutton p-component',
        {
            'p-radiobutton-checked': instance.checked,
            'p-radiobutton-disabled': props.disabled,
            'p-radiobutton-focused': instance.focused
        }
    ],
    input: ({ instance, props }) => [
        'p-radiobutton-box',
        {
            'p-highlight': instance.checked,
            'p-disabled': props.disabled,
            'p-focus': instance.focused
        }
    ],
    icon: 'p-radiobutton-icon'
};

export default BaseStyle.extend({
    name: 'radiobutton',
    classes
});
