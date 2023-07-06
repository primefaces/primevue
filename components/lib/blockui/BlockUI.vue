<template>
    <div ref="container" :class="cx('root')" :aria-busy="isBlocked" v-bind="ptm('root')">
        <slot></slot>
    </div>
</template>

<script>
import { DomHandler, ZIndexUtils } from 'primevue/utils';
import BaseBlockUI from './BaseBlockUI.vue';

export default {
    name: 'BlockUI',
    extends: BaseBlockUI,
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
                this.mask = document.createElement('div');
                !this.isUnstyled && this.mask.setAttribute('class', styleClass);
                document.body.appendChild(this.mask);
                DomHandler.addClass(document.body, 'p-overflow-hidden');
                document.activeElement.blur();
            } else {
                this.mask = document.createElement('div');
                !this.isUnstyled && this.mask.setAttribute('class', styleClass);
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
            this.mask.addEventListener('animationend', () => {
                this.removeMask();
            });
        },
        removeMask() {
            ZIndexUtils.clear(this.mask);

            if (this.fullScreen) {
                if (!this.isUnstyled) {
                    document.body.removeChild(this.mask);
                    DomHandler.removeClass(document.body, 'p-overflow-hidden');
                }
            } else {
                this.$refs.container.removeChild(this.mask);
            }

            this.isBlocked = false;
            this.$emit('unblock');
        }
    }
};
</script>
