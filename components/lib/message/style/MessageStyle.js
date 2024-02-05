import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ props }) => 'p-message p-component p-message-' + props.severity,
    wrapper: 'p-message-wrapper',
    icon: 'p-message-icon',
    text: 'p-message-text',
    closeButton: 'p-message-close p-link',
    closeIcon: 'p-message-close-icon'
};

export default BaseStyle.extend({
    name: 'message',
    classes
});
