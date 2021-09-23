<template>
    <span ref="container" :class="containerClass" :style="styles">
        <img v-bind="$attrs" :style="imageStyle" :class="imageClass" />
        <div class="p-image-preview-indicator" v-if="preview" @click="onImageClick">
            <slot name="indicator">
                <i class="p-image-preview-icon pi pi-eye"></i>
            </slot>
        </div>
        <div ref="mask" :class="maskClass" v-if="maskVisible" @click="onMaskClick">
            <div class="p-image-toolbar">
                <button class="p-image-action p-link" @click="rotateRight" type="button">
                    <i class="pi pi-refresh"></i>
                </button>
                <button class="p-image-action p-link" @click="rotateLeft" type="button">
                    <i class="pi pi-undo"></i>
                </button>
                <button class="p-image-action p-link" @click="zoomOut" type="button" :disabled="zoomDisabled">
                    <i class="pi pi-search-minus"></i>
                </button>
                <button class="p-image-action p-link" @click="zoomIn" type="button" :disabled="zoomDisabled">
                    <i class="pi pi-search-plus"></i>
                </button>
                <button class="p-image-action p-link" type="button">
                    <i class="pi pi-times"></i>
                </button>
            </div>
            <transition name="p-image-preview" @before-enter="onBeforeEnter" @enter="onEnter" @leave="onLeave" @before-leave="onBeforeLeave" @after-leave="onAfterLeave">
                <div v-if="previewVisible">
                    <img :src="$attrs.src" class="p-image-preview" :style="imagePreviewStyle" @click="onPreviewImageClick"/>
                </div>
            </transition>
        </div>
    </span>
</template>

<script>
import DomHandler from '../utils/DomHandler';
export default {
    name: 'ImagePreview',
    inheritAttrs: false,
    props: {
        preview: {
            type: Boolean,
            default: false
        },
        className: null,
        styles: null,
        imageStyle: null,
        imageClass: null
    },
    mask: null,
    data() {
        return {
            maskVisible: false,
            previewVisible: false,
            rotate: 0,
            scale: 1
        }
    },
    beforeDestroy() {
        this.restoreAppend();
    },
    methods: {
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
        onMaskClick() {
            if (!this.previewClick) {
                this.previewVisible = false;
                this.rotate = 0;
                this.scale = 1;
            }
            this.previewClick = false;
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
            this.$refs.mask.style.zIndex = String(DomHandler.generateZIndex());
        },
        onEnter() {
            this.appendContainer();
            this.$emit('show');
        },
        onBeforeLeave() {
            DomHandler.addClass(this.$refs.mask, 'p-component-overlay-leave');
        },
        onLeave() {
            this.$emit('hide');
        },
        onAfterLeave() {
            this.maskVisible = false;
        },
        appendContainer() {
            document.body.appendChild(this.$refs.mask);
        },
        restoreAppend() {
            if (this.$refs.mask) {
                document.body.removeChild(this.$refs.mask);
            }
        }
    },
    computed: {
        containerClass() {
            return ['p-image p-component', this.className, {
                'p-image-preview-container': this.preview
            }];
        },
        maskClass() {
            return ['p-image-mask p-component-overlay p-component-overlay-enter'];
        },
        rotateClass() {
            return 'p-image-preview-rotate-' + this.rotate;
        },
        imagePreviewStyle() {
            return {transform: 'rotate(' + this.rotate + 'deg) scale(' + this.scale + ')'};
        },
        zoomDisabled() {
            return this.scale <= 0.5 || this.scale >= 1.5;
        }
    }
}
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
    transition: opacity .3s;
}
.p-image-preview-icon {
    font-size: 1.5rem;
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
    transition: transform .15s;
    max-width: 100vw;
    max-height: 100vh;
}
.p-image-preview-enter-active {
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}
.p-image-preview-leave-active {
    transition: all 150ms cubic-bezier(0.4, 0.0, 0.2, 1);
}
.p-image-preview-enter,
.p-image-preview-leave-to {
    opacity: 0;
    transform: scale(0.7);
}
</style>