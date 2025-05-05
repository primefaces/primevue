import { style } from '@primeuix/styles/knob';
import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: ({ instance, props }) => [
        'p-knob p-component',
        {
            'p-disabled': props.disabled,
            'p-invalid': instance.$invalid
        }
    ],
    range: 'p-knob-range',
    value: 'p-knob-value',
    text: 'p-knob-text'
};

export default BaseStyle.extend({
    name: 'knob',
    style,
    classes
});
