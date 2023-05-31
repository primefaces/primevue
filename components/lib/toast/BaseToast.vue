<script>
import BaseComponent from 'primevue/basecomponent';
import { useStyle } from 'primevue/usestyle';

const styles = `
.p-toast {
    position: fixed;
    width: 25rem;
}

.p-toast-message-content {
    display: flex;
    align-items: flex-start;
}

.p-toast-message-text {
    flex: 1 1 auto;
}

.p-toast-top-right {
    top: 20px;
    right: 20px;
}

.p-toast-top-left {
    top: 20px;
    left: 20px;
}

.p-toast-bottom-left {
    bottom: 20px;
    left: 20px;
}

.p-toast-bottom-right {
    bottom: 20px;
    right: 20px;
}

.p-toast-top-center {
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
}

.p-toast-bottom-center {
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
}

.p-toast-center {
    left: 50%;
    top: 50%;
    min-width: 20vw;
    transform: translate(-50%, -50%);
}

.p-toast-icon-close {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
}

.p-toast-icon-close.p-link {
    cursor: pointer;
}

/* Animations */
.p-toast-message-enter-from {
    opacity: 0;
    -webkit-transform: translateY(50%);
    -ms-transform: translateY(50%);
    transform: translateY(50%);
}

.p-toast-message-leave-from {
    max-height: 1000px;
}

.p-toast .p-toast-message.p-toast-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin-bottom: 0;
    overflow: hidden;
}

.p-toast-message-enter-active {
    -webkit-transition: transform 0.3s, opacity 0.3s;
    transition: transform 0.3s, opacity 0.3s;
}

.p-toast-message-leave-active {
    -webkit-transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin-bottom 0.3s;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin-bottom 0.3s;
}
`;

const classes = {
    root: ({ props, instance }) => [
        'p-toast p-component p-toast-' + props.position,
        {
            'p-input-filled': instance.$primevue.config.inputStyle === 'filled',
            'p-ripple-disabled': instance.$primevue.config.ripple === false
        }
    ],
    container: ({ props }) => [
        'p-toast-message',
        props.message.styleClass,
        {
            'p-toast-message-info': props.message.severity === 'info',
            'p-toast-message-warn': props.message.severity === 'warn',
            'p-toast-message-error': props.message.severity === 'error',
            'p-toast-message-success': props.message.severity === 'success'
        }
    ],
    content: ({ props }) => `p-toast-message-content ${props.message.contentStyleClass || ''}`,
    icon: ({ props }) => [
        'p-toast-message-icon',
        {
            [props.infoIcon]: props.message.severity === 'info',
            [props.warnIcon]: props.message.severity === 'warn',
            [props.errorIcon]: props.message.severity === 'error',
            [props.successIcon]: props.message.severity === 'success'
        }
    ],
    text: 'p-toast-message-text',
    summary: 'p-toast-summary',
    detail: 'p-toast-detail',
    button: 'p-toast-icon-close p-link',
    buttonIcon: ({ props }) => ['p-toast-icon-close-icon', props.closeIcon]
};

const { load: loadStyle } = useStyle(styles, { id: 'primevue_toast_style', manual: true });

export default {
    name: 'BaseToast',
    extends: BaseComponent,
    props: {
        group: {
            type: String,
            default: null
        },
        position: {
            type: String,
            default: 'top-right'
        },
        autoZIndex: {
            type: Boolean,
            default: true
        },
        baseZIndex: {
            type: Number,
            default: 0
        },
        breakpoints: {
            type: Object,
            default: null
        },
        closeIcon: {
            type: String,
            default: undefined
        },
        infoIcon: {
            type: String,
            default: undefined
        },
        warnIcon: {
            type: String,
            default: undefined
        },
        errorIcon: {
            type: String,
            default: undefined
        },
        successIcon: {
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
