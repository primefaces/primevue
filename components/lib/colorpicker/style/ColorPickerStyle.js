import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ props }) => ['p-colorpicker p-component', { 'p-colorpicker-overlay': !props.inline }],
    input: ({ props }) => ['p-colorpicker-preview p-inputtext', { 'p-disabled': props.disabled }],
    panel: ({ instance, props }) => [
        'p-colorpicker-panel',
        {
            'p-colorpicker-overlay-panel': !props.inline,
            'p-disabled': props.disabled,
            'p-ripple-disabled': instance.$primevue.config.ripple === false
        }
    ],
    content: 'p-colorpicker-content',
    selector: 'p-colorpicker-color-selector',
    color: 'p-colorpicker-color',
    colorHandle: 'p-colorpicker-color-handle',
    hue: 'p-colorpicker-hue',
    hueHandle: 'p-colorpicker-hue-handle'
};

export default BaseStyle.extend({
    name: 'colorpicker',
    classes
});
