import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ props }) => [
        'p-image p-component',
        {
            'p-image-preview': props.preview
        }
    ],
    image: ({ props }) => props.image,
    button: 'p-image-preview-mask',
    icon: 'p-image-preview-icon',
    mask: 'p-image-mask p-component-overlay p-component-overlay-enter',
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
    preview: 'p-image-original'
};

export default BaseStyle.extend({
    name: 'image',
    classes
});
