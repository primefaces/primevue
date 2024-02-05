import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ props, instance }) => ['p-inline-message p-component p-inline-message-' + props.severity, { 'p-inline-message-icon-only': !instance.$slots.default }],
    icon: ({ props }) => ['p-inline-message-icon', props.icon],
    text: 'p-inline-message-text'
};

export default BaseStyle.extend({
    name: 'inlinemessage',
    classes
});
