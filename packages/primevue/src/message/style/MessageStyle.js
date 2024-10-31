import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-message {
    border-radius: ${dt('message.border.radius')};
    outline-width: ${dt('message.border.width')};
    outline-style: solid;
}

.p-message-content {
    display: flex;
    align-items: center;
    padding: ${dt('message.content.padding')};
    gap: ${dt('message.content.gap')};
    height: 100%;
}

.p-message-icon {
    flex-shrink: 0;
}

.p-message-close-button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-inline-start: auto;
    overflow: hidden;
    position: relative;
    width: ${dt('message.close.button.width')};
    height: ${dt('message.close.button.height')};
    border-radius: ${dt('message.close.button.border.radius')};
    background: transparent;
    transition: background ${dt('message.transition.duration')}, color ${dt('message.transition.duration')}, outline-color ${dt('message.transition.duration')}, box-shadow ${dt('message.transition.duration')}, opacity 0.3s;
    outline-color: transparent;
    color: inherit;
    padding: 0;
    border: none;
    cursor: pointer;
    user-select: none;
}

.p-message-close-icon {
    font-size: ${dt('message.close.icon.size')};
    width: ${dt('message.close.icon.size')};
    height: ${dt('message.close.icon.size')};
}

.p-message-close-button:focus-visible {
    outline-width: ${dt('message.close.button.focus.ring.width')};
    outline-style: ${dt('message.close.button.focus.ring.style')};
    outline-offset: ${dt('message.close.button.focus.ring.offset')};
}

.p-message-info {
    background: ${dt('message.info.background')};
    outline-color: ${dt('message.info.border.color')};
    color: ${dt('message.info.color')};
    box-shadow: ${dt('message.info.shadow')};
}

.p-message-info .p-message-close-button:focus-visible {
    outline-color: ${dt('message.info.close.button.focus.ring.color')};
    box-shadow: ${dt('message.info.close.button.focus.ring.shadow')};
}

.p-message-info .p-message-close-button:hover {
    background: ${dt('message.info.close.button.hover.background')};
}

.p-message-info.p-message-outlined {
    color: ${dt('message.info.outlined.color')};
    outline-color: ${dt('message.info.outlined.border.color')};
}

.p-message-info.p-message-simple {
    color: ${dt('message.info.simple.color')};
}

.p-message-success {
    background: ${dt('message.success.background')};
    outline-color: ${dt('message.success.border.color')};
    color: ${dt('message.success.color')};
    box-shadow: ${dt('message.success.shadow')};
}

.p-message-success .p-message-close-button:focus-visible {
    outline-color: ${dt('message.success.close.button.focus.ring.color')};
    box-shadow: ${dt('message.success.close.button.focus.ring.shadow')};
}

.p-message-success .p-message-close-button:hover {
    background: ${dt('message.success.close.button.hover.background')};
}

.p-message-success.p-message-outlined {
    color: ${dt('message.success.outlined.color')};
    outline-color: ${dt('message.success.outlined.border.color')};
}

.p-message-success.p-message-simple {
    color: ${dt('message.success.simple.color')};
}

.p-message-warn {
    background: ${dt('message.warn.background')};
    outline-color: ${dt('message.warn.border.color')};
    color: ${dt('message.warn.color')};
    box-shadow: ${dt('message.warn.shadow')};
}

.p-message-warn .p-message-close-button:focus-visible {
    outline-color: ${dt('message.warn.close.button.focus.ring.color')};
    box-shadow: ${dt('message.warn.close.button.focus.ring.shadow')};
}

.p-message-warn .p-message-close-button:hover {
    background: ${dt('message.warn.close.button.hover.background')};
}

.p-message-warn.p-message-outlined {
    color: ${dt('message.warn.outlined.color')};
    outline-color: ${dt('message.warn.outlined.border.color')};
}

.p-message-warn.p-message-simple {
    color: ${dt('message.warn.simple.color')};
}

.p-message-error {
    background: ${dt('message.error.background')};
    outline-color: ${dt('message.error.border.color')};
    color: ${dt('message.error.color')};
    box-shadow: ${dt('message.error.shadow')};
}

.p-message-error .p-message-close-button:focus-visible {
    outline-color: ${dt('message.error.close.button.focus.ring.color')};
    box-shadow: ${dt('message.error.close.button.focus.ring.shadow')};
}

.p-message-error .p-message-close-button:hover {
    background: ${dt('message.error.close.button.hover.background')};
}

