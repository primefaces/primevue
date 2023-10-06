import BaseStyle from 'primevue/base/style';

const css = `
@layer primevue {
    .p-colorpicker-panel .p-colorpicker-color {
        background: linear-gradient(to top, #000 0%, rgb(0 0 0 / 0) 100%), linear-gradient(to right, #fff 0%, rgb(255 255 255 / 0) 100%)
    }

    .p-colorpicker-panel .p-colorpicker-hue {
        background: linear-gradient(0deg, red 0, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, red)
    }
}
`;

const classes = {
    root: ({ props }) => ['p-colorpicker p-component', { 'p-colorpicker-overlay': !props.inline }],
    input: ({ props }) => ['p-colorpicker-preview p-inputtext', { 'p-disabled': props.disabled }],
    panel: ({ instance, props }) => [
        'p-colorpicker-panel',
        {
            'p-colorpicker-overlay-panel': !props.inline,
            'p-disabled': props.disabled,
            'p-input-filled': instance.$primevue.config.inputStyle === 'filled',
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
    css,
    classes
});
