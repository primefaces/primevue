import { style } from '@primeuix/styles/slider';
import BaseStyle from '@primevue/core/base/style';

const inlineStyles = {
    handle: { position: 'absolute' },
    range: { position: 'absolute' }
};

const classes = {
    root: ({ instance, props }) => [
        'p-slider p-component',
        {
            'p-disabled': props.disabled,
            'p-invalid': instance.$invalid,
            'p-slider-horizontal': props.orientation === 'horizontal',
            'p-slider-vertical': props.orientation === 'vertical'
        }
    ],
    range: 'p-slider-range',
    handle: 'p-slider-handle'
};

export default BaseStyle.extend({
    name: 'slider',
    style,
    classes,
    inlineStyles
});
