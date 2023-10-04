import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ instance, props }) => [
        'p-checkbox p-component',
        {
            'p-checkbox-checked': instance.checked,
            'p-checkbox-disabled': props.disabled,
            'p-checkbox-focused': instance.focused
        }
    ],
    input: ({ instance, props }) => [
        'p-checkbox-box',
        {
            'p-highlight': instance.checked,
            'p-disabled': props.disabled,
            'p-focus': instance.focused
        }
    ],
    icon: 'p-checkbox-icon'
};

export default BaseStyle.extend({
    name: 'checkbox',
    classes
});
