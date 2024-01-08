export default {
    variables: {
        common: {},
        light: {},
        dark: {}
    },
    css: `
.p-splitter {
    display: flex;
    flex-wrap: nowrap;
    border: var(--p-panel-content-border);
    background: var(--p-panel-content-bg);
    border-radius: var(--p-border-radius);
    color: var(--p-panel-content-text-color);
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
    cursor: col-resize;
    transition: var(--p-action-icon-transition);
    background: var(--p-splitter-gutter-bg);
}
.p-splitter-horizontal.p-splitter-resizing {
    cursor: col-resize;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
}
.p-splitter-horizontal > .p-splitter-gutter > .p-splitter-gutter-handle {
    height: 24px;
    width: 100%;
}
.p-splitter-horizontal > .p-splitter-gutter {
    cursor: col-resize;
}
.p-splitter-vertical.p-splitter-resizing {
    cursor: row-resize;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
}
.p-splitter-vertical > .p-splitter-gutter {
    cursor: row-resize;
}
.p-splitter-vertical > .p-splitter-gutter > .p-splitter-gutter-handle {
    width: 24px;
    height: 100%;
}
.p-splitter-gutter-handle {
    background: var(--p-splitter-gutter-handle-bg);
    transition: var(--p-form-element-transition);
}
.p-splitter-gutter-handle:focus-visible {
    outline: var(--p-focus-outline);
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: var(--p-focus-shadow);
}
.p-splitter-gutter-resizing {
    background: var(--p-splitter-gutter-handle-bg);
}
    `
};
