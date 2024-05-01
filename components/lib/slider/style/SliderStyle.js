import BaseStyle from 'primevue/base/style';

const theme = ({ dt }) => `
.p-slider {
    position: relative;
    background: ${dt('slider.track.background')};
    border-radius: ${dt('rounded.base')};
}

.p-slider-handle {
    cursor: grab;
    touch-action: none;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20px;
    width: 20px;
    background: ${dt('slider.handle.background')};
    border: 0 none;
    border-radius: 50%;
    transition: background ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, box-shadow ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    outline-color: transparent;
}

.p-slider-handle::before {
    content: "";
    width: 16px;
    height: 16px;
    display: block;
    background-color: ${dt('slider.handle.content.background')};
    border-radius: 50%;
    box-shadow: 0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14);
}

.p-slider:not(.p-disabled) .p-slider-handle:hover {
    background: ${dt('slider.handle.hover.background')};
    border-color: transparent;
}

.p-slider-handle:focus-visible {
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
    outline-offset: 0;
}

.p-slider-range {
    display: block;
    background: ${dt('slider.range.background')};
    border-radius: ${dt('rounded.base')};
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
`;

const inlineStyles = {
    handle: { position: 'absolute' },
    range: { position: 'absolute' }
};

const classes = {
    root: ({ props }) => [
        'p-slider p-component',
        {
            'p-disabled': props.disabled,
            'p-slider-horizontal': props.orientation === 'horizontal',
            'p-slider-vertical': props.orientation === 'vertical'
        }
    ],
    range: 'p-slider-range',
    handle: 'p-slider-handle'
};

export default BaseStyle.extend({
    name: 'slider',
    theme,
    classes,
    inlineStyles
});
