<template>
    <transition name="p-sidebar" @enter="onEnter" @leave="onLeave">
        <div :class="containerClass" v-if="visible" ref="container">
            <button class="p-sidebar-close p-link" @click="hide">
                <span class="p-sidebar-close-icon pi pi-times" />
            </button>
            <slot></slot>
        </div>
    </transition>
</template>

<script>
import DomHandler from '../utils/DomHandler';

export default {
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        position: {
            type: String,
            default: 'left'
        },
        baseZIndex: {
            type: Number,
            default: 0
        },
        autoZIndex: {
            type: Boolean,
            default: true
        },
        dismissable: {
            type: Boolean,
            default: true
        },
        showCloseIcon: {
            type: Boolean,
            default: true
        },
        modal: {
            type: Boolean,
            default: true
        }
    },
    mask: null,
    maskClickListener: null,
    methods: {
        hide() {
            this.$emit('update:visible', false);
        },
        onEnter() {
            this.$emit('show');

            if (this.autoZIndex) {
                this.$refs.container.style.zIndex = String(this.baseZIndex + DomHandler.generateZIndex());
            }
            this.focus();
            if (this.modal && !this.fullScreen) {
                this.enableModality();
            }
        },
        onLeave() {
            this.$emit('hide');

            if (this.modal && !this.fullScreen) {
                this.disableModality();
            }
        },
        focus() {
            let focusable = DomHandler.findSingle(this.$refs.container, 'input,button');
            if (focusable) {
                focusable.focus();
            }
        },
        enableModality() {
            if (!this.mask) {
                this.mask = document.createElement('div');
                this.mask.style.zIndex = String(parseInt(this.$refs.container.style.zIndex, 10) - 1);
                DomHandler.addMultipleClasses(this.mask, 'p-component-overlay');
                if (this.dismissable) {
                    this.bindMaskClickListener();
                }
                document.body.appendChild(this.mask);
                DomHandler.addClass(document.body, 'p-overflow-hidden');
            }
        },
        disableModality() {
            if (this.mask) {
                this.unbindMaskClickListener();
                document.body.removeChild(this.mask);
                DomHandler.removeClass(document.body, 'p-overflow-hidden');
                this.mask = null;
            }
        },
        bindMaskClickListener() {
            if (!this.maskClickListener) {
                this.maskClickListener = () => {
                    this.hide();
                };
                this.mask.addEventListener('click', this.maskClickListener);
            }
        },
        unbindMaskClickListener() {
            if (this.maskClickListener) {
                this.mask.removeEventListener('click', this.maskClickListener);
                this.maskClickListener = null;
            }
        }
    },
    computed: {
        containerClass() {
            return ['p-sidebar p-component p-sidebar-' + this.position , {
                'p-sidebar-active': this.visible
            }];
        },
        fullScreen() {
            return this.position === 'full';
        }
    }
}
</script>
