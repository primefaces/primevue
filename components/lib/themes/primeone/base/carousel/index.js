export default {
    css: `
.p-carousel {
    display: flex;
    flex-direction: column;
}

.p-carousel-content {
    display: flex;
    flex-direction: column;
    overflow: auto;
}

.p-carousel-container {
    display: flex;
    flex-direction: row;
}

.p-carousel-items-content {
    overflow: hidden;
    width: 100%;
}

.p-carousel-items-container {
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
    color: var(--p-carousel-navigator-color);
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color var(--p-transition-duration), color var(--p-transition-duration),outline-color var(--p-transition-duration);
    outline-color: transparent;
    margin: 0.5rem;
}

.p-carousel-prev:enabled:hover,
.p-carousel-next:enabled:hover {
    color: var(--p-carousel-navigator-color-hover);
    background: var(--p-carousel-navigator-background-hover);
}

.p-carousel-prev:focus-visible,
.p-carousel-next:focus-visible {
    outline: var(--p-focus-ring-width) var(--p-focus-ring-style) var(--p-focus-ring-color);
    outline-offset: var(--p-focus-ring-offset);
}

.p-carousel-indicators {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    padding: 1rem;
    gap: 0.5rem;
}

.p-carousel-indicator button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--p-carousel-indicator-background);
    width: 2rem;
    height: 0.5rem;
    border: 0 none;
    transition: background-color var(--p-transition-duration), color var(--p-transition-duration), outline-color var(--p-transition-duration);
    outline-color: transparent;
    border-radius: var(--p-rounded-base);
}

.p-carousel-indicator button:focus-visible {
    outline: var(--p-focus-ring-width) var(--p-focus-ring-style) var(--p-focus-ring-color);
    outline-offset: var(--p-focus-ring-offset);
}

.p-carousel-indicator button:hover {
    background: var(--p-carousel-indicator-background-hover);
}

.p-carousel-indicator.p-highlight button {
    background: var(--p-carousel-indicator-background-active);
}

.p-carousel-vertical .p-carousel-container {
    flex-direction: column;
}

.p-carousel-vertical .p-carousel-items-container {
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
