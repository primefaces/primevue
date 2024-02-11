<template>
    <span :class="containerClass" :style="style" v-bind="ptmi('root')">
        <slot name="image" :onError="onError" :errorCallback="onError">
            <img :style="imageStyle" :class="[cx('image'), imageClass]" @error="onError" v-bind="{ ...$attrs, ...ptm('image') }" />
        </slot>
        <button v-if="preview" ref="previewButton" :aria-label="zoomImageAriaLabel" type="button" :class="cx('button')" @click="onImageClick" v-bind="{ ...previewButtonProps, ...ptm('button') }">
            <slot name="indicatoricon">
                <component :is="indicatorIcon ? 'i' : 'EyeIcon'" :class="cx('icon')" v-bind="ptm('icon')" />
            </slot>
        </button>
        <Portal>
            <div v-if="maskVisible" :ref="maskRef" v-focustrap role="dialog" :class="cx('mask')" :aria-modal="maskVisible" @click="onMaskClick" @keydown="onMaskKeydown" v-bind="ptm('mask')">
                <div :class="cx('toolbar')" v-bind="ptm('toolbar')">
                    <button :class="cx('rotateRightButton')" @click="rotateRight" type="button" :aria-label="rightAriaLabel" v-bind="ptm('rotateRightButton')" data-pc-group-section="action">
                        <slot name="refresh">
                            <RefreshIcon v-bind="ptm('rotateRightIcon')" />
                        </slot>
                    </button>

                    <button :class="cx('rotateLeftButton')" @click="rotateLeft" type="button" :aria-label="leftAriaLabel" v-bind="ptm('rotateLeftButton')" data-pc-group-section="action">
                        <slot name="undo">
                            <UndoIcon v-bind="ptm('rotateLeftIcon')" />
                        </slot>
                    </button>

                    <button :class="cx('zoomOutButton')" @click="zoomOut" type="button" :disabled="isZoomOutDisabled" :aria-label="zoomOutAriaLabel" v-bind="ptm('zoomOutButton')" data-pc-group-section="action">
                        <slot name="zoomout">
                            <SearchMinusIcon v-bind="ptm('zoomOutIcon')" />
                        </slot>
                    </button>

                    <button :class="cx('zoomInButton')" @click="zoomIn" type="button" :disabled="isZoomInDisabled" :aria-label="zoomInAriaLabel" v-bind="ptm('zoomInButton')" data-pc-group-section="action">
                        <slot name="zoomin">
                            <SearchPlusIcon v-bind="ptm('zoomInIcon')" />
                        </slot>
                    </button>

                    <button :class="cx('closeButton')" type="button" @click="hidePreview" :aria-label="closeAriaLabel" autofocus v-bind="ptm('closeButton')" data-pc-group-section="action">
                        <slot name="close">
                            <TimesIcon v-bind="ptm('closeIcon')" />
                        </slot>
                    </button>
                </div>
                <transition name="p-image-preview" @before-enter="onBeforeEnter" @enter="onEnter" @leave="onLeave" @before-leave="onBeforeLeave" @after-leave="onAfterLeave" v-bind="ptm('transition')">
                    <div v-if="previewVisible" v-bind="ptm('previewContainer')">
                        <slot name="preview" :class="cx('preview')" :style="imagePreviewStyle" :onClick="onPreviewImageClick" :previewCallback="onPreviewImageClick">
                            <img :src="$attrs.src" :class="cx('preview')" :style="imagePreviewStyle" @click="onPreviewImageClick" v-bind="ptm('preview')" />
                        </slot>
                    </div>
                </transition>
            </div>
        </Portal>
    </span>
</template>

<script>
import FocusTrap from 'primevue/focustrap';
import EyeIcon from 'primevue/icons/eye';
import RefreshIcon from 'primevue/icons/refresh';
import SearchMinusIcon from 'primevue/icons/searchminus';
import SearchPlusIcon from 'primevue/icons/searchplus';
import TimesIcon from 'primevue/icons/times';
import UndoIcon from 'primevue/icons/undo';
import Portal from 'primevue/portal';
import { DomHandler, ZIndexUtils } from 'primevue/utils';
import BaseImage from './BaseImage.vue';

