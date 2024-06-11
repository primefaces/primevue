import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-ink {
    display: block;
    position: absolute;
    background: ${dt('ripple.background')};
    border-radius: 100%;
    transform: scale(0);
    pointer-events: none;
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`;

const classes = {
    root: 'p-ink'
};

export default BaseStyle.extend({
    name: 'ripple-directive',
    theme,
    classes
});
