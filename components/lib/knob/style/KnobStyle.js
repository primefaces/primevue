import BaseStyle from 'primevue/base/style';

const theme = ({ dt }) => `
.p-knob-range {
    fill: none;
    transition: stroke 0.1s ease-in;
}

.p-knob-value {
    animation-name: p-knob-dash-frame;
    animation-fill-mode: forwards;
    fill: none;
}

.p-knob-text {
    font-size: 1.3rem;
    text-align: center;
}

.p-knob svg {
    border-radius: ${dt('border.radius.md')};
    outline-color: transparent;
    transition: outline-color ${dt('transition.duration')};
}
.p-knob svg:focus-visible {
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
    outline-offset: ${dt('focus.ring.offset')};
}

@keyframes p-knob-dash-frame {
    100% {
        stroke-dashoffset: 0;
    }
}
`;

const classes = {
    root: ({ props }) => ['p-knob p-component', { 'p-disabled': props.disabled }],
    range: 'p-knob-range',
    value: 'p-knob-value',
    text: 'p-knob-text'
};

export default BaseStyle.extend({
    name: 'knob',
    theme,
    classes
});
