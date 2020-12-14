<template>
    <transition name="p-sidebar" @enter="onEnter" @leave="onLeave" appear>
        <div :class="containerClass" v-if="visible" ref="container" role="complementary" :aria-modal="modal">
            <div class="p-sidebar-content">
                <button class="p-sidebar-close p-link" @click="hide" :aria-label="ariaCloseLabel" v-if="showCloseIcon" type="button" v-ripple>
                    <span class="p-sidebar-close-icon pi pi-times" />
                </button>
                <slot></slot>
            </div>
        </div>
    </transition>
</template>

<script>
import DomHandler from '../utils/DomHandler';
import Ripple from '../ripple/Ripple';

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
        },
        ariaCloseLabel: {
            type: String,
            default: 'close'
        }
    },
    mask: null,
    maskClickListener: null,
    beforeDestroy() {
        this.unbindMaskClickListener();
    },
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
                this.mask.setAttribute('class', 'p-sidebar-mask');
                this.mask.style.zIndex = String(parseInt(this.$refs.container.style.zIndex, 10) - 1);
                if (this.dismissable) {
                    this.bindMaskClickListener();
                }
                document.body.appendChild(this.mask);
                DomHandler.addClass(document.body, 'p-overflow-hidden');

                setTimeout(() => {
                    DomHandler.addClass(this.mask, 'p-component-overlay');
                }, 1);
            }
        },
        disableModality() {
            if (this.mask) {
                DomHandler.addClass(this.mask, 'p-sidebar-mask-leave');
                this.mask.addEventListener('transitionend', () => {
                    this.unbindMaskClickListener();
                    document.body.removeChild(this.mask);
                    DomHandler.removeClass(document.body, 'p-overflow-hidden');
                    this.mask = null;
                });
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
    },
    directives: {
        'ripple': Ripple
    }
}
</script>

<style>
.p-sidebar {
    position: fixed;
    transition: transform .3s;
}

.p-sidebar-content {
    position: relative;
}

.p-sidebar-close {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.p-sidebar-mask {
    background-color: transparent;
    transition-property: background-color;
}

.p-sidebar-mask.p-sidebar-mask-leave.p-component-overlay {
    background-color: transparent;
}

.p-sidebar-left {
    top: 0;
    left: 0;
    width: 20rem;
    height: 100%;
}

.p-sidebar-right {
    top: 0;
    right: 0;
    width: 20rem;
    height: 100%;
}

.p-sidebar-top {
    top: 0;
    left: 0;
    width: 100%;
    height: 10rem;
}

.p-sidebar-bottom {
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10rem;
}

.p-sidebar-full {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    -webkit-transition: none;
    transition: none;
}

.p-sidebar-left.p-sidebar-enter,
.p-sidebar-left.p-sidebar-leave-to {
    transform: translateX(-100%);
}

.p-sidebar-right.p-sidebar-enter,
.p-sidebar-right.p-sidebar-leave-to {
    transform: translateX(100%);
}

.p-sidebar-top.p-sidebar-enter,
.p-sidebar-top.p-sidebar-leave-to {
    transform: translateY(-100%);
}

.p-sidebar-bottom.p-sidebar-enter,
.p-sidebar-bottom.p-sidebar-leave-to {
    transform: translateY(100%);
}

.p-sidebar-full.p-sidebar-enter,
.p-sidebar-full.p-sidebar-leave-to {
    opacity: 0;
}

.p-sidebar-full.p-sidebar-enter-active,
.p-sidebar-full.p-sidebar-leave-active {
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}

.p-sidebar-left.p-sidebar-sm,
.p-sidebar-right.p-sidebar-sm {
    width: 20rem;
}

.p-sidebar-left.p-sidebar-md,
.p-sidebar-right.p-sidebar-md {
    width: 40rem;
}

.p-sidebar-left.p-sidebar-lg,
.p-sidebar-right.p-sidebar-lg {
    width: 60rem;
}

.p-sidebar-top.p-sidebar-sm,
.p-sidebar-bottom.p-sidebar-sm {
    height: 10rem;
}

.p-sidebar-top.p-sidebar-md,
.p-sidebar-bottom.p-sidebar-md {
    height: 20rem;
}

.p-sidebar-top.p-sidebar-lg,
.p-sidebar-bottom.p-sidebar-lg {
    height: 30rem;
}

@media screen and (max-width: 64em) {
    .p-sidebar-left.p-sidebar-lg,
    .p-sidebar-left.p-sidebar-md,
    .p-sidebar-right.p-sidebar-lg,
    .p-sidebar-right.p-sidebar-md {
        width: 20rem;
    }
}
</style>
