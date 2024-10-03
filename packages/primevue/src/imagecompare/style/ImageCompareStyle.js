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
    width: calc(100% + 40px);
    height: 100%;
    margin-left: -20px;
    background-color: transparent;
    outline: none;
}

.p-imagecompare-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 45px;
    width: 45px;
    background: #ffffff33;
    border: 3px solid #ffffff99;
    border-radius: 50%;
    background-size: contain;
    cursor: ew-resize;
}

.p-imagecompare-slider::-moz-range-thumb {
    height: 45px;
    width: 45px;
    background: #ffffff33;
    border: 3px solid #ffffff99;
    border-radius: 50%;
    background-size: contain;
    cursor: ew-resize;
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
