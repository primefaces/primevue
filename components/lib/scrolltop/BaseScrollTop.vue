<script>
import BaseComponent from 'primevue/basecomponent';
import { useStyle } from 'primevue/usestyle';

const styles = `
.p-scrolltop {
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-scrolltop-sticky {
    position: sticky;
}

.p-scrolltop-sticky.p-link {
    margin-left: auto;
}

.p-scrolltop-enter-from {
    opacity: 0;
}

.p-scrolltop-enter-active {
    transition: opacity 0.15s;
}

.p-scrolltop.p-scrolltop-leave-to {
    opacity: 0;
}

.p-scrolltop-leave-active {
    transition: opacity 0.15s;
}
`;

const classes = {
    root: ({ props }) => ['p-scrolltop p-link p-component', { 'p-scrolltop-sticky': props.target !== 'window' }],
    icon: 'p-scrolltop-icon'
};

const { load: loadStyle } = useStyle(styles, { name: 'scrolltop', manual: true });

export default {
    name: 'BaseScrollTop',
    extends: BaseComponent,
    props: {
        target: {
            type: String,
            default: 'window'
        },
        threshold: {
            type: Number,
            default: 400
        },
        icon: {
            type: String,
            default: undefined
        },
        behavior: {
            type: String,
            default: 'smooth'
        }
    },
    css: {
        classes,
        loadStyle
    },
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
