import BaseStyle from 'primevue/base/style';

const css = `
@layer primevue {
    .p-toast {
        width: 25rem;
        white-space: pre-line;
        word-break: break-word;
    }

    .p-toast-message-icon {
        flex-shrink: 0;
    }

    .p-toast-message-content {
        display: flex;
        align-items: flex-start;
    }

    .p-toast-message-text {
        flex: 1 1 auto;
    }

    .p-toast-top-center {
        transform: translateX(-50%);
    }

    .p-toast-bottom-center {
        transform: translateX(-50%);
    }

    .p-toast-center {
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
}
`;

// Position
const inlineStyles = {
    root: ({ position }) => ({
        position: 'fixed',
        top: position === 'top-right' || position === 'top-left' || position === 'top-center' ? '20px' : position === 'center' ? '50%' : null,
        right: (position === 'top-right' || position === 'bottom-right') && '20px',
        bottom: (position === 'bottom-left' || position === 'bottom-right' || position === 'bottom-center') && '20px',
        left: position === 'top-left' || position === 'bottom-left' ? '20px' : position === 'center' || position === 'top-center' || position === 'bottom-center' ? '50%' : null
    })
};

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
        {
            'p-toast-message-info': props.message.severity === 'info' || props.message.severity === undefined,
            'p-toast-message-warn': props.message.severity === 'warn',
            'p-toast-message-error': props.message.severity === 'error',
            'p-toast-message-success': props.message.severity === 'success'
        }
    ],
    content: 'p-toast-message-content',
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
    closeButton: 'p-toast-icon-close p-link',
    closeIcon: 'p-toast-icon-close-icon'
};

export default BaseStyle.extend({
    name: 'toast',
    css,
    classes,
    inlineStyles
});
