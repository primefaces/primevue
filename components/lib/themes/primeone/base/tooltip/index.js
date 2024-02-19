export default {
    css: `
.p-tooltip {
    position: absolute;
    display: none;
    max-width: 12.5rem;
}

.p-tooltip-right,
.p-tooltip-left {
    padding: 0 0.25rem;
}

.p-tooltip-top,
.p-tooltip-bottom {
    padding: 0.25rem 0;
}

.p-tooltip-text {
    white-space: pre-line;
    word-break: break-word;
    background: var(--p-tooltip-background);
    color: var(--p-tooltip-text-color);
    padding: 0.5rem 0.75rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
}

.p-tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    scale: 2;
}

.p-tooltip-right .p-tooltip-arrow {
    margin-top: -0.25rem;
    border-width: 0.25em 0.25em 0.25em 0;
    border-right-color: var(--p-tooltip-background);
}

.p-tooltip-left .p-tooltip-arrow {
    margin-top: -0.25rem;
    border-width: 0.25em 0 0.25em 0.25rem;
    border-left-color: var(--p-tooltip-background);
}

.p-tooltip-top .p-tooltip-arrow {
    margin-left: -0.25rem;
    border-width: 0.25em 0.25em 0;
    border-top-color: var(--p-tooltip-background);
    border-bottom-color: var(--p-tooltip-background);
}

.p-tooltip-bottom .p-tooltip-arrow {
    margin-left: -0.25rem;
    border-width: 0 0.25em 0.25rem;
}
`
};
