import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-confirmpopup {
    position: absolute;
    margin-top: ${dt('confirmpopup.gutter')};
    top: 0;
    left: 0;
    background: ${dt('confirmpopup.background')};
    color: ${dt('confirmpopup.color')};
    border: 1px solid ${dt('confirmpopup.border.color')};
    border-radius: ${dt('confirmpopup.border.radius')};
    box-shadow: ${dt('confirmpopup.shadow')};
}

.p-confirmpopup-content {
    display: flex;
    align-items: center;
    padding: ${dt('confirmpopup.content.padding')};
    gap: ${dt('confirmpopup.content.gap')};
}

.p-confirmpopup-icon {
    font-size: ${dt('confirmpopup.icon.size')};
    width: ${dt('confirmpopup.icon.size')};
    height: ${dt('confirmpopup.icon.size')};
    color: ${dt('confirmpopup.icon.color')};
}

.p-confirmpopup-footer {
    display: flex;
    justify-content: flex-end;
    gap: ${dt('confirmpopup.footer.gap')};
    padding: ${dt('confirmpopup.footer.padding')};
}

.p-confirmpopup-footer button {
    width: auto;
}

.p-confirmpopup-footer button:last-child {
    margin: 0;
}

.p-confirmpopup-flipped {
    margin-top: calc(${dt('confirmpopup.gutter')} * -1);
    margin-bottom: ${dt('confirmpopup.gutter')};
}

.p-confirmpopup-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-confirmpopup-leave-to {
    opacity: 0;
}

.p-confirmpopup-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-confirmpopup-leave-active {
    transition: opacity 0.1s linear;
}

.p-confirmpopup:after,
.p-confirmpopup:before {
    bottom: 100%;
    left: ${dt('confirmpopup.arrow.offset')};
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
}

.p-confirmpopup:after {
    border-width: calc(${dt('confirmpopup.gutter')} - 2px);
    margin-left: calc(-1 * (${dt('confirmpopup.gutter')} - 2px));
    border-style: solid;
    border-color: transparent;
    border-bottom-color: ${dt('confirmpopup.background')};
}

.p-confirmpopup:before {
    border-width: ${dt('confirmpopup.gutter')};
    margin-left: calc(-1 * ${dt('confirmpopup.gutter')});
    border-style: solid;
    border-color: transparent;
    border-bottom-color: ${dt('confirmpopup.border.color')};
}

.p-confirmpopup-flipped:after,
.p-confirmpopup-flipped:before {
    bottom: auto;
    top: 100%;
}

.p-confirmpopup-flipped:after {
    border-bottom-color: transparent;
    border-top-color: ${dt('confirmpopup.background')};
}

.p-confirmpopup-flipped:before {
    border-bottom-color: transparent;
    border-top-color: ${dt('confirmpopup.border.color')};
}
`;

const classes = {
    root: 'p-confirmpopup p-component',
    content: 'p-confirmpopup-content',
    icon: 'p-confirmpopup-icon',
    message: 'p-confirmpopup-message',
    footer: 'p-confirmpopup-footer',
    pcRejectButton: 'p-confirmpopup-reject-button',
    pcAcceptButton: 'p-confirmpopup-accept-button'
};

export default BaseStyle.extend({
    name: 'confirmpopup',
    theme,
    classes
});
