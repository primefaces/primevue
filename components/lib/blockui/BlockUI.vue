<template>
    <div ref="container" :class="cx('root')" :aria-busy="isBlocked" v-bind="ptmi('root')">
        <slot></slot>
    </div>
</template>

<script>
import { DomHandler, ZIndexUtils } from 'primevue/utils';
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
            let styleClass = 'p-blockui p-component-overlay p-component-overlay-enter';

            if (this.fullScreen) {
                styleClass += ' p-blockui-document';

                this.mask = DomHandler.createElement('div', {
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
                DomHandler.blockBodyScroll();
                document.activeElement.blur();
            } else {
                this.mask = DomHandler.createElement('div', {
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
                ZIndexUtils.set('modal', this.mask, this.baseZIndex + this.$primevue.config.zIndex.modal);
            }

            this.isBlocked = true;
            this.$emit('block');
        },
        unblock() {
            !this.isUnstyled && DomHandler.addClass(this.mask, 'p-component-overlay-leave');

            if (DomHandler.hasCSSAnimation(this.mask) > 0) {
                this.mask.addEventListener('animationend', () => {
                    this.removeMask();
                });
            } else {
                this.removeMask();
            }
        },
        removeMask() {
            ZIndexUtils.clear(this.mask);

            if (this.fullScreen) {
                document.body.removeChild(this.mask);
                DomHandler.unblockBodyScroll();
            } else {
                this.$refs.container.removeChild(this.mask);
            }

            this.isBlocked = false;
            this.$emit('unblock');
        }
    }
};
</script>
