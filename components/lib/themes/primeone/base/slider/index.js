export default {
    css: `
.p-slider {
    position: relative;
    background: var(--p-slider-track-background);
    border-radius: var(--p-rounded-base);
}

.p-slider-handle {
    cursor: grab;
    touch-action: none;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20px;
    width: 20px;
    background: var(--p-slider-handle-background);
    border: 0 none;
    border-radius: 50%;
    transition: background-color var(--p-transition-duration), color var(--p-transition-duration), border-color var(--p-transition-duration), box-shadow var(--p-transition-duration), outline-color var(--p-transition-duration);
    outline-color: transparent;
}

.p-slider-handle::before {
    content: "";
    width: 16px;
    height: 16px;
    display: block;
    background-color: var(--p-slider-handle-content-background);
    border-radius: 50%;
    box-shadow: 0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14);
}

.p-slider:not(.p-disabled) .p-slider-handle:hover {
    background: var(--p-slider-handle-background-hover);
    border-color: transparent;
}

.p-slider-handle:focus-visible {
    outline: var(--p-focus-ring-width) var(--p-focus-ring-style) var(--p-focus-ring-color);
    outline-offset: 0;
}

.p-slider-range {
    display: block;
    background: var(--p-slider-range-background);
    border-radius: var(--p-rounded-base);
}

.p-slider.p-slider-horizontal {
    height: 3px;
}

.p-slider-horizontal .p-slider-range {
    top: 0;
    left: 0;
    height: 100%;
}

.p-slider-horizontal .p-slider-handle {
    top: 50%;
    margin-top: -10px;
    margin-left: -10px;
}

.p-slider-vertical {
    height: 100px;
    width: 3px;
}

.p-slider-vertical .p-slider-handle {
    left: 50%;
    margin-left: -10px;
    margin-bottom: -10px;
}

.p-slider-vertical .p-slider-range {
    bottom: 0;
    left: 0;
    width: 100%;
}
`
};
