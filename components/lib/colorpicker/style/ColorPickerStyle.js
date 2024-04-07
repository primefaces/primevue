import BaseStyle from 'primevue/base/style';

const classes = {
    root: 'p-colorpicker p-component',
    input: ({ props }) => ['p-colorpicker-preview', { 'p-disabled': props.disabled }],
    panel: ({ instance, props }) => [
        'p-colorpicker-panel',
        {
            'p-colorpicker-panel-inline': props.inline,
            'p-disabled': props.disabled,
            'p-ripple-disabled': instance.$primevue.config.ripple === false
        }
    ],
    selector: 'p-colorpicker-color-selector',
    color: 'p-colorpicker-color-background',
    colorHandle: 'p-colorpicker-color-handle',
    hue: 'p-colorpicker-hue',
    hueHandle: 'p-colorpicker-hue-handle'
};

export default BaseStyle.extend({
    name: 'colorpicker',
    classes
});
