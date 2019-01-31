<template>
    <transition name="p-dialog" @enter="onEnter" @leave="onLeave">
        <div ref="container" :class="containerClass" v-if="visible">
            <div class="p-dialog-titlebar" v-if="showHeader">
                <slot name="header">
                    <span class="p-panel-title" v-if="header">{{header}}</span>
                </slot>
                <div class="p-dialog-titlebar-icons">
                    <button class="p-dialog-titlebar-icon p-dialog-titlebar-close p-link" @click="close" v-if="closable">
                        <span class="p-dialog-titlebar-close-icon pi pi-times"></span>
                    </button>
                </div>
            </div>
            <div class="p-dialog-content" :style="contentStyle">
                <slot></slot>
            </div>
            <div class="p-dialog-footer" v-if="footer || $slots.footer">
                <slot name="footer">{{footer}}</slot>
            </div>
        </div>
    </transition>
</template>

<script>
import DomHandler from '../utils/DomHandler';

export default {
    props: {
        visible: Boolean,
        header: null,
        footer: null,
        modal: Boolean,
        rtl: Boolean,
        contentStyle: null,
        closable: {
            type: Boolean,
            default: true
        },
        showHeader: {
            type: Boolean,
            default: true
        },
        baseZIndex: {
            type: Number,
            default: 0
        },
        autoZIndex: {
            type: Boolean,
            default: true
        },
    },
    mask: null,
    methods: {
        close(event) {
            this.$emit('update:visible', false);
        },
        onEnter() {
            this.$emit('show');

            if (this.autoZIndex) {
                this.$refs.container.style.zIndex = String(this.baseZIndex + DomHandler.generateZIndex());
            }
            this.focus();
            if (this.modal) {
                this.enableModality();
            }
        },
        onLeave() {
            this.$emit('hide');

            if (this.modal) {
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
                DomHandler.addMultipleClasses(this.mask, 'p-component-overlay p-dialog-mask p-fadein');
                document.body.appendChild(this.mask);
                DomHandler.addClass(document.body, 'p-overflow-hidden');
            }
        },
        disableModality() {
            if (this.mask) {
                document.body.removeChild(this.mask);
                DomHandler.removeClass(document.body, 'p-overflow-hidden');
                this.mask = null;
            }
        }
    },
    computed: {
        containerClass() {
            return ['p-dialog p-component', {
                'p-dialog-rtl': this.rtl
            }];
        }
    }
}
</script>

<style>

</style>
