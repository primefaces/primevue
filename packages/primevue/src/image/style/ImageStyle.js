import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-image-mask {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-image-preview {
    position: relative;
    display: inline-flex;
    line-height: 0;
}

.p-image-preview-mask {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s;
    border: 0 none;
    padding: 0;
    cursor: pointer;
    background: transparent;
    color: ${dt('image.preview.mask.color')};
    transition: background ${dt('image.transition.duration')};
}

.p-image-preview:hover > .p-image-preview-mask {
    opacity: 1;
    cursor: pointer;
    background: ${dt('image.preview.mask.background')};
}

.p-image-preview-icon {
    font-size: ${dt('image.preview.icon.size')};
    width: ${dt('image.preview.icon.size')};
    height: ${dt('image.preview.icon.size')};
}

.p-image-toolbar {
    position: absolute;
    top: ${dt('image.toolbar.position.top')};
    right: ${dt('image.toolbar.position.right')};
    left: ${dt('image.toolbar.position.left')};
    bottom: ${dt('image.toolbar.position.bottom')};
    display: flex;
    z-index: 1;
    padding: ${dt('image.toolbar.padding')};
    background: ${dt('image.toolbar.background')};
    backdrop-filter: blur(${dt('image.toolbar.blur')});
    border-color: ${dt('image.toolbar.border.color')};
    border-style: solid;
    border-width: ${dt('image.toolbar.border.width')};
    border-radius: ${dt('image.toolbar.border.radius')};
    gap: ${dt('image.toolbar.gap')};
}

.p-image-action {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: ${dt('image.action.color')};
    background: transparent;
    width: ${dt('image.action.size')};
    height: ${dt('image.action.size')};
    margin: 0;
    padding: 0;
    border: 0 none;
    cursor: pointer;
    user-select: none;
    border-radius: ${dt('image.action.border.radius')};
    outline-color: transparent;
    transition: background ${dt('image.transition.duration')}, color ${dt('image.transition.duration')}, outline-color ${dt('image.transition.duration')}, box-shadow ${dt('image.transition.duration')};
}

.p-image-action:hover {
    color: ${dt('image.action.hover.color')};
    background: ${dt('image.action.hover.background')};
}

.p-image-action:focus-visible {
    box-shadow: ${dt('toolbar.action.focus.ring.shadow')};
    outline: ${dt('toolbar.action.focus.ring.width')} ${dt('toolbar.action.focus.ring.style')} ${dt('toolbar.action.focus.ring.color')};
    outline-offset: ${dt('toolbar.action.focus.ring.offset')};
}

.p-image-action .p-icon {
    font-size: ${dt('image.action.icon.size')};
    width: ${dt('image.action.icon.size')};
    height: ${dt('image.action.icon.size')};
}

.p-image-action.p-disabled {
    pointer-events: auto;
}

.p-image-original {
    transition: transform 0.15s;
    max-width: 100vw;
    max-height: 100vh;
}

.p-image-original-enter-active {
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}

.p-image-original-leave-active {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.p-image-original-enter-from,
.p-image-original-leave-to {
    opacity: 0;
    transform: scale(0.7);
}
`;

const classes = {
    root: ({ props }) => [
        'p-image p-component',
        {
            'p-image-preview': props.preview
        }
    ],
    previewMask: 'p-image-preview-mask',
    previewIcon: 'p-image-preview-icon',
    mask: 'p-image-mask p-overlay-mask p-overlay-mask-enter',
    toolbar: 'p-image-toolbar',
    rotateRightButton: 'p-image-action p-image-rotate-right-button',
    rotateLeftButton: 'p-image-action p-image-rotate-left-button',
    zoomOutButton: ({ instance }) => [
        'p-image-action p-image-zoom-out-button',
        {
            'p-disabled': instance.isZoomOutDisabled
        }
    ],
    zoomInButton: ({ instance }) => [
        'p-image-action p-image-zoom-in-button',
        {
            'p-disabled': instance.isZoomInDisabled
        }
    ],
    closeButton: 'p-image-action p-image-close-button',
    original: 'p-image-original'
};

export default BaseStyle.extend({
    name: 'image',
    theme,
    classes
});
