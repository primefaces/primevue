<template>
    <div ref="container" class="p-blockui-container">
        <slot></slot>
    </div>
</template>

<script>
import {DomHandler,ZIndexUtils} from 'primevue/utils';

export default {
    name: 'BlockUI',
    emits: ['block', 'unblock'],
    props: {
        blocked: {
            type: Boolean,
            default: false
        },
        fullScreen: {
            type: Boolean,
            default: false
        },
        baseZIndex: {
            type: Number,
            default: 0
        },
        autoZIndex: {
            type: Boolean,
            default: true
        }
    },
    mask: null,
    mounted() {
        if (this.blocked) {
            this.block();
        }
    },
    watch: {
        blocked(newValue) {
            if (newValue === true)
                this.block();
            else
                this.unblock();
        }
    },
    methods: {
        block() {
            let styleClass = 'p-blockui p-component-overlay p-component-overlay-enter';
            if (this.fullScreen) {
                styleClass += ' p-blockui-document';
                this.mask = document.createElement('div');
                this.mask.setAttribute('class', styleClass);
                document.body.appendChild(this.mask);
                DomHandler.addClass(document.body, 'p-overflow-hidden');
                document.activeElement.blur();
            }
            else {
                this.mask = document.createElement('div');
                this.mask.setAttribute('class', styleClass);
                this.$refs.container.appendChild(this.mask);
            }

            if (this.autoZIndex) {
                ZIndexUtils.set('modal', this.mask, this.baseZIndex + this.$primevue.config.zIndex.modal);
            }

            this.$emit('block');
        },
        unblock() {
            DomHandler.addClass(this.mask, 'p-component-overlay-leave');
            this.mask.addEventListener('animationend', () => {
                this.removeMask();
            });
        },
        removeMask() {
            ZIndexUtils.clear(this.mask);
             if (this.fullScreen) {
                document.body.removeChild(this.mask);
                DomHandler.removeClass(document.body, 'p-overflow-hidden');
            }
            else {
                this.$refs.container.removeChild(this.mask);
            }

            this.$emit('unblock');
        }
    }
}
</script>

<style>
.p-blockui-container {
    position: relative;
}

.p-blockui {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-blockui.p-component-overlay {
    position: absolute;
}

.p-blockui-document.p-component-overlay {
    position: fixed;
}
</style>
