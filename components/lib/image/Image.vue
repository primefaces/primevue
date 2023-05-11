<template>
    <span :class="containerClass" :style="style" v-bind="ptm('root')">
        <slot name="image" :class="imageClass" :style="imageStyle" :onError="onError">
            <img :style="imageStyle" :class="imageClass" @error="onError" v-bind="{ ...$attrs, ...ptm('image') }" />
        </slot>
        <button v-if="preview" ref="previewButton" class="p-image-preview-indicator" @click="onImageClick" v-bind="{ ...previewButtonProps, ...ptm('button') }">
            <slot name="indicatoricon">
                <component :is="indicatorIcon ? 'i' : 'EyeIcon'" class="p-image-preview-icon" v-bind="ptm('icon')" />
            </slot>
        </button>
        <Portal>
            <div v-if="maskVisible" :ref="maskRef" v-focustrap role="dialog" :class="maskClass" :aria-modal="maskVisible" @click="onMaskClick" @keydown="onMaskKeydown" v-bind="ptm('mask')">
                <div class="p-image-toolbar" v-bind="ptm('toolbar')">
                    <button class="p-image-action p-link" @click="rotateRight" type="button" :aria-label="rightAriaLabel" v-bind="ptm('rotateRightButton')">
                        <slot name="refresh">
                            <RefreshIcon v-bind="ptm('rotateRightIcon')" />
                        </slot>
                    </button>

                    <button class="p-image-action p-link" @click="rotateLeft" type="button" :aria-label="leftAriaLabel" v-bind="ptm('rotateLeftButton')">
                        <slot name="undo">
                            <UndoIcon v-bind="ptm('rotateLeftIcon')" />
                        </slot>
                    </button>

                    <button :class="['p-image-action p-link', { 'p-disabled': isZoomOutDisabled }]" @click="zoomOut" type="button" :disabled="isZoomOutDisabled" :aria-label="zoomOutAriaLabel" v-bind="ptm('zoomOutButton')">
                        <slot name="zoomout">
                            <SearchMinusIcon v-bind="ptm('zoomOutIcon')" />
                        </slot>
                    </button>

                    <button :class="['p-image-action p-link', { 'p-disabled': isZoomInDisabled }]" @click="zoomIn" type="button" :disabled="isZoomInDisabled" :aria-label="zoomInAriaLabel" v-bind="ptm('zoomInButton')">
                        <slot name="zoomin">
                            <SearchPlusIcon v-bind="ptm('zoomInIcon')" />
                        </slot>
                    </button>

                    <button class="p-image-action p-link" type="button" @click="hidePreview" :aria-label="closeAriaLabel" autofocus v-bind="ptm('closeButton')">
                        <slot name="close">
                            <TimesIcon v-bind="ptm('closeIcon')" />
                        </slot>
                    </button>
                </div>
                <transition name="p-image-preview" @before-enter="onBeforeEnter" @enter="onEnter" @leave="onLeave" @before-leave="onBeforeLeave" @after-leave="onAfterLeave">
                    <div v-if="previewVisible" v-bind="ptm('previewContainer')">
                        <slot name="preview" class="p-image-preview" :style="imagePreviewStyle" :onClick="onPreviewImageClick">
                            <img :src="$attrs.src" class="p-image-preview" :style="imagePreviewStyle" @click="onPreviewImageClick" v-bind="ptm('preview')" />
                        </slot>
                    </div>
                </transition>
            </div>
        </Portal>
    </span>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';
import FocusTrap from 'primevue/focustrap';
import EyeIcon from 'primevue/icons/eye';
import RefreshIcon from 'primevue/icons/refresh';
import SearchMinusIcon from 'primevue/icons/searchminus';
import SearchPlusIcon from 'primevue/icons/searchplus';
import TimesIcon from 'primevue/icons/times';
import UndoIcon from 'primevue/icons/undo';
import Portal from 'primevue/portal';
import { DomHandler, ZIndexUtils } from 'primevue/utils';

export default {
    name: 'Image',
    extends: BaseComponent,
    inheritAttrs: false,
    emits: ['show', 'hide', 'error'],
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
            const isActionbarTarget = [event.target.classList].includes('p-image-action') || event.target.closest('.p-image-action');

            if (isActionbarTarget) {
                return;
            }

            if (!this.previewClick) {
                this.previewVisible = false;
                this.rotate = 0;
                this.scale = 1;
            }

            this.previewClick = false;
        },
        onMaskKeydown(event) {
            switch (event.code) {
                case 'Escape':
                    this.onMaskClick();
                    setTimeout(() => {
                        DomHandler.focus(this.$refs.previewButton);
                    }, 25);
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
            DomHandler.addClass(this.mask, 'p-component-overlay-leave');
        },
        onLeave() {
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
        }
    },
    computed: {
        containerClass() {
            return [
                'p-image p-component',
                this.class,
                {
                    'p-image-preview-container': this.preview
                }
            ];
        },
        maskClass() {
            return ['p-image-mask p-component-overlay p-component-overlay-enter'];
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

<style>
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
</style>
