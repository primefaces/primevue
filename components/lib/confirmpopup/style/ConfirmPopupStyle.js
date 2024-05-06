import BaseStyle from 'primevue/base/style';

const theme = ({ dt }) => `
.p-confirmpopup {
    position: absolute;
    margin-top: 10px;
    top: 0;
    left: 0;
    background: ${dt('confirmpopup.background')};
    color: ${dt('confirmpopup.color')};
    border: 1px solid ${dt('confirmpopup.border.color')};
    border-radius: ${dt('border.radius.md')};
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

.p-confirmpopup-content {
    display: flex;
    align-items: center;
    padding: 1rem;
}

.p-confirmpopup-icon {
    font-size: 1.5rem;
    width: 1.5rem;
    height: 1.5rem;
}

.p-confirmpopup-message {
    margin-left: 1rem;
}

.p-confirmpopup-footer {
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
    padding: 0 1rem 1rem 1rem;
}

.p-confirmpopup-footer button {
    width: auto;
}

.p-confirmpopup-footer button:last-child {
    margin: 0;
}

.p-confirmpopup-flipped {
    margin-top: 0;
    margin-bottom: 10px;
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
    left: ${dt('{overlay.arrow.left} + 1.25rem', 0)};
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
}

.p-confirmpopup:after {
    border-width: 8px;
    margin-left: -8px;
    border-style: solid;
    border-color: transparent;
    border-bottom-color: ${dt('confirmpopup.background')};
}

.p-confirmpopup:before {
    border-width: 10px;
    margin-left: -10px;
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
    root: ({ instance }) => [
        'p-confirmpopup p-component',
        {
            'p-ripple-disabled': instance.$primevue.config.ripple === false
        }
    ],
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
