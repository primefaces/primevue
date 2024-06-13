import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-inlinemessage {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: ${dt('inlinemessage.padding')};
    border-radius: ${dt('inlinemessage.border.radius')};
    gap: ${dt('inlinemessage.gap')};
}

.p-inlinemessage-text {
    font-weight: ${dt('inlinemessage.text.font.weight')};
}

.p-inlinemessage-icon {
    flex-shrink: 0;
    font-size: ${dt('inlinemessage.icon.size')};
    width: ${dt('inlinemessage.icon.size')};
    height: ${dt('inlinemessage.icon.size')};
}

.p-inlinemessage-icon-only .p-inlinemessage-text {
    visibility: hidden;
    width: 0;
}

.p-fluid .p-inlinemessage {
    display: flex;
}

.p-inlinemessage-info {
    background: ${dt('inlinemessage.info.background')};
    border: 1px solid ${dt('inlinemessage.info.border.color')};
    color: ${dt('inlinemessage.info.color')};
    box-shadow: ${dt('inlinemessage.info.shadow')};
}

.p-inlinemessage-info .p-inlinemessage-icon {
    color: ${dt('inlinemessage.info.color')};
}

.p-inlinemessage-success {
    background: ${dt('inlinemessage.success.background')};
    border: 1px solid ${dt('inlinemessage.success.border.color')};
    color: ${dt('inlinemessage.success.color')};
    box-shadow: ${dt('inlinemessage.success.shadow')};
}

.p-inlinemessage-success .p-inlinemessage-icon {
    color: ${dt('inlinemessage.success.color')};
}

.p-inlinemessage-warn {
    background: ${dt('inlinemessage.warn.background')};
    border: 1px solid ${dt('inlinemessage.warn.border.color')};
    color: ${dt('inlinemessage.warn.color')};
    box-shadow: ${dt('inlinemessage.warn.shadow')};
}

.p-inlinemessage-warn .p-inlinemessage-icon {
    color: ${dt('inlinemessage.warn.color')};
}

.p-inlinemessage-error {
    background: ${dt('inlinemessage.error.background')};
    border: 1px solid ${dt('inlinemessage.error.border.color')};
    color: ${dt('inlinemessage.error.color')};
    box-shadow: ${dt('inlinemessage.error.shadow')};
}

.p-inlinemessage-error .p-inlinemessage-icon {
    color: ${dt('inlinemessage.error.color')};
}

.p-inlinemessage-secondary {
    background: ${dt('inlinemessage.secondary.background')};
    border: 1px solid ${dt('inlinemessage.secondary.border.color')};
    color: ${dt('inlinemessage.secondary.color')};
    box-shadow: ${dt('inlinemessage.secondary.shadow')};
}

.p-inlinemessage-secondary .p-inlinemessage-icon {
    color: ${dt('inlinemessage.secondary.color')};
}

.p-inlinemessage-contrast {
    background: ${dt('inlinemessage.contrast.background')};
    border: 1px solid ${dt('inlinemessage.contrast.border.color')};
    color: ${dt('inlinemessage.contrast.color')};
    box-shadow: ${dt('inlinemessage.contrast.shadow')};
}

.p-inlinemessage-contrast .p-inlinemessage-icon {
    color: ${dt('inlinemessage.contrast.color')};
}
`;

const classes = {
    root: ({ props, instance }) => ['p-inlinemessage p-component p-inlinemessage-' + props.severity, { 'p-inlinemessage-icon-only': !instance.$slots.default }],
    icon: ({ props }) => ['p-inlinemessage-icon', props.icon],
    text: 'p-inlinemessage-text'
};

export default BaseStyle.extend({
    name: 'inlinemessage',
    theme,
    classes
});
