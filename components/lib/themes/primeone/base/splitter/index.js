export default {
    css: ({ dt }) => `
.p-splitter {
    display: flex;
    flex-wrap: nowrap;
    border: 1px solid ${dt('splitter.border.color')};
    background: ${dt('splitter.background')};
    border-radius: ${dt('rounded.base')};
    color: ${dt('splitter.color')};
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
    background: ${dt('splitter.gutter.background')};
}

.p-splitter-gutter-handle {
    border-radius: ${dt('rounded.base')};
    background: transparent;
    transition: outline-color ${dt('transition.duration')};
    outline-color: transparent;
}

.p-splitter-gutter-handle:focus-visible {
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
    outline-offset: ${dt('focus.ring.offset')};
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
