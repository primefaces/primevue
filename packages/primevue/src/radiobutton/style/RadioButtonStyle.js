import { style } from '@primeuix/styles/radiobutton';
import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: ({ instance, props }) => [
        'p-radiobutton p-component',
        {
            'p-radiobutton-checked': instance.checked,
            'p-disabled': props.disabled,
            'p-invalid': instance.$pcRadioButtonGroup ? instance.$pcRadioButtonGroup.$invalid : instance.$invalid,
            'p-variant-filled': instance.$variant === 'filled',
            'p-radiobutton-sm p-inputfield-sm': props.size === 'small',
            'p-radiobutton-lg p-inputfield-lg': props.size === 'large'
        }
    ],
    box: 'p-radiobutton-box',
    input: 'p-radiobutton-input',
    icon: 'p-radiobutton-icon'
};

export default BaseStyle.extend({
    name: 'radiobutton',
    style,
    classes
});
