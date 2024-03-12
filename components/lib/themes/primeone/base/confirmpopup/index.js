export default {
    css: ({ dt }) => `
.p-confirm-popup {
    position: absolute;
    margin-top: 10px;
    top: 0;
    left: 0;
    background: ${dt('confirmpopup.background')};
    color: ${dt('confirmpopup.color')};
    border: 1px solid ${dt('confirmpopup.border.color')};
    border-radius: ${dt('rounded.base')};
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

.p-confirm-popup-content {
    display: flex;
    align-items: center;
    padding: 1rem;
}

.p-confirm-popup-icon {
    font-size: 1.5rem;
    width: 1.5rem;
    height: 1.5rem;
}

.p-confirm-popup-message {
    margin-left: 1rem;
}

.p-confirm-popup-footer {
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
    padding: 0 1rem 1rem 1rem;
}

.p-confirm-popup-footer button {
    width: auto;
}

.p-confirm-popup-footer button:last-child {
    margin: 0;
}

.p-confirm-popup-flipped {
    margin-top: 0;
    margin-bottom: 10px;
}

.p-confirm-popup-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-confirm-popup-leave-to {
    opacity: 0;
}

.p-confirm-popup-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-confirm-popup-leave-active {
    transition: opacity 0.1s linear;
}

.p-confirm-popup:after,
.p-confirm-popup:before {
    bottom: 100%;
    left: calc(var(--overlayArrowLeft, 0) + 1.25rem);
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
}

.p-confirm-popup:after {
    border-width: 8px;
    margin-left: -8px;
    border-style: solid;
    border-color: transparent;
    border-bottom-color: ${dt('confirmpopup.background')};
}

.p-confirm-popup:before {
    border-width: 10px;
    margin-left: -10px;
    border-style: solid;
    border-color: transparent;
    border-bottom-color: ${dt('confirmpopup.border.color')};
}

.p-confirm-popup-flipped:after,
.p-confirm-popup-flipped:before {
    bottom: auto;
    top: 100%;
}

.p-confirm-popup-flipped:after {
    border-bottom-color: transparent;
    border-top-color: ${dt('confirmpopup.background')};
}

.p-confirm-popup-flipped:before {
    border-bottom-color: transparent;
    border-top-color: ${dt('confirmpopup.border.color')};
}
`
};