export default {
    name: 'Image',
    extends: BaseImage,
    inheritAttrs: false,
    emits: ['show', 'hide', 'error'],
    mask: null,
    data() {
        return {
            maskVisible: false,
            previewVisible: false,
            rotate: 0,
            scale: 1
        };
    },
    beforeUnmount() {
        if (this.mask) {
            ZIndexUtils.clear(this.container);
        }
    },
    methods: {
        maskRef(el) {
            this.mask = el;
        },
        toolbarRef(el) {
            this.toolbarRef = el;
        },
        onImageClick() {
            if (this.preview) {
                DomHandler.blockBodyScroll();
                this.maskVisible = true;
                setTimeout(() => {
                    this.previewVisible = true;
                }, 25);
            }
        },
        onPreviewImageClick() {
            this.previewClick = true;
        },
        onMaskClick(event) {
            const isBarActionsClicked = DomHandler.isAttributeEquals(event.target, 'data-pc-section-group', 'action') || event.target.closest('[data-pc-section-group="action"]');

            if (!this.previewClick && !isBarActionsClicked) {
                this.previewVisible = false;
                this.rotate = 0;
                this.scale = 1;
            }

            this.previewClick = false;
        },
        onMaskKeydown(event) {
            switch (event.code) {
                case 'Escape':
                    this.hidePreview();
                    setTimeout(() => {
                        DomHandler.focus(this.$refs.previewButton);
                    }, 200);
                    event.preventDefault();

                    break;

                default:
                    break;
            }
        },
        onError() {
            this.$emit('error');
        },
        rotateRight() {
            this.rotate += 90;
            this.previewClick = true;
        },
        rotateLeft() {
            this.rotate -= 90;
            this.previewClick = true;
        },
        zoomIn() {
            this.scale = this.scale + 0.1;
            this.previewClick = true;
        },
        zoomOut() {
            this.scale = this.scale - 0.1;
            this.previewClick = true;
        },
        onBeforeEnter() {
            ZIndexUtils.set('modal', this.mask, this.$primevue.config.zIndex.modal);
        },
        onEnter() {
            this.focus();
            this.$emit('show');
        },
        onBeforeLeave() {
            !this.isUnstyled && DomHandler.addClass(this.mask, 'p-component-overlay-leave');
        },
        onLeave() {
            DomHandler.unblockBodyScroll();
            this.$emit('hide');
        },
        onAfterLeave(el) {
            ZIndexUtils.clear(el);
            this.maskVisible = false;
        },
        focus() {
            let focusTarget = this.mask.querySelector('[autofocus]');

            if (focusTarget) {
                focusTarget.focus();
            }
        },
        hidePreview() {
            this.previewVisible = false;
            this.rotate = 0;
            this.scale = 1;
            DomHandler.unblockBodyScroll();
        }
    },
    computed: {
        containerClass() {
            return [this.cx('root'), this.class];
        },
        rotateClass() {
            return 'p-image-preview-rotate-' + this.rotate;
        },
        imagePreviewStyle() {
            return { transform: 'rotate(' + this.rotate + 'deg) scale(' + this.scale + ')' };
        },
        isZoomInDisabled() {
            return this.zoomInDisabled || this.scale >= 1.5;
        },
        isZoomOutDisabled() {
            return this.zoomOutDisabled || this.scale <= 0.5;
        },
        rightAriaLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.rotateRight : undefined;
        },
        leftAriaLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.rotateLeft : undefined;
        },
        zoomInAriaLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.zoomIn : undefined;
        },
        zoomOutAriaLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.zoomOut : undefined;
        },
        zoomImageAriaLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.zoomImage : undefined;
        },
        closeAriaLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.close : undefined;
        }
    },
    components: {
        Portal: Portal,
        EyeIcon: EyeIcon,
        RefreshIcon: RefreshIcon,
        UndoIcon: UndoIcon,
        SearchMinusIcon: SearchMinusIcon,
        SearchPlusIcon: SearchPlusIcon,
        TimesIcon: TimesIcon
    },
    directives: {
        focustrap: FocusTrap
    }
};
</script>
