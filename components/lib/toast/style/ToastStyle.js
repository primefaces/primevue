import BaseStyle from 'primevue/base/style';

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
            'p-ripple-disabled': instance.$primevue.config.ripple === false
        }
    ],
    container: ({ props }) => [
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
    classes,
    inlineStyles
});
