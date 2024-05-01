import BaseStyle from 'primevue/base/style';

const theme = ({ dt }) => `
.p-message-content {
    display: flex;
    align-items: center;
    padding: 0.5rem 0.75rem;
}

.p-message {
    margin: 1rem 0;
    border-radius: 6px;
}

.p-message-icon {
    flex-shrink: 0;
}

.p-message-close-button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin: 0 0 0 auto;
    overflow: hidden;
    position: relative;
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 50%;
    background: transparent;
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    outline-color: transparent;
    color: inherit;
    padding: 0;
    border: none;
    cursor: pointer;
    user-select: none;
}

.p-message-close-button:focus-visible {
    outline-width: ${dt('focus.ring.width')};
    outline-style: ${dt('focus.ring.style')};
    outline-offset: ${dt('focus.ring.offset')};
}

.p-message-info {
    background: ${dt('message.info.background')};
    border: 1px solid ${dt('message.info.border.color')};
    color: ${dt('message.info.color')};
    box-shadow: ${dt('message.info.box.shadow')};
}

.p-message-info .p-message-close-button:focus-visible {
    outline-color: ${dt('message.info.color')};
}

.p-message-info .p-message-close-button:hover {
    background: ${dt('message.info.close.hover.background')};
}

.p-message-success {
    background: ${dt('message.success.background')};
    border: 1px solid ${dt('message.success.border.color')};
    color: ${dt('message.success.color')};
    box-shadow: ${dt('message.success.box.shadow')};
}

.p-message-success .p-message-close-button:focus-visible {
    outline-color: ${dt('message.success.color')};
}

.p-message-success .p-message-close-button:hover {
    background: ${dt('message.success.close.hover.background')};
}

.p-message-warn {
    background: ${dt('message.warn.background')};
    border: 1px solid ${dt('message.warn.border.color')};
    color: ${dt('message.warn.color')};
    box-shadow: ${dt('message.warn.box.shadow')};
}

.p-message-warn .p-message-close-button:focus-visible {
    outline-color: ${dt('message.warn.color')};
}

.p-message-warn .p-message-close-button:hover {
    background: ${dt('message.warn.close.hover.background')};
}

.p-message-error {
    background: ${dt('message.error.background')};
    border: 1px solid ${dt('message.error.border.color')};
    color: ${dt('message.error.color')};
    box-shadow: ${dt('message.error.box.shadow')};
}

.p-message-error .p-message-close-button:focus-visible {
    outline-color: ${dt('message.error.color')};
}

.p-message-error .p-message-close-button:hover {
    background: ${dt('message.error.close.hover.background')};
}

.p-message-secondary {
    background: ${dt('message.secondary.background')};
    border: 1px solid ${dt('message.secondary.border.color')};
    color: ${dt('message.secondary.color')};
    box-shadow: ${dt('message.secondary.box.shadow')};
}

.p-message-secondary .p-message-close-button:focus-visible {
    outline-color: ${dt('message.secondary.color')};
}

.p-message-secondary .p-message-close-button:hover {
    background: ${dt('message.secondary.close.hover.background')};
}

.p-message-contrast {
    background: ${dt('message.contrast.background')};
    border: 1px solid ${dt('message.contrast.border.color')};
    color: ${dt('message.contrast.color')};
    box-shadow: ${dt('message.contrast.box.shadow')};
}

.p-message-contrast .p-message-close-button:focus-visible {
    outline-color: ${dt('message.contrast.color')};
}

.p-message-contrast .p-message-close-button:hover {
    background: ${dt('message.contrast.close.hover.background')};
}

.p-message-text {
    font-size: 1rem;
    font-weight: 500;
}

.p-message-icon {
    font-size: 1rem;
    margin-right: 0.5rem;
}

.p-message .p-icon:not(.p-message-close-button-icon) {
    width: 1rem;
    height: 1rem;
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
    transition: max-height 0.3s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin 0.15s;
}

.p-message-leave-active .p-message-close-button {
    display: none;
}
`;

const classes = {
    root: ({ props }) => 'p-message p-component p-message-' + props.severity,
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
