import { style } from '@primeuix/styles/colorpicker';
import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: 'p-colorpicker p-component',
    preview: ({ props }) => ['p-colorpicker-preview', { 'p-disabled': props.disabled }],
    panel: ({ instance, props }) => [
        'p-colorpicker-panel',
        {
            'p-colorpicker-panel-inline': props.inline,
            'p-disabled': props.disabled,
            'p-invalid': instance.$invalid
        }
    ],
    colorSelector: 'p-colorpicker-color-selector',
    colorBackground: 'p-colorpicker-color-background',
    colorHandle: 'p-colorpicker-color-handle',
    hue: 'p-colorpicker-hue',
    hueHandle: 'p-colorpicker-hue-handle'
};

export default BaseStyle.extend({
    name: 'colorpicker',
    style,
    classes
});
