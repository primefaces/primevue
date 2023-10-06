import BaseStyle from 'primevue/base/style';

const css = `
@keyframes dash-frame {
    100% {
        stroke-dashoffset: 0;
    }
}
@layer primevue {
    .p-knob-range {
        fill: none;
        transition: stroke 0.1s ease-in;
    }
    .p-knob-value {
        animation-name: dash-frame;
        animation-fill-mode: forwards;
        fill: none;
    }
    .p-knob-text {
        font-size: 1.3rem;
        text-align: center;
    }
}
`;

const classes = {
    root: ({ props }) => ['p-knob p-component', { 'p-disabled': props.disabled }],
    range: 'p-knob-range',
    value: 'p-knob-value',
    label: 'p-knob-text'
};

export default BaseStyle.extend({
    name: 'knob',
    css,
    classes
});
