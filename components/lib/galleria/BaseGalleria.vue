<script>
import BaseComponent from 'primevue/basecomponent';
import GalleriaStyle from 'primevue/galleria/style';

export default {
    name: 'BaseGalleria',
    extends: BaseComponent,
    props: {
        id: {
            type: String,
            default: null
        },
        value: {
            type: Array,
            default: null
        },
        activeIndex: {
            type: Number,
            default: 0
        },
        fullScreen: {
            type: Boolean,
            default: false
        },
        visible: {
            type: Boolean,
            default: false
        },
        numVisible: {
            type: Number,
            default: 3
        },
        responsiveOptions: {
            type: Array,
            default: null
        },
        showItemNavigators: {
            type: Boolean,
            default: false
        },
        showThumbnailNavigators: {
            type: Boolean,
            default: true
        },
        showItemNavigatorsOnHover: {
            type: Boolean,
            default: false
        },
        changeItemOnIndicatorHover: {
            type: Boolean,
            default: false
        },
        circular: {
            type: Boolean,
            default: false
        },
        autoPlay: {
            type: Boolean,
            default: false
        },
        transitionInterval: {
            type: Number,
            default: 4000
        },
        showThumbnails: {
            type: Boolean,
            default: true
        },
        thumbnailsPosition: {
            type: String,
            default: 'bottom'
        },
        verticalThumbnailViewPortHeight: {
            type: String,
            default: '300px'
        },
        showIndicators: {
            type: Boolean,
            default: false
        },
        showIndicatorsOnItem: {
            type: Boolean,
            default: false
        },
        indicatorsPosition: {
            type: String,
            default: 'bottom'
        },
        baseZIndex: {
            type: Number,
            default: 0
        },
        maskClass: {
            type: String,
            default: null
        },
        containerStyle: {
            type: null,
            default: null
        },
        containerClass: {
            type: null,
            default: null
        },
        containerProps: {
            type: null,
            default: null
        },
        prevButtonProps: {
            type: null,
            default: null
        },
        nextButtonProps: {
            type: null,
            default: null
        },
        ariaLabel: {
            type: String,
            default: null
        },
        ariaRoledescription: {
            type: String,
            default: null
        }
    },
    style: GalleriaStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
