export default {
    css: `
.p-splitter {
    display: flex;
    flex-wrap: nowrap;
    border: 1px solid var(--p-splitter-border-color);
    background: var(--p-splitter-background);
    border-radius: var(--p-rounded-base);
    color: var(--p-splitter-text-color);
}

.p-splitter-vertical {
    flex-direction: column;
}

.p-splitter-gutter {
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    background: var(--p-splitter-gutter-background);
}

.p-splitter-gutter-handle {
    border-radius: var(--p-rounded-base);
    background: transparent;
    transition: outline-color var(--p-transition-duration);
    outline-color: transparent;
}

.p-splitter-gutter-handle:focus-visible {
    outline: var(--p-focus-ring-width) var(--p-focus-ring-style) var(--p-focus-ring-color);
    outline-offset: var(--p-focus-ring-offset);
}

.p-splitter-horizontal.p-splitter-resizing {
    cursor: col-resize;
    user-select: none;
}

.p-splitter-vertical.p-splitter-resizing {
    cursor: row-resize;
    user-select: none;
}

.p-splitter-horizontal > .p-splitter-gutter > .p-splitter-gutter-handle {
    height: 24px;
    width: 100%;
}

.p-splitter-vertical > .p-splitter-gutter > .p-splitter-gutter-handle {
    width: 24px;
    height: 100%;
}

.p-splitter-horizontal > .p-splitter-gutter {
    cursor: col-resize;
}

.p-splitter-vertical > .p-splitter-gutter {
    cursor: row-resize;
}

.p-splitter-panel {
    flex-grow: 1;
    overflow: hidden;
}

.p-splitter-panel-nested {
    display: flex;
}

.p-splitter-panel .p-splitter {
    flex-grow: 1;
    border: 0 none;
}
`
};
