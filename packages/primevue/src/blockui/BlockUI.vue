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

    /**
     * 20 Jun 2025
     * @deprecated the single mask variable will cause race condition if the block / unblock value changed too fast
     */
    mask: null,

    maskList: null,
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
            let styleClass = 'p-blockui-mask p-overlay-mask p-overlay-mask-enter';
            let m = null;

            if (this.fullScreen) {
                styleClass += ' p-blockui-mask-document';

                m = createElement('div', {
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

                document.body.appendChild(m);
                blockBodyScroll();
                document.activeElement.blur();
            } else {
                m = createElement('div', {
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
                this.$refs.container.appendChild(m);
            }

            if (this.autoZIndex) {
                ZIndex.set('modal', m, this.baseZIndex + this.$primevue.config.zIndex.modal);
            }

            if(this.maskList === undefined || this.maskList === null) {
                this.maskList = [];
            }

            this.maskList.push(m);
            this.isBlocked = true;
            this.$emit('block');
        },
        unblock() {
            if(this.maskList && this.maskList.length > 0) {
                let m = this.maskList[0];

                !this.isUnstyled && addClass(m, 'p-overlay-mask-leave');

                const handleAnimationEnd = () => {
                    clearTimeout(fallbackTimer);
                    m.removeEventListener('animationend', handleAnimationEnd);
                    m.removeEventListener('webkitAnimationEnd', handleAnimationEnd);
                };

                const fallbackTimer = setTimeout(() => {
                    this.removeMask();
                }, 10);

                if (hasCSSAnimation(m) > 0) {
                    m.addEventListener('animationend', handleAnimationEnd);
                    m.addEventListener('webkitAnimationEnd', handleAnimationEnd);
                }
            } else {
                this.removeMask();
            }
        },
        removeMask() {
            if(this.maskList && this.maskList.length > 0) {
                const m = this.maskList.shift();
                ZIndex.clear(m);

                if (this.fullScreen) {
                    document.body.removeChild(m);
                    unblockBodyScroll();
                } else {
                    this.$refs.container?.removeChild(m);
                }

                this.isBlocked = false;
                this.$emit('unblock');
            }
        }
    }
};
</script>
