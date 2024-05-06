import BaseStyle from 'primevue/base/style';

const theme = ({ dt }) => `
.p-inline-message {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 0.75rem;
    margin: 0;
    border-radius: ${dt('border.radius.md')};
}

.p-inline-message-text {
    font-weight: 500;
}

.p-inline-message-icon {
    flex-shrink: 0;
    margin-right: 0.5rem;
}

.p-inline-message-icon-only .p-inline-message-text {
    visibility: hidden;
    width: 0;
}

.p-fluid .p-inline-message {
    display: flex;
}

.p-inline-message-info {
    background: ${dt('inlinemessage.info.background')};
    border: 1px solid ${dt('inlinemessage.info.border.color')};
    color: ${dt('inlinemessage.info.color')};
    box-shadow: ${dt('inlinemessage.info.box.shadow')};
}

.p-inline-message-info .p-inline-message-icon {
    color: ${dt('inlinemessage.info.color')};
}

.p-inline-message-success {
    background: ${dt('inlinemessage.success.background')};
    border: 1px solid ${dt('inlinemessage.success.border.color')};
    color: ${dt('inlinemessage.success.color')};
    box-shadow: ${dt('inlinemessage.success.box.shadow')};
}
.p-inline-message-success .p-inline-message-icon {
    color: ${dt('inlinemessage.success.color')};
}

.p-inline-message-warn {
    background: ${dt('inlinemessage.warn.background')};
    border: 1px solid ${dt('inlinemessage.warn.border.color')};
    color: ${dt('inlinemessage.warn.color')};
    box-shadow: ${dt('inlinemessage.warn.box.shadow')};
}
.p-inline-message-warn .p-inline-message-icon {
    color: ${dt('inlinemessage.warn.color')};
}

.p-inline-message-error {
    background: ${dt('inlinemessage.error.background')};
    border: 1px solid ${dt('inlinemessage.error.border.color')};
    color: ${dt('inlinemessage.error.color')};
    box-shadow: ${dt('inlinemessage.error.box.shadow')};
}
.p-inline-message-error .p-inline-message-icon {
    color: ${dt('inlinemessage.error.color')};
}

.p-inline-message-secondary {
    background: ${dt('inlinemessage.secondary.background')};
    border: 1px solid ${dt('inlinemessage.secondary.border.color')};
    color: ${dt('inlinemessage.secondary.color')};
    box-shadow: ${dt('inlinemessage.secondary.box.shadow')};
}
.p-inline-message-secondary .p-inline-message-icon {
    color: ${dt('inlinemessage.secondary.color')};
}

.p-inline-message-contrast {
    background: ${dt('inlinemessage.contrast.background')};
    border: 1px solid ${dt('inlinemessage.contrast.border.color')};
    color: ${dt('inlinemessage.contrast.color')};
    box-shadow: ${dt('inlinemessage.contrast.box.shadow')};
}
.p-inline-message-contrast .p-inline-message-icon {
    color: ${dt('inlinemessage.contrast.color')};
}

.p-inline-message-icon-only .p-inline-message-icon {
    margin-right: 0;
}
`;

const classes = {
    root: ({ props, instance }) => ['p-inline-message p-component p-inline-message-' + props.severity, { 'p-inline-message-icon-only': !instance.$slots.default }],
    icon: ({ props }) => ['p-inline-message-icon', props.icon],
    text: 'p-inline-message-text'
};

export default BaseStyle.extend({
    name: 'inlinemessage',
    theme,
    classes
});
