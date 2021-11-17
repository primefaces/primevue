<template>
    <Teleport to="body" v-if="fullScreen">
        <div v-if="containerVisible" :ref="maskRef" :class="maskContentClass">
            <transition name="p-galleria" @before-enter="onBeforeEnter" @enter="onEnter" @before-leave="onBeforeLeave" @after-leave="onAfterLeave" appear>
                <GalleriaContent :ref="containerRef" v-if="visible" v-bind="$props" @mask-hide="maskHide" :templates="$slots" @activeitem-change="onActiveItemChange" />
            </transition>
        </div>
    </Teleport>
    <GalleriaContent v-else v-bind="$props" :templates="$slots" @activeitem-change="onActiveItemChange" />
</template>

<script>
import GalleriaContent from './GalleriaContent.vue';
import {DomHandler,ZIndexUtils} from 'primevue/utils';

export default {
    name: 'Galleria',
    inheritAttrs: false,
    emits: ['update:activeIndex', 'update:visible'],
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
        showIndicatorsOnItem: {
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
    container: null,
    mask: null,
    data() {
        return {
            containerVisible: this.visible
        }
    },
    updated() {
        if (this.fullScreen && this.visible) {
            this.containerVisible = this.visible;
        }
    },
    beforeUnmount() {
        if (this.fullScreen) {
            DomHandler.removeClass(document.body, 'p-overflow-hidden');
        }

        this.mask = null;
        if (this.container) {
            ZIndexUtils.clear(this.container);
            this.container = null;
        }
    },
    methods: {
        onBeforeEnter(el) {
            ZIndexUtils.set('modal', el, this.baseZIndex || this.$primevue.config.zIndex.modal);
        },
        onEnter(el) {
            this.mask.style.zIndex = String(parseInt(el.style.zIndex, 10) - 1);
            DomHandler.addClass(document.body, 'p-overflow-hidden');
        },
        onBeforeLeave() {
            DomHandler.addClass(this.mask, 'p-component-overlay-leave');
        },
        onAfterLeave(el) {
            ZIndexUtils.clear(el);
            this.containerVisible = false;
            DomHandler.removeClass(document.body, 'p-overflow-hidden');
        },
        onActiveItemChange(index) {
            if (this.activeIndex !== index) {
                this.$emit('update:activeIndex', index);
            }
        },
        maskHide() {
            this.$emit('update:visible', false);
        },
        containerRef(el) {
            this.container = el;
        },
        maskRef(el) {
            this.mask = el;
        }
    },
    computed: {
        maskContentClass() {
            return ['p-galleria-mask p-component-overlay p-component-overlay-enter', this.maskClass, {
                'p-input-filled': this.$primevue.config.inputStyle === 'filled',
                'p-ripple-disabled': this.$primevue.config.ripple === false
            }];
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

.p-galleria-item-wrapper {
    display: flex;
    flex-direction: column;
    position: relative;
}

.p-galleria-item-container {
    position: relative;
    display: flex;
    height: 100%;
}

.p-galleria-item-nav {
    position: absolute;
    top: 50%;
    margin-top: -.5rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.p-galleria-item-prev {
    left: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.p-galleria-item-next {
    right: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.p-galleria-item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}

.p-galleria-item-nav-onhover .p-galleria-item-nav {
    pointer-events: none;
    opacity: 0;
    transition: opacity .2s ease-in-out;
}

.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav {
    pointer-events: all;
    opacity: 1;
}

.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav.p-disabled {
    pointer-events: none;
}

.p-galleria-caption {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
}

/* Thumbnails */
.p-galleria-thumbnail-wrapper {
    display: flex;
    flex-direction: column;
    overflow: auto;
    flex-shrink: 0;
}

.p-galleria-thumbnail-prev,
.p-galleria-thumbnail-next {
    align-self: center;
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
}

.p-galleria-thumbnail-prev span,
.p-galleria-thumbnail-next span {
    display: flex;
    justify-content: center;
    align-items: center;
}

.p-galleria-thumbnail-container {
    display: flex;
    flex-direction: row;
}

.p-galleria-thumbnail-items-container {
    overflow: hidden;
    width: 100%;
}

.p-galleria-thumbnail-items {
    display: flex;
}

.p-galleria-thumbnail-item {
    overflow: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: .5;
}

.p-galleria-thumbnail-item:hover {
    opacity: 1;
    transition: opacity .3s;
}

.p-galleria-thumbnail-item-current {
    opacity: 1;
}

/* Positions */
/* Thumbnails */
.p-galleria-thumbnails-left .p-galleria-content,
.p-galleria-thumbnails-right .p-galleria-content {
    flex-direction: row;
}

.p-galleria-thumbnails-left .p-galleria-item-wrapper,
.p-galleria-thumbnails-right .p-galleria-item-wrapper {
    flex-direction: row;
}

.p-galleria-thumbnails-left .p-galleria-item-wrapper,
.p-galleria-thumbnails-top .p-galleria-item-wrapper {
    order: 2;
}

.p-galleria-thumbnails-left .p-galleria-thumbnail-wrapper,
.p-galleria-thumbnails-top .p-galleria-thumbnail-wrapper {
    order: 1;
}

.p-galleria-thumbnails-left .p-galleria-thumbnail-container,
.p-galleria-thumbnails-right .p-galleria-thumbnail-container {
    flex-direction: column;
    flex-grow: 1;
}

.p-galleria-thumbnails-left .p-galleria-thumbnail-items,
.p-galleria-thumbnails-right .p-galleria-thumbnail-items {
    flex-direction: column;
    height: 100%;
}

/* Indicators */
.p-galleria-indicators {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-galleria-indicator > button {
    display: inline-flex;
    align-items: center;
}

.p-galleria-indicators-left .p-galleria-item-wrapper,
.p-galleria-indicators-right .p-galleria-item-wrapper {
    flex-direction: row;
    align-items: center;
}

.p-galleria-indicators-left .p-galleria-item-container,
.p-galleria-indicators-top .p-galleria-item-container {
    order: 2;
}

.p-galleria-indicators-left .p-galleria-indicators,
.p-galleria-indicators-top .p-galleria-indicators {
    order: 1;
}

.p-galleria-indicators-left .p-galleria-indicators,
.p-galleria-indicators-right .p-galleria-indicators {
    flex-direction: column;
}

.p-galleria-indicator-onitem .p-galleria-indicators {
    position: absolute;
    display: flex;
}

.p-galleria-indicator-onitem.p-galleria-indicators-top .p-galleria-indicators {
    top: 0;
    left: 0;
    width: 100%;
    align-items: flex-start;
}

.p-galleria-indicator-onitem.p-galleria-indicators-right .p-galleria-indicators {
    right: 0;
    top: 0;
    height: 100%;
    align-items: flex-end;
}

.p-galleria-indicator-onitem.p-galleria-indicators-bottom .p-galleria-indicators {
    bottom: 0;
    left: 0;
    width: 100%;
    align-items: flex-end;
}

.p-galleria-indicator-onitem.p-galleria-indicators-left .p-galleria-indicators {
    left: 0;
    top: 0;
    height: 100%;
    align-items: flex-start;
}

/* FullScreen */
.p-galleria-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-galleria-close {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.p-galleria-mask .p-galleria-item-nav {
    position: fixed;
    top: 50%;
    margin-top: -.5rem;
}

/* Animation */
.p-galleria-enter-active {
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}

.p-galleria-leave-active {
    transition: all 150ms cubic-bezier(0.4, 0.0, 0.2, 1);
}

.p-galleria-enter-from,
.p-galleria-leave-to {
    opacity: 0;
    transform: scale(0.7);
}

.p-galleria-enter-active .p-galleria-item-nav {
    opacity: 0;
}

/* Keyboard Support */
.p-items-hidden .p-galleria-thumbnail-item {
    visibility: hidden;
}

.p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active {
    visibility: visible;
}
</style>
