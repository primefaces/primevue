import BaseStyle from 'primevue/base/style';

const css = `
@layer primevue {
    .p-inline-message {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        vertical-align: top;
    }
    
    .p-inline-message-icon {
        flex-shrink: 0;
    }

    .p-inline-message-icon-only .p-inline-message-text {
        visibility: hidden;
        width: 0;
    }

    .p-fluid .p-inline-message {
        display: flex;
    }
}
`;

const classes = {
    root: ({ props, instance }) => ['p-inline-message p-component p-inline-message-' + props.severity, { 'p-inline-message-icon-only': !instance.$slots.default }],
    icon: ({ props }) => ['p-inline-message-icon', props.icon],
    text: 'p-inline-message-text'
};

export default BaseStyle.extend({
    name: 'inlinemessage',
    css,
    classes
});
