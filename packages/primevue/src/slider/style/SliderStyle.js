import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-slider {
    position: relative;
    background: ${dt('slider.track.background')};
    border-radius: ${dt('slider.border.radius')};
}

.p-slider-handle {
    cursor: grab;
    touch-action: none;
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${dt('slider.handle.height')};
    width: ${dt('slider.handle.width')};
    background: ${dt('slider.handle.background')};
    border-radius: ${dt('slider.handle.border.radius')};
    transition: background ${dt('slider.transition.duration')}, color ${dt('slider.transition.duration')}, border-color ${dt('slider.transition.duration')}, box-shadow ${dt('slider.transition.duration')}, outline-color ${dt(
        'slider.transition.duration'
    )};
    outline-color: transparent;
}

.p-slider-handle::before {
    content: "";
    width: ${dt('slider.handle.content.width')};
    height: ${dt('slider.handle.content.height')};
    display: block;
    background: ${dt('slider.handle.content.background')};
    border-radius: ${dt('slider.handle.content.border.radius')};
    box-shadow: ${dt('slider.handle.content.shadow')};
    transition: background ${dt('slider.transition.duration')};
}

.p-slider:not(.p-disabled) .p-slider-handle:hover {
    background: ${dt('slider.handle.hover.background')};
}

.p-slider:not(.p-disabled) .p-slider-handle:hover::before {
    background: ${dt('slider.handle.content.hover.background')};
}

.p-slider-handle:focus-visible {
    border-color: ${dt('slider.handle.focus.border.color')};
    box-shadow: ${dt('slider.handle.focus.ring.shadow')};
    outline: ${dt('slider.handle.focus.ring.width')} ${dt('slider.handle.focus.ring.style')} ${dt('slider.handle.focus.ring.color')};
    outline-offset: ${dt('slider.handle.focus.ring.offset')};
}

.p-slider-range {
    display: block;
    background: ${dt('slider.range.background')};
    border-radius: ${dt('slider.border.radius')};
}

.p-slider.p-slider-horizontal {
    height: ${dt('slider.track.size')};
}

.p-slider-horizontal .p-slider-range {
    top: 0;
    left: 0;
    height: 100%;
}

.p-slider-horizontal .p-slider-handle {
    top: 50%;
    margin-top: calc(-1 * calc(${dt('slider.handle.height')} / 2));
    margin-left: calc(-1 * calc(${dt('slider.handle.width')} / 2));
}

.p-slider-vertical {
    min-height: 100px;
    width: ${dt('slider.track.size')};
}

.p-slider-vertical .p-slider-handle {
    left: 50%;
    margin-left: calc(-1 * calc(${dt('slider.handle.width')} / 2));
    margin-bottom: calc(-1 * calc(${dt('slider.handle.height')} / 2));
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
