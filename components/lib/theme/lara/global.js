export default {
    css: `
@font-face {
    font-family: "Inter var";
    font-weight: 100 900;
    font-display: swap;
    font-style: normal;
    font-named-instance: "Regular";
    src: url("./fonts/Inter-roman.var.woff2?v=3.19") format("woff2");
}
@font-face {
    font-family: "Inter var";
    font-weight: 100 900;
    font-display: swap;
    font-style: italic;
    font-named-instance: "Italic";
    src: url("./fonts/Inter-italic.var.woff2?v=3.19") format("woff2");
}

* {
    box-sizing: border-box;
}

.p-component {
    font-family: var(--p-font-family);
    font-feature-settings: var(--p-font-feature-settings, normal);
    font-size: var(--p-font-size);
    font-weight: var(--p-font-weight);
}

.p-component-overlay {
    background-color: var(--p-mask-bg);
    transition-duration: var(--p-transition-duration);
}

.p-disabled,
.p-component:disabled {
    opacity: var(--p-disabled-opacity);
}

.p-error {
    color: var(--p-error-color);
}

.p-text-secondary {
    color: var(--p-text-secondary-color);
}

.pi {
    font-size: var(--p-prime-icon-font-size);
}

.p-icon {
    width: var(--p-prime-icon-font-size);
    height: var(--p-prime-icon-font-size);
}

.p-link {
    font-family: var(--p-font-family);
    font-feature-settings: var(--p-font-feature-settings, normal);
    font-size: var(--p-font-size);
    border-radius: var(--p-border-radius);
}
.p-link:focus-visible {
    outline: var(--p-focus-outline);
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: var(--p-focus-shadow);
}

.p-component-overlay-enter {
    animation: p-component-overlay-enter-animation 150ms forwards;
}

.p-component-overlay-leave {
    animation: p-component-overlay-leave-animation 150ms forwards;
}

@keyframes p-component-overlay-enter-animation {
    from {
        background-color: transparent;
    }
    to {
        background-color: var(--maskbg);
    }
}
@keyframes p-component-overlay-leave-animation {
    from {
        background-color: var(--maskbg);
    }
    to {
        background-color: transparent;
    }
}
`
};
