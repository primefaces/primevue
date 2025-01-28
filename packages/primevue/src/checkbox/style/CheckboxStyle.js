import { style } from '@primeuix/styles/checkbox';
import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: ({ instance, props }) => [
        'p-checkbox p-component',
        {
            'p-checkbox-checked': instance.checked,
            'p-disabled': props.disabled,
            'p-invalid': instance.$pcCheckboxGroup ? instance.$pcCheckboxGroup.$invalid : instance.$invalid,
            'p-variant-filled': instance.$variant === 'filled',
            'p-checkbox-sm p-inputfield-sm': props.size === 'small',
            'p-checkbox-lg p-inputfield-lg': props.size === 'large'
        }
    ],
    box: 'p-checkbox-box',
    input: 'p-checkbox-input',
    icon: 'p-checkbox-icon'
};

export default BaseStyle.extend({
    name: 'checkbox',
    style,
    classes
});