.p-message-error.p-message-outlined {
    color: ${dt('message.error.outlined.color')};
    outline-color: ${dt('message.error.outlined.border.color')};
}

.p-message-error.p-message-simple {
    color: ${dt('message.error.simple.color')};
}

.p-message-secondary {
    background: ${dt('message.secondary.background')};
    outline-color: ${dt('message.secondary.border.color')};
    color: ${dt('message.secondary.color')};
    box-shadow: ${dt('message.secondary.shadow')};
}

.p-message-secondary .p-message-close-button:focus-visible {
    outline-color: ${dt('message.secondary.close.button.focus.ring.color')};
    box-shadow: ${dt('message.secondary.close.button.focus.ring.shadow')};
}

.p-message-secondary .p-message-close-button:hover {
    background: ${dt('message.secondary.close.button.hover.background')};
}

.p-message-secondary.p-message-outlined {
    color: ${dt('message.secondary.outlined.color')};
    outline-color: ${dt('message.secondary.outlined.border.color')};
}

.p-message-secondary.p-message-simple {
    color: ${dt('message.secondary.simple.color')};
}

.p-message-contrast {
    background: ${dt('message.contrast.background')};
    outline-color: ${dt('message.contrast.border.color')};
    color: ${dt('message.contrast.color')};
    box-shadow: ${dt('message.contrast.shadow')};
}

.p-message-contrast .p-message-close-button:focus-visible {
    outline-color: ${dt('message.contrast.close.button.focus.ring.color')};
    box-shadow: ${dt('message.contrast.close.button.focus.ring.shadow')};
}

.p-message-contrast .p-message-close-button:hover {
    background: ${dt('message.contrast.close.button.hover.background')};
}

.p-message-contrast.p-message-outlined {
    color: ${dt('message.contrast.outlined.color')};
    outline-color: ${dt('message.contrast.outlined.border.color')};
}

.p-message-contrast.p-message-simple {
    color: ${dt('message.contrast.simple.color')};
}

.p-message-text {
    font-size: ${dt('message.text.font.size')};
    font-weight: ${dt('message.text.font.weight')};
}

.p-message-icon {
    font-size: ${dt('message.icon.size')};
    width: ${dt('message.icon.size')};
    height: ${dt('message.icon.size')};
}

.p-message-enter-from {
    opacity: 0;
}

.p-message-enter-active {
    transition: opacity 0.3s;
}

.p-message.p-message-leave-from {
    max-height: 1000px;
}

.p-message.p-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin: 0;
}

.p-message-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin 0.3s;
}

.p-message-leave-active .p-message-close-button {
    opacity: 0;
}

.p-message-sm .p-message-content {
    padding: ${dt('message.content.sm.padding')};
}

.p-message-sm .p-message-text {
    font-size: ${dt('message.text.sm.font.size')};
}

.p-message-sm .p-message-icon {
    font-size: ${dt('message.icon.sm.size')};
    width: ${dt('message.icon.sm.size')};
    height: ${dt('message.icon.sm.size')};
}

.p-message-sm .p-message-close-icon {
    font-size: ${dt('message.close.icon.sm.size')};
    width: ${dt('message.close.icon.sm.size')};
    height: ${dt('message.close.icon.sm.size')};
}

.p-message-lg .p-message-content {
    padding: ${dt('message.content.lg.padding')};
}

.p-message-lg .p-message-text {
    font-size: ${dt('message.text.lg.font.size')};
}

.p-message-lg .p-message-icon {
    font-size: ${dt('message.icon.lg.size')};
    width: ${dt('message.icon.lg.size')};
    height: ${dt('message.icon.lg.size')};
}

.p-message-lg .p-message-close-icon {
    font-size: ${dt('message.close.icon.lg.size')};
    width: ${dt('message.close.icon.lg.size')};
    height: ${dt('message.close.icon.lg.size')};
}

.p-message-outlined {
    background: transparent;
    outline-width: ${dt('message.outlined.border.width')};
}

.p-message-simple {
    background: transparent;
    outline-color: transparent;
    box-shadow: none;
}

.p-message-simple .p-message-content {
    padding: ${dt('message.simple.content.padding')};
}

.p-message-outlined .p-message-close-button:hover,
.p-message-simple .p-message-close-button:hover {
    background: transparent;
}
`;

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
    content: 'p-message-content',
    icon: 'p-message-icon',
    text: 'p-message-text',
    closeButton: 'p-message-close-button',
    closeIcon: 'p-message-close-icon'
};

export default BaseStyle.extend({
    name: 'message',
    theme,
    classes
});
