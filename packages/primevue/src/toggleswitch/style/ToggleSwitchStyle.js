import { style } from '@primeuix/styles/toggleswitch';
import BaseStyle from '@primevue/core/base/style';

const inlineStyles = {
    root: { position: 'relative' }
};

const classes = {
    root: ({ instance, props }) => [
        'p-toggleswitch p-component',
        {
            'p-toggleswitch-checked': instance.checked,
            'p-disabled': props.disabled,
            'p-invalid': instance.$invalid
        }
    ],
    input: 'p-toggleswitch-input',
    slider: 'p-toggleswitch-slider',
    handle: 'p-toggleswitch-handle'
};

export default BaseStyle.extend({
    name: 'toggleswitch',
    style,
    classes,
    inlineStyles
});
