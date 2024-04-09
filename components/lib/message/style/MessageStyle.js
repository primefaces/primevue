import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ props }) => 'p-message p-component p-message-' + props.severity,
    wrapper: 'p-message-content',
    icon: 'p-message-icon',
    text: 'p-message-text',
    closeButton: 'p-message-close-button',
    closeIcon: 'p-message-close-icon'
};

export default BaseStyle.extend({
    name: 'message',
    classes
});
