import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-splitter {
    display: flex;
    flex-wrap: nowrap;
    border: 1px solid ${dt('splitter.border.color')};
    background: ${dt('splitter.background')};
    border-radius: ${dt('border.radius.md')};
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
    border-radius: ${dt('splitter.handle.border.radius')};
    background: ${dt('splitter.handle.background')};
    transition: outline-color ${dt('splitter.transition.duration')}, box-shadow ${dt('splitter.transition.duration')};
    outline-color: transparent;
}

.p-splitter-gutter-handle:focus-visible {
    box-shadow: ${dt('splitter.handle.focus.ring.shadow')};
    outline: ${dt('splitter.handle.focus.ring.width')} ${dt('splitter.handle.focus.ring.style')} ${dt('splitter.handle.focus.ring.color')};
    outline-offset: ${dt('splitter.handle.focus.ring.offset')};
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
    height: ${dt('splitter.handle.size')};
    width: 100%;
}

.p-splitter-vertical > .p-splitter-gutter > .p-splitter-gutter-handle {
    width: ${dt('splitter.handle.size')};
    height: 100%;
}

.p-splitter-horizontal > .p-splitter-gutter {
    cursor: col-resize;
}

.p-splitter-vertical > .p-splitter-gutter {
    cursor: row-resize;
}

.p-splitterpanel {
    flex-grow: 1;
    overflow: hidden;
}

.p-splitterpanel-nested {
    display: flex;
}

.p-splitterpanel .p-splitter {
    flex-grow: 1;
    border: 0 none;
}
`;

const classes = {
    root: ({ props }) => ['p-splitter p-component', 'p-splitter-' + props.layout],
    gutter: 'p-splitter-gutter',
    gutterHandle: 'p-splitter-gutter-handle'
};

const inlineStyles = {
    root: ({ props }) => [{ display: 'flex', 'flex-wrap': 'nowrap' }, props.layout === 'vertical' ? { 'flex-direction': 'column' } : '']
};

export default BaseStyle.extend({
    name: 'splitter',
    theme,
    classes,
    inlineStyles
});
