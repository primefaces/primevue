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
                const target = this.$children ? this.$children[0]: null;
                if (target) {
                    this.mask = document.createElement('div');
                    this.mask.setAttribute('class', styleClass);
                    target.$el.appendChild(this.mask);
                    target.$el.style.position = 'relative';
                }
            }

            if (this.autoZIndex) {
                this.mask.style.zIndex = String(this.baseZIndex + DomHandler.generateZIndex());
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
}

.p-blockui.p-component-overlay {
    position: absolute;
}

.p-blockui-document.p-component-overlay {
    position: fixed;
}
</style>
