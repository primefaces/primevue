import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-toast {
    width: ${dt('toast.width')};
    white-space: pre-line;
    word-break: break-word;
}

.p-toast-message {
    margin: 0 0 1rem 0;
}

.p-toast-message-icon {
    flex-shrink: 0;
    font-size: ${dt('toast.icon.size')};
    width: ${dt('toast.icon.size')};
    height: ${dt('toast.icon.size')};
}

.p-toast-message-content {
    display: flex;
    align-items: flex-start;
    padding: ${dt('toast.content.padding')};
    gap: ${dt('toast.content.gap')};
}

.p-toast-message-text {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    gap: ${dt('toast.text.gap')};
}

.p-toast-summary {
    font-weight: ${dt('toast.summary.font.weight')};
    font-size: ${dt('toast.summary.font.size')};
}

.p-toast-detail {
    font-weight: ${dt('toast.detail.font.weight')};
    font-size: ${dt('toast.detail.font.size')};
}

.p-toast-close-button {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    background: transparent;
    transition: background ${dt('toast.transition.duration')}, color ${dt('toast.transition.duration')}, outline-color ${dt('toast.transition.duration')}, box-shadow ${dt('toast.transition.duration')};
    outline-color: transparent;
    color: inherit;
    width: ${dt('toast.close.button.width')};
    height: ${dt('toast.close.button.height')};
    border-radius: ${dt('toast.close.button.border.radius')};
    margin: -25% 0 0 0;
    right: -25%;
    padding: 0;
    border: none;
    user-select: none;
}

.p-toast-message-info,
.p-toast-message-success,
.p-toast-message-warn,
.p-toast-message-error,
.p-toast-message-secondary,
.p-toast-message-contrast {
    border-width: ${dt('toast.border.width')};
    border-style: solid;
    backdrop-filter: blur(${dt('toast.blur')});
    border-radius: ${dt('toast.border.radius')};
}

.p-toast-close-icon {
    font-size: ${dt('toast.close.icon.size')};
    width: ${dt('toast.close.icon.size')};
    height: ${dt('toast.close.icon.size')};
}

.p-toast-close-button:focus-visible {
    outline-width: ${dt('focus.ring.width')};
    outline-style: ${dt('focus.ring.style')};
    outline-offset: ${dt('focus.ring.offset')};
}

.p-toast-message-info {
    background: ${dt('toast.info.background')};
    border-color: ${dt('toast.info.border.color')};
    color: ${dt('toast.info.color')};
    box-shadow: ${dt('toast.info.shadow')};
}

.p-toast-message-info .p-toast-detail {
    color: ${dt('toast.info.detail.color')};
}

.p-toast-message-info .p-toast-close-button:focus-visible {
    outline-color: ${dt('toast.info.close.button.focus.ring.color')};
    box-shadow: ${dt('toast.info.close.button.focus.ring.shadow')};
}

.p-toast-message-info .p-toast-close-button:hover {
    background: ${dt('toast.info.close.button.hover.background')};
}

.p-toast-message-success {
    background: ${dt('toast.success.background')};
    border-color: ${dt('toast.success.border.color')};
    color: ${dt('toast.success.color')};
    box-shadow: ${dt('toast.success.shadow')};
}

.p-toast-message-success .p-toast-detail {
    color: ${dt('toast.success.detail.color')};
}

.p-toast-message-success .p-toast-close-button:focus-visible {
    outline-color: ${dt('toast.success.close.button.focus.ring.color')};
    box-shadow: ${dt('toast.success.close.button.focus.ring.shadow')};
}

.p-toast-message-success .p-toast-close-button:hover {
    background: ${dt('toast.success.close.button.hover.background')};
}

.p-toast-message-warn {
    background: ${dt('toast.warn.background')};
    border-color: ${dt('toast.warn.border.color')};
    color: ${dt('toast.warn.color')};
    box-shadow: ${dt('toast.warn.shadow')};
}

.p-toast-message-warn .p-toast-detail {
    color: ${dt('toast.warn.detail.color')};
}

