import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-imagecompare {
    position: relative;
    overflow: hidden;
    width: 100%;
    aspect-ratio: 16 / 9;
}

.p-imagecompare img {
    width: 100%;
    height: 100%;
    position: absolute;
}

.p-imagecompare img + img {
    clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%);
}

.p-imagecompare-slider {
    position: relative;
    -webkit-appearance: none;
    width: calc(100% + ${dt('imagecompare.handle.size')});
    height: 100%;
    margin-left: calc(-1 * calc(${dt('imagecompare.handle.size')} / 2));
    background-color: transparent;
    outline: none;
    transition: all ${dt('imagecompare.handle.transition.duration')};
}

.p-imagecompare-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: ${dt('imagecompare.handle.size')};
    width: ${dt('imagecompare.handle.size')};
    background: ${dt('imagecompare.handle.background')};
    border: ${dt('imagecompare.handle.border.width')} solid ${dt('imagecompare.handle.border.color')};
    border-radius: ${dt('imagecompare.handle.border.radius')};
    background-size: contain;
    cursor: ew-resize;
    transition: all ${dt('imagecompare.handle.transition.duration')};
}

.p-imagecompare-slider::-moz-range-thumb {
    height: ${dt('imagecompare.handle.size')};
    width: ${dt('imagecompare.handle.size')};
    background: ${dt('imagecompare.handle.background')};
    border: ${dt('imagecompare.handle.border.width')} ${dt('imagecompare.handle.border.style')} ${dt('imagecompare.handle.border.color')};
    border-radius: ${dt('imagecompare.handle.border.radius')};
    background-size: contain;
    cursor: ew-resize;
}

.p-imagecompare-slider:focus-visible::-webkit-slider-thumb {
    box-shadow: ${dt('imagecompare.handle.focus.ring.shadow')};
    outline: ${dt('imagecompare.handle.focus.ring.width')} ${dt('imagecompare.handle.focus.ring.style')} ${dt('imagecompare.handle.focus.ring.color')};
    outline-offset: ${dt('imagecompare.handle.focus.ring.offset')};
}

.p-imagecompare-slider:focus-visible::-moz-range-thumb {
    box-shadow: ${dt('imagecompare.handle.focus.ring.shadow')};
    outline: ${dt('imagecompare.handle.focus.ring.width')} ${dt('imagecompare.handle.focus.ring.style')} ${dt('imagecompare.handle.focus.ring.color')};
    outline-offset: ${dt('imagecompare.handle.focus.ring.offset')};
}
    
.p-imagecompare-slider:hover {
    width: calc(100% + ${dt('imagecompare.handle.hover.size')});
    margin-left: calc(-1 * calc(${dt('imagecompare.handle.hover.size')} / 2));
}

.p-imagecompare-slider:hover::-webkit-slider-thumb {
    background: ${dt('imagecompare.handle.hover.background')};
    border-color: ${dt('imagecompare.handle.hover.border.color')};
    height: ${dt('imagecompare.handle.hover.size')};
    width: ${dt('imagecompare.handle.hover.size')};
}

.p-imagecompare-slider:hover::-moz-range-thumb {
    background: ${dt('imagecompare.handle.hover.background')};
    border-color: ${dt('imagecompare.handle.hover.border.color')};
    height: ${dt('imagecompare.handle.hover.size')};
    width: ${dt('imagecompare.handle.hover.size')};
}
`;

const classes = {
    root: 'p-imagecompare',
    slider: 'p-imagecompare-slider'
};

export default BaseStyle.extend({
    name: 'imagecompare',
    theme,
    classes
});
