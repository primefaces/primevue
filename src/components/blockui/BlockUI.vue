<template>
    <div class="p-blockui-container">
        <slot></slot>
    </div>
</template>

<script>
import DomHandler from '../utils/DomHandler';

export default {
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
            if (this.fullScreen) {
                this.mask = document.createElement('div');
                this.mask.setAttribute('class', 'p-blockui p-blockui-document');
                document.body.appendChild(this.mask);
                DomHandler.addClass(document.body, 'p-overflow-hidden');
                document.activeElement.blur();
            }
            else {
                const target = this.$children ? this.$children[0]: null;
                if (target) {
                    this.mask = document.createElement('div');
                    this.mask.setAttribute('class', 'p-blockui');
                    target.$el.appendChild(this.mask);
                    target.$el.style.position = 'relative';
                }
            }

            if (this.mask) {
                setTimeout(() => {
                    DomHandler.addClass(this.mask, 'p-component-overlay');
                }, 1);
            }

            if (this.autoZIndex) {
                this.mask.style.zIndex = String(this.baseZIndex + DomHandler.generateZIndex());
            }

            this.$emit('block');
        },
        unblock() {
            DomHandler.addClass(this.mask, 'p-blockui-leave');
            this.mask.addEventListener('transitionend', () => {
                this.removeMask();
            });
        },
        removeMask() {
             if (this.fullScreen) {
                document.body.removeChild(this.mask);
                DomHandler.removeClass(document.body, 'p-overflow-hidden');
            }
            else {
                this.$children[0].$el.removeChild(this.mask);
            }

            this.$emit('unblock');
        }
    }
}
</script>

<style>
.p-blockui {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    transition-property: background-color;
}

.p-blockui.p-component-overlay {
    position: absolute;
}

.p-blockui-document.p-component-overlay {
    position: fixed;
}

.p-blockui.p-blockui-leave.p-component-overlay {
    background-color: transparent;
}
</style>
