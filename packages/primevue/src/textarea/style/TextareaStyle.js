import { style } from '@primeuix/styles/textarea';
import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: ({ instance, props }) => [
        'p-textarea p-component',
        {
            'p-filled': instance.$filled,
            'p-textarea-resizable ': props.autoResize,
            'p-textarea-sm p-inputfield-sm': props.size === 'small',
            'p-textarea-lg p-inputfield-lg': props.size === 'large',
            'p-invalid': instance.$invalid,
            'p-variant-filled': instance.$variant === 'filled',
            'p-textarea-fluid': instance.$fluid
        }
    ]
};

export default BaseStyle.extend({
    name: 'textarea',
    style,
    classes
});
