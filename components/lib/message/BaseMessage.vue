<script>
import BaseComponent from 'primevue/basecomponent';
import { useStyle } from 'primevue/usestyle';

const styles = `
.p-message-wrapper {
    display: flex;
    align-items: center;
}

.p-message-close {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-message-close.p-link {
    margin-left: auto;
    overflow: hidden;
    position: relative;
}

.p-message-enter-from {
    opacity: 0;
}

.p-message-enter-active {
    transition: opacity 0.3s;
}

.p-message.p-message-leave-from {
    max-height: 1000px;
}

.p-message.p-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin: 0 !important;
}

.p-message-leave-active {
    overflow: hidden;
    transition: max-height 0.3s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin 0.15s;
}

.p-message-leave-active .p-message-close {
    display: none;
}
`;

const classes = {
    root: ({ props }) => 'p-message p-component p-message-' + props.severity,
    wrapper: 'p-message-wrapper',
    icon: 'p-message-icon',
    text: 'p-message-text',
    closeButton: 'p-message-close p-link',
    closeIcon: 'p-message-close-icon'
};

const { load: loadStyle } = useStyle(styles, { name: 'message', manual: true });

export default {
    name: 'BaseMessage',
    extends: BaseComponent,
    props: {
        severity: {
            type: String,
            default: 'info'
        },
        closable: {
            type: Boolean,
            default: true
        },
        sticky: {
            type: Boolean,
            default: true
        },
        life: {
            type: Number,
            default: 3000
        },
        icon: {
            type: String,
            default: undefined
        },
        closeIcon: {
            type: String,
            default: undefined
        },
        closeButtonProps: {
            type: null,
            default: null
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
