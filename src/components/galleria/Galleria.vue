<template>
    <div v-if="fullScreen && visible" ref="mask" :class="maskContentClass">
        <GalleriaContent v-bind="$props" @maskHide="maskHide" :templates="$scopedSlots" @activeItemChange="onActiveItemChange" />
    </div>

    <GalleriaContent v-else-if="!fullScreen" v-bind="$props" :templates="$scopedSlots" @activeItemChange="onActiveItemChange" />
</template>

<script>
import GalleriaContent from './GalleriaContent';
import DomHandler from '../utils/DomHandler';

export default {
    inheritAttrs: false,
    props: {
        id: {
            type: String,
            default: null
        },
		value: {
            type: Array,
            default: null
        },
        activeItemIndex: {
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
        showPreviewNavButtons: {
            type: Boolean,
            default: false
        },
        showThumbnailNavButtons: {
            type: Boolean,
            default: true
        },
        showNavButtonsOnPreviewHover: {
            type: Boolean,
            default: false
        },
        changePreviewOnIndicatorHover: {
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
			default: "bottom"
		},
        verticalThumbnailViewPortHeight: {
			type: String,
			default: "300px"
		},
        showIndicators: {
            type: Boolean,
            default: false
        },
        showIndicatorsOnPreview: {
            type: Boolean,
            default: false
        },
        indicatorsPosition: {
			type: String,
			default: "bottom"
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
            type: String,
            default: null
        },
        containerClass: {
            type: String,
            default: null
        }
    },
    updated() {
        this.removeStylesFromMask();

        if (this.fullScreen) {
            if (this.visible) {
                DomHandler.addClass(document.body, 'p-overflow-hidden');

                if (this.$refs.mask) {
                    this.$refs.mask.style.zIndex = String(this.baseZIndex + DomHandler.generateZIndex());
                }
            }
            else {
                DomHandler.removeClass(document.body, 'p-overflow-hidden');
            }
        }
    },
    mounted() {
        this.removeStylesFromMask();
    },
    beforeDestroy() {
        if (this.fullScreen) {
            DomHandler.removeClass(document.body, 'p-overflow-hidden');
        }
    },
    methods: {
        onActiveItemChange(index) {
            if (this.activeItemIndex !== index) {
                this.$emit('update:activeItemIndex', index);
            }
        },
        maskHide() {
            this.$emit('update:visible', false);
        },
        removeStylesFromMask() {
            if (this.$refs.mask) {
                this.galleriaStyles = this.$vnode.data.style || this.$vnode.data.staticStyle;
                if (this.galleriaStyles) {
                    Object.keys(this.galleriaStyles).forEach((key) => {
                        this.$refs.mask.style[key] = '';
                    });
                }

                this.galleriaClasses = this.$vnode.data.class || this.$vnode.data.staticClass;
                if (this.galleriaClasses) {
                    this.$refs.mask.classList = 'p-galleria-mask p-component-overlay' + (this.visible && ' p-galleria-visible');
                }
            }
        }
    },
    computed: {
        maskContentClass() {
            return ['p-galleria-mask p-component-overlay', {
                'p-galleria-visible': this.visible
            }, this.maskClass];
        }
    },
    components: {
        'GalleriaContent': GalleriaContent
    }
}
</script>

<style>
.p-galleria-content {
    display: flex;
    flex-direction: column;
}

/* Preview */
.p-galleria-preview-content {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 100%;
}
.p-galleria-preview-container {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
}
.p-galleria-preview-container .p-galleria-preview-nav-button {
    height: 3em;
    position: absolute;
    top: 50%;
    margin-top: -1.5em;
    z-index: 1;
}
.p-galleria-preview-prev {
    left: .5em;
}
.p-galleria-preview-next {
    right: .5em;
}
.p-galleria-preview-prev span,
.p-galleria-preview-next span {
    font-size: 2em;
}
.p-galleria-preview-items-content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}
.p-galleria-preview-nav-onhover .p-galleria-preview-content .p-galleria-preview-nav-button {
    pointer-events: none;
    opacity: 0;
    transition: opacity .2s ease-in-out;
}
.p-galleria-preview-nav-onhover .p-galleria-preview-content:hover .p-galleria-preview-nav-button {
    pointer-events: all;
    opacity: 1;
}
.p-galleria-preview-nav-onhover .p-galleria-preview-content:hover .p-galleria-preview-nav-button.p-disabled {
    pointer-events: none;
    opacity: .5;
}
.p-galleria-preview-caption {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 1em;
    width: 100%;
}
.p-galleria .p-galleria-indicator-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: .2em;
}

