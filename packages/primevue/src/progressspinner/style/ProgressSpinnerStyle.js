import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-progressspinner {
    position: relative;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    display: inline-block;
}

.p-progressspinner::before {
    content: "";
    display: block;
    padding-top: 100%;
}

.p-progressspinner-spin {
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: p-progressspinner-rotate 2s linear infinite;
}

.p-progressspinner-circle {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: 0;
    stroke: ${dt('progressspinner.color.1')};
    animation: p-progressspinner-dash 1.5s ease-in-out infinite, p-progressspinner-color 6s ease-in-out infinite;
    stroke-linecap: round;
}

@keyframes p-progressspinner-rotate {
    100% {
        transform: rotate(360deg);
    }
}
@keyframes p-progressspinner-dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
}
@keyframes p-progressspinner-color {
    100%,
    0% {
        stroke: ${dt('progressspinner.color.1')};
    }
    40% {
        stroke: ${dt('progressspinner.color.2')};
    }
    66% {
        stroke: ${dt('progressspinner.color.3')};
    }
    80%,
    90% {
        stroke: ${dt('progressspinner.color.4')};
    }
}
`;

const classes = {
    root: 'p-progressspinner',
    spin: 'p-progressspinner-spin',
    circle: 'p-progressspinner-circle'
};

export default BaseStyle.extend({
    name: 'progressspinner',
    theme,
    classes
});
