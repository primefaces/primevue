export default {
    variables: {
        colorScheme: {
            light: {
                panel: {
                    background: '{surface.800}',
                    borderColor: '{surface.900}'
                },
                handle: {
                    color: '{surface.0}'
                }
            },
            dark: {
                panel: {
                    background: '{surface.900}',
                    borderColor: '{surface.700}'
                },
                handle: {
                    color: '{surface.0}'
                }
            }
        }
    },
    css: `
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
    border-radius: var(--p-rounded-base);
    transition: outline-color var(--p-transition-duration);
    outline-color: transparent;
}

.p-colorpicker-preview:enabled:focus-visible {
    outline: var(--p-focus-ring-width) var(--p-focus-ring-style) var(--p-focus-ring-color);
    outline-offset: var(--p-focus-ring-offset);
}

.p-colorpicker > .p-colorpicker-panel {
    background: var(--p-colorpicker-panel-background);
    border: 1px solid var(--p-colorpicker-panel-border-color);
    border-radius: var(--p-rounded-base);
}

.p-colorpicker-panel .p-colorpicker-color-handle,
.p-colorpicker-panel .p-colorpicker-hue-handle {
    border-color: var(--p-colorpicker-handle-color);
}

.p-colorpicker-overlay-panel {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}
`
};
