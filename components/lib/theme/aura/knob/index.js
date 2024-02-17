export default {
    variables: {
        colorScheme: {
            light: {},
            dark: {}
        }
    },
    css: `
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
    border-radius: var(--p-rounded-base);
    outline-color: transparent;
    transition: outline-color var(--p-transition-duration);
}
.p-knob svg:focus-visible {
    outline: var(--p-focus-ring-width) var(--p-focus-ring-style) var(--p-focus-ring-color);
    outline-offset: var(--p-focus-ring-offset);
}

@keyframes p-knob-dash-frame {
    100% {
        stroke-dashoffset: 0;
    }
}
`
};
