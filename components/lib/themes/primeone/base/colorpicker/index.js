export default {
    css: ({ dt }) => `
.p-colorpicker-color {
    background: linear-gradient(to top, #000 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
}

.p-colorpicker-hue {
    background: linear-gradient(0deg,
            red 0,
            #ff0 17%,
            #0f0 33%,
            #0ff 50%,
            #00f 67%,
            #f0f 83%,
            red);
}

.p-colorpicker-preview {
    width: 1.5rem;
    height: 1.5rem;
    padding: 0;
    border: 0 none;
    border-radius: ${dt('rounded.base')};
    transition: outline-color ${dt('transition.duration')};
    outline-color: transparent;
}

.p-colorpicker-preview:enabled:focus-visible {
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
    outline-offset: ${dt('focus.ring.offset')};
}

.p-colorpicker-panel {
    background: ${dt('colorpicker.panel.background')};
    border: 1px solid ${dt('colorpicker.panel.border.color')};
    border-radius: ${dt('rounded.base')};
}

.p-colorpicker-panel .p-colorpicker-color-handle,
.p-colorpicker-panel .p-colorpicker-hue-handle {
    border-color: ${dt('colorpicker.handle.color')};
}

.p-colorpicker-overlay-panel {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}
`
};
