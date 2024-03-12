export default {
    css: ({ dt }) => `
.p-overlaypanel {
    margin-top: 10px;
    background: var(--p-overlaypanel-background);
    color: var(--p-overlaypanel-text-color);
    border: 1px solid var(--p-overlaypanel-border-color);
    border-radius: ${dt('rounded.base')};
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

.p-overlaypanel-content {
    padding: 0.75rem;
}

.p-overlaypanel-flipped {
    margin-top: 0;
    margin-bottom: 10px;
}

.p-overlaypanel-close {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 1.75rem;
    height: 1.75rem;
    background: transparent;
    color: var(--p-overlaypanel-close-icon-color);
    border: 0 none;
    border-radius: 50%;
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    outline-color: transparent;
    position: absolute;
    top: 0.25rem;
    right: 0.25rem;
}

.p-overlaypanel-close:enabled:hover {
    background: var(--p-overlaypanel-close-icon-background-hover);
    color: var(--p-overlaypanel-close-icon-color-hover);
}

.p-overlaypanel-close:focus-visible {
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
    outline-offset: ${dt('focus.ring.offset')};
}

.p-overlaypanel-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-overlaypanel-leave-to {
    opacity: 0;
}

.p-overlaypanel-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-overlaypanel-leave-active {
    transition: opacity 0.1s linear;
}

.p-overlaypanel:after,
.p-overlaypanel:before {
    bottom: 100%;
    left: calc(var(--overlayArrowLeft, 0) + 1.25rem);
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
}

.p-overlaypanel:after {
    border-width: 8px;
    margin-left: -8px;
    border-style: solid;
    border-color: transparent;
    border-bottom-color: var(--p-overlaypanel-background);
}

.p-overlaypanel:before {
    border-width: 10px;
    margin-left: -10px;
    border-style: solid;
    border-color: transparent;
    border-bottom-color: var(--p-overlaypanel-border-color);
}

.p-overlaypanel-flipped:after,
.p-overlaypanel-flipped:before {
    bottom: auto;
    top: 100%;
}

.p-overlaypanel.p-overlaypanel-flipped:after {
    border-bottom-color: transparent;
    border-top-color: var(--p-overlaypanel-background);
}

.p-overlaypanel.p-overlaypanel-flipped:before {
    border-bottom-color: transparent;
    border-top-color: var(--p-overlaypanel-border-color);
}
`
};
