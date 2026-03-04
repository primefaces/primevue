<template>
    <div ref="container" :class="cx('root')" :aria-busy="isBlocked" v-bind="ptmi('root')">
        <slot></slot>
    </div>
</template>

<script>
import { addClass, createElement, hasCSSAnimation } from '@primeuix/utils/dom';
import { ZIndex } from '@primeuix/utils/zindex';
import { blockBodyScroll, unblockBodyScroll } from 'primevue/utils';
import BaseBlockUI from './BaseBlockUI.vue';

export default {
    name: 'BlockUI',
    extends: BaseBlockUI,
    inheritAttrs: false,
    emits: ['block', 'unblock'],
    mask: null,
    data() {
        return {
            isBlocked: false
        };
    },
    watch: {
        blocked(newValue) {
            if (newValue === true) this.block();
            else this.unblock();
        }
    },
    mounted() {
        if (this.blocked) {
            this.block();
        }
    },
    methods: {
        block() {
            let styleClass = 'p-blockui-mask p-overlay-mask p-overlay-mask-enter-active';

            if (this.fullScreen) {
                styleClass += ' p-blockui-mask-document';

                this.mask = createElement('div', {
                    style: {
                        position: 'fixed',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: '100%'
                    },
                    class: !this.isUnstyled && styleClass,
                    'p-bind': this.ptm('mask')
                });

                document.body.appendChild(this.mask);
                blockBodyScroll();
                document.activeElement.blur();
            } else {
                this.mask = createElement('div', {
                    style: {
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: '100%'
                    },
                    class: !this.isUnstyled && styleClass,
                    'p-bind': this.ptm('mask')
                });
                this.$refs.container.appendChild(this.mask);
            }

            if (this.autoZIndex) {
                ZIndex.set('modal', this.mask, this.baseZIndex + this.$primevue.config.zIndex.modal);
            }

            this.isBlocked = true;
            this.$emit('block');
        },
        unblock() {
            const currentMask = this.mask;

            if (currentMask) {
                !this.isUnstyled && addClass(currentMask, 'p-overlay-mask-leave-active');

                const handleAnimationEnd = () => {
                    clearTimeout(fallbackTimer);
                    currentMask.removeEventListener('animationend', handleAnimationEnd);
                    currentMask.removeEventListener('webkitAnimationEnd', handleAnimationEnd);
                    this.removeMask(currentMask);
                };

                const fallbackTimer = setTimeout(() => {
                    this.removeMask(currentMask);
                }, 300);

                if (hasCSSAnimation(currentMask) > 0) {
                    currentMask.addEventListener('animationend', handleAnimationEnd);
                    currentMask.addEventListener('webkitAnimationEnd', handleAnimationEnd);
                }
            } else {
                this.removeMask();
            }
        },
        removeMask(mask = this.mask) {
            if (!mask) {
                this.isBlocked = false;
                this.$emit('unblock');
                return;
            }

            ZIndex.clear(mask);

            const isDocumentMask = mask.parentNode === document.body;

            if (mask.parentNode) {
                mask.parentNode.removeChild(mask);
            }

            if (isDocumentMask) {
                unblockBodyScroll();
            }

            if (this.mask === mask) {
                this.mask = null;
            }

            this.isBlocked = false;
            this.$emit('unblock');
        }
    }
};
</script>
