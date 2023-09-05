import BaseDirective from 'primevue/basedirective';
import { useStyle } from 'primevue/usestyle';

const styles = `
.p-badge {
    display: inline-block;
    border-radius: 10px;
    text-align: center;
    padding: 0 .5rem;
}

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge .p-badge {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%,-50%);
    transform-origin: 100% 0;
    margin: 0;
}

.p-badge-dot {
    width: .5rem;
    min-width: .5rem;
    height: .5rem;
    border-radius: 50%;
    padding: 0;
}

.p-badge-no-gutter {
    padding: 0;
    border-radius: 50%;
}
`;

const classes = {
    root: 'p-badge p-component'
};

const { load: loadStyle } = useStyle(styles, { name: 'badge', manual: true });

const BaseBadgeDirective = BaseDirective.extend({
    css: {
        classes,
        loadStyle
    }
});

export default BaseBadgeDirective;
