import BaseDirective from 'primevue/basedirective';
import { useStyle } from 'primevue/usestyle';

const styles = `
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 100%;
    transform: scale(0);
    pointer-events: none;
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
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

const { load: loadStyle } = useStyle(styles, { name: 'ripple', manual: true });

const BaseRipple = BaseDirective.extend({
    css: {
        classes,
        loadStyle
    }
});

export default BaseRipple;
