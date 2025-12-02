import { style } from '@primeuix/styles/image';
import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: ({ props }) => [
        'p-image p-component',
        {
            'p-image-preview': props.preview
        }
    ],
    previewMask: 'p-image-preview-mask',
    previewIcon: 'p-image-preview-icon',
    mask: 'p-image-mask p-overlay-mask p-overlay-mask-enter-active',
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
    style,
    classes
});
