import { style } from '@primeuix/styles/toast';
import BaseStyle from '@primevue/core/base/style';

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
    style,
    classes,
    inlineStyles
});
