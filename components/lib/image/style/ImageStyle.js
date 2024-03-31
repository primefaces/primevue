import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ props }) => [
        'p-image p-component',
        {
            'p-image-preview-container': props.preview
        }
    ],
    image: ({ props }) => props.image,
    button: 'p-image-preview-indicator',
    icon: 'p-image-preview-icon',
    mask: 'p-image-mask p-component-overlay p-component-overlay-enter',
    toolbar: 'p-image-toolbar',
    rotateRightButton: 'p-image-action p-link',
    rotateLeftButton: 'p-image-action p-link',
    zoomOutButton: ({ instance }) => [
        'p-image-action p-link',
        {
            'p-disabled': instance.isZoomOutDisabled
        }
    ],
    zoomInButton: ({ instance }) => [
        'p-image-action p-link',
        {
            'p-disabled': instance.isZoomInDisabled
        }
    ],
    closeButton: 'p-image-action p-link',
    preview: 'p-image-preview'
};

export default BaseStyle.extend({
    name: 'image',
    classes
});