.p-toast-message-warn .p-toast-close-button:focus-visible {
    outline-color: ${dt('toast.warn.close.button.focus.ring.color')};
    box-shadow: ${dt('toast.warn.close.button.focus.ring.shadow')};
}

.p-toast-message-warn .p-toast-close-button:hover {
    background: ${dt('toast.warn.close.button.hover.background')};
}

.p-toast-message-error {
    background: ${dt('toast.error.background')};
    border-color: ${dt('toast.error.border.color')};
    color: ${dt('toast.error.color')};
    box-shadow: ${dt('toast.error.shadow')};
}

.p-toast-message-error .p-toast-detail {
    color: ${dt('toast.error.detail.color')};
}

.p-toast-message-error .p-toast-close-button:focus-visible {
    outline-color: ${dt('toast.error.close.button.focus.ring.color')};
    box-shadow: ${dt('toast.error.close.button.focus.ring.shadow')};
}

.p-toast-message-error .p-toast-close-button:hover {
    background: ${dt('toast.error.close.button.hover.background')};
}

.p-toast-message-secondary {
    background: ${dt('toast.secondary.background')};
    border-color: ${dt('toast.secondary.border.color')};
    color: ${dt('toast.secondary.color')};
    box-shadow: ${dt('toast.secondary.shadow')};
}

.p-toast-message-secondary .p-toast-detail {
    color: ${dt('toast.secondary.detail.color')};
}

.p-toast-message-secondary .p-toast-close-button:focus-visible {
    outline-color: ${dt('toast.secondary.close.button.focus.ring.color')};
    box-shadow: ${dt('toast.secondary.close.button.focus.ring.shadow')};
}

.p-toast-message-secondary .p-toast-close-button:hover {
    background: ${dt('toast.secondary.close.button.hover.background')};
}

.p-toast-message-contrast {
    background: ${dt('toast.contrast.background')};
    border-color: ${dt('toast.contrast.border.color')};
    color: ${dt('toast.contrast.color')};
    box-shadow: ${dt('toast.contrast.shadow')};
}

.p-toast-message-contrast .p-toast-detail {
    color: ${dt('toast.contrast.detail.color')};
}

.p-toast-message-contrast .p-toast-close-button:focus-visible {
    outline-color: ${dt('toast.contrast.close.button.focus.ring.color')};
    box-shadow: ${dt('toast.contrast.close.button.focus.ring.shadow')};
}

.p-toast-message-contrast .p-toast-close-button:hover {
    background: ${dt('toast.contrast.close.button.hover.background')};
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

.p-toast-message-enter-from {
    opacity: 0;
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
    transition: transform 0.3s, opacity 0.3s;
}

.p-toast-message-leave-active {
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin-bottom 0.3s;
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
    root: ({ props }) => ['p-toast p-component p-toast-' + props.position],
    message: ({ props }) => [
        'p-toast-message',
        {
            'p-toast-message-info': props.message.severity === 'info' || props.message.severity === undefined,
            'p-toast-message-warn': props.message.severity === 'warn',
            'p-toast-message-error': props.message.severity === 'error',
            'p-toast-message-success': props.message.severity === 'success',
            'p-toast-message-secondary': props.message.severity === 'secondary',
            'p-toast-message-contrast': props.message.severity === 'contrast'
        }
    ],
    messageContent: 'p-toast-message-content',
    messageIcon: ({ props }) => [
        'p-toast-message-icon',
        {
            [props.infoIcon]: props.message.severity === 'info',
            [props.warnIcon]: props.message.severity === 'warn',
            [props.errorIcon]: props.message.severity === 'error',
            [props.successIcon]: props.message.severity === 'success'
        }
    ],
    messageText: 'p-toast-message-text',
    summary: 'p-toast-summary',
    detail: 'p-toast-detail',
    closeButton: 'p-toast-close-button',
    closeIcon: 'p-toast-close-icon'
};

export default BaseStyle.extend({
    name: 'toast',
    theme,
    classes,
    inlineStyles
});
