export default {
    css: ({ dt }) => `
.p-speeddial {
    position: absolute;
    display: flex;
    gap: 0.25rem;
}

.p-speeddial-button {
    z-index: 1;
    width: 2.5rem;
    height: 2.5rem;
}

.p-speeddial-button.p-speeddial-rotate {
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, box-shadow ${dt(
        'transition.duration'
    )}, outline-color ${dt('transition.duration')};
    will-change: transform;
}

.p-speeddial-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: top 0s linear ${dt('transition.duration')};
    pointer-events: none;
    outline: 0 none;
    z-index: 2;
    gap: 0.25rem;
}

.p-speeddial-item {
    transform: scale(0);
    opacity: 0;
    transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, opacity 0.8s;
    will-change: transform;
}

.p-speeddial-item.p-focus > .p-speeddial-action {
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
    outline-offset: ${dt('focus.ring.offset')};
}

.p-speeddial-action {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    width: 2.5rem;
    height: 2.5rem;
    background: ${dt('speeddial.item.background')};
    color: ${dt('speeddial.item.color')};
    outline-color: transparent;
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, box-shadow ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
}

.p-speeddial-action:hover {
    background: ${dt('speeddial.item.hover.background')};
    color: ${dt('speeddial.item.hover.color')};
}

.p-speeddial-circle .p-speeddial-item,
.p-speeddial-semi-circle .p-speeddial-item,
.p-speeddial-quarter-circle .p-speeddial-item {
    position: absolute;
}

.p-speeddial-mask {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background-color: ${dt('mask.background')};
    border-radius: 6px;
    transition: opacity 150ms;
}

.p-speeddial-mask-visible {
    pointer-events: none;
    opacity: 1;
    transition: opacity 150ms;
}

.p-speeddial-opened .p-speeddial-list {
    pointer-events: auto;
}

.p-speeddial-opened .p-speeddial-item {
    transform: scale(1);
    opacity: 1;
}

.p-speeddial-opened .p-speeddial-rotate {
    transform: rotate(45deg);
}
`
};