/* Thumbnails */
.p-galleria-thumbnail-content {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    overflow: auto;
    flex-shrink: 0;
}
.p-galleria-thumbnail-prev,
.p-galleria-thumbnail-next {
    align-self: center;
    text-align: center;
    flex-grow: 0;
    flex-shrink: 0;
    width: 2.5em;
    height: 2.5em;
}
.p-galleria-thumbnail-prev span,
.p-galleria-thumbnail-next span {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.p-galleria-thumbnail-container {
    display: flex;
    flex-direction: row;
    padding: 0 .1em;
}
.p-galleria-thumbnail-items-content {
    overflow: hidden;
    width: 100%;
}
.p-galleria-thumbnail-items-container {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
}
.p-galleria-thumbnail-items-container .p-galleria-thumbnail-item {
    width: 100%;
    box-sizing: border-box;
    overflow: auto;
    display: flex;
    align-items: center;
    justify-content: center;
}
.p-galleria-thumbnail-item .p-galleria-thumbnail-item-content {
    margin: .3em;
    cursor: pointer;
}

/* Indicators */
.p-galleria-indicator-onpreview .p-galleria-indicator-container {
    position: absolute;
    z-index: 1;
}
.p-galleria-indicator-onpreview.p-galleria-indicators-top .p-galleria-indicator-container {
    top: 1em;
    left: 0;
    width: 100%;
}
.p-galleria-indicator-onpreview.p-galleria-indicators-right .p-galleria-indicator-container {
    right: 1em;
    top: 0;
    height: 100%;
}
.p-galleria-indicator-onpreview.p-galleria-indicators-bottom .p-galleria-indicator-container {
    bottom: 1em;
    left: 0;
    width: 100%;
}
.p-galleria-indicator-onpreview.p-galleria-indicators-left .p-galleria-indicator-container {
    left: 1em;
    top: 0;
    height: 100%;
}
.p-galleria-indicator-onpreview.p-galleria-indicators-left .p-galleria-preview-caption,
.p-galleria-indicator-onpreview.p-galleria-indicators-right .p-galleria-preview-caption {
    width: calc(100% - 4em);
}
.p-galleria-indicator-onpreview.p-galleria-indicators-right .p-galleria-preview-caption,
.p-galleria-indicator-onpreview.p-galleria-indicators-right .p-galleria-preview-next {
    right: 4em;
}
.p-galleria-indicator-onpreview.p-galleria-indicators-left .p-galleria-preview-caption,
.p-galleria-indicator-onpreview.p-galleria-indicators-left .p-galleria-preview-prev {
    left: 4em;
}

/* Positions */
/* Thumbnails */
.p-galleria-thumbnails-left .p-galleria-content,
.p-galleria-thumbnails-right .p-galleria-content {
    flex-direction: row;
    align-items: center;
}
.p-galleria-thumbnails-left .p-galleria-content .p-galleria-preview-content,
.p-galleria-thumbnails-right .p-galleria-content .p-galleria-preview-content {
    flex-direction: row;
}
.p-galleria-thumbnails-left .p-galleria-content .p-galleria-preview-content,
.p-galleria-thumbnails-top .p-galleria-content .p-galleria-preview-content {
    order: 2;
}
.p-galleria-thumbnails-left .p-galleria-content .p-galleria-thumbnail-content,
.p-galleria-thumbnails-top .p-galleria-content .p-galleria-thumbnail-content {
    order: 1;
}
.p-galleria-thumbnails-left .p-galleria-content .p-galleria-thumbnail-container,
.p-galleria-thumbnails-right .p-galleria-content .p-galleria-thumbnail-container {
    flex-direction: column;
}
.p-galleria-thumbnails-left .p-galleria-content .p-galleria-thumbnail-items-container,
.p-galleria-thumbnails-right .p-galleria-content .p-galleria-thumbnail-items-container {
    flex-direction: column;
    height: 100%;
}
/* Indicators */
.p-galleria-indicators-left .p-galleria-preview-content,
.p-galleria-indicators-right .p-galleria-preview-content {
    flex-direction: row;
    align-items: center;
}
.p-galleria-indicators-left .p-galleria-preview-content .p-galleria-preview-container,
.p-galleria-indicators-top .p-galleria-preview-content .p-galleria-preview-container {
    order: 2;
}
.p-galleria-indicators-left .p-galleria-preview-content .p-galleria-indicator-container,
.p-galleria-indicators-top .p-galleria-preview-content .p-galleria-indicator-container {
    order: 1;
}
.p-galleria-indicators-left .p-galleria-preview-content .p-galleria-indicator-container,
.p-galleria-indicators-right .p-galleria-preview-content .p-galleria-indicator-container {
    flex-direction: column;
}

/* FullScreen */
.p-galleria-mask {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
}
.p-galleria-mask .p-galleria {
    max-height: 90%;
    max-width: calc(90% - 8em);
}
.p-galleria-close {
    position: absolute;
    top: 0;
    right: 0;
    margin: .5em;
}
.p-galleria-close span {
    font-size: 3em;
}
.p-galleria-mask .p-galleria .p-galleria-preview-nav-button {
    position: fixed;
    top: 50%;
    height: 20em;
    width: 4em;
    margin-top: -10em;
}
.p-galleria-mask .p-galleria .p-galleria-preview-prev {
    left: 0;
}
.p-galleria-mask .p-galleria .p-galleria-preview-next {
    right: 0;
}

/* Keyboard Support */
.p-items-hidden .p-galleria-thumbnail-item {
    visibility: hidden;
}

.p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active {
    visibility: visible;
}
</style>
