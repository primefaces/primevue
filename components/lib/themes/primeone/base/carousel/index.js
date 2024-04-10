export default {
    css: ({ dt }) => `
.p-carousel {
    display: flex;
    flex-direction: column;
}

.p-carousel-content-container {
    display: flex;
    flex-direction: column;
    overflow: auto;
}

.p-carousel-content {
    display: flex;
    flex-direction: row;
}

.p-carousel-viewport {
    overflow: hidden;
    width: 100%;
}

.p-carousel-items {
    display: flex;
    flex-direction: row;
}

.p-carousel-prev,
.p-carousel-next {
    align-self: center;
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    width: 1.75rem;
    height: 1.75rem;
    color: ${dt('carousel.navigator.color')};
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')},outline-color ${dt('transition.duration')};
    outline-color: transparent;
    margin: 0.5rem;
}

.p-carousel-prev:enabled:hover,
.p-carousel-next:enabled:hover {
    color: ${dt('carousel.navigator.hover.color')};
    background: ${dt('carousel.navigator.hover.background')};
}

.p-carousel-prev:focus-visible,
.p-carousel-next:focus-visible {
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
    outline-offset: ${dt('focus.ring.offset')};
}

.p-carousel-indicators {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    padding: 1rem;
    gap: 0.5rem;
    margin: 0;
    list-style: none;
}

.p-carousel-indicator-button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${dt('carousel.indicator.background')};
    width: 2rem;
    height: 0.5rem;
    border: 0 none;
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    outline-color: transparent;
    border-radius: ${dt('rounded.base')};
    padding: 0;
    margin: 0;
    border: none;
    user-select: none;
}

.p-carousel-indicator-button:focus-visible {
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
    outline-offset: ${dt('focus.ring.offset')};
}

.p-carousel-indicator-button:hover {
    background: ${dt('carousel.indicator.hover.background')};
}

.p-carousel-indicator-active .p-carousel-indicator-button {
    background: ${dt('carousel.indicator.active.background')};
}

.p-carousel-vertical .p-carousel-content {
    flex-direction: column;
}

.p-carousel-vertical .p-carousel-items {
    flex-direction: column;
    height: 100%;
}

.p-items-hidden .p-carousel-item {
    visibility: hidden;
}

.p-items-hidden .p-carousel-item.p-carousel-item-active {
    visibility: visible;
}
`
};
