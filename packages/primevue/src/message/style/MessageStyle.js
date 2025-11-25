import { style } from '@primeuix/styles/message';
import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: ({ props }) => [
        'p-message p-component p-message-' + props.severity,
        {
            'p-message-outlined': props.variant === 'outlined',
            'p-message-simple': props.variant === 'simple',
            'p-message-sm': props.size === 'small',
            'p-message-lg': props.size === 'large'
        }
    ],
    contentWrapper: 'p-message-content-wrapper',
    content: 'p-message-content',
    icon: 'p-message-icon',
    text: 'p-message-text',
    closeButton: 'p-message-close-button',
    closeIcon: 'p-message-close-icon'
};

export default BaseStyle.extend({
    name: 'message',
    style,
    classes
});
