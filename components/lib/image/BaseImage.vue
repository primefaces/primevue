<script>
import BaseComponent from 'primevue/basecomponent';
import { useStyle } from 'primevue/usestyle';

const styles = `
.p-image-mask {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-image-preview-container {
    position: relative;
    display: inline-block;
}

.p-image-preview-indicator {
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
}

.p-image-preview-container:hover > .p-image-preview-indicator {
    opacity: 1;
    cursor: pointer;
}

.p-image-preview-container > img {
    cursor: pointer;
}

.p-image-toolbar {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
}

.p-image-action.p-link {
    display: flex;
    justify-content: center;
    align-items: center;
}

.p-image-preview {
    transition: transform 0.15s;
    max-width: 100vw;
    max-height: 100vh;
}

.p-image-preview-enter-active {
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}
.p-image-preview-leave-active {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.p-image-preview-enter-from,
.p-image-preview-leave-to {
    opacity: 0;
    transform: scale(0.7);
}
`;

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

const { load: loadStyle } = useStyle(styles, { name: 'image', manual: true });

export default {
    name: 'BaseImage',
    extends: BaseComponent,
    props: {
        preview: {
            type: Boolean,
            default: false
        },
        class: {
            type: null,
            default: null
        },
        style: {
            type: null,
            default: null
        },
        imageStyle: {
            type: null,
            default: null
        },
        imageClass: {
            type: null,
            default: null
        },
        previewButtonProps: {
            type: null,
            default: null
        },
        indicatorIcon: {
            type: String,
            default: undefined
        },
        zoomInDisabled: {
            type: Boolean,
            default: false
        },
        zoomOutDisabled: {
            type: Boolean,
            default: false
        }
    },
    css: {
        classes,
        loadStyle
    },
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
