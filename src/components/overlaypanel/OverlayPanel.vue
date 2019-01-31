<template>
    <transition name="p-overlaypanel" @enter="onEnter" @leave="onLeave">
        <div class="p-overlaypanel p-component" v-if="visible" ref="container">
            <div class="p-overlaypanel-content">
                <slot></slot>
            </div>
        </div>
    </transition>
</template>

<script>
import DomHandler from '../utils/DomHandler';

export default {
    props: {
        baseZIndex: {
            type: Number,
            default: 0
        },
        autoZIndex: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            visible: false
        }
    },
    target: null,
    outsideClickListener: null,
    beforeDestroy() {
        this.unbindOutsideClickListener();
        this.target = null;
    },
    methods: {
        toggle(event) {
            if (this.visible)
                this.hide();
            else
                this.show(event);
        },
        show(event) {
            this.visible = true;
            this.target = event.target;
        },
        hide() {
            this.visible = false;
        },
        onEnter() {
            this.alignOverlay();
            this.bindOutsideClickListener();

            if (this.autoZIndex) {
                this.$refs.container.style.zIndex = String(this.baseZIndex + DomHandler.generateZIndex());
            }
        },
        onLeave() {
            this.unbindOutsideClickListener();
        },
        alignOverlay() {
            DomHandler.absolutePosition(this.$refs.container, this.target);
        },
        bindOutsideClickListener() {
            if (!this.outsideClickListener) {
                this.outsideClickListener = (event) => {
                    if (this.visible && this.$refs.container && !this.$refs.container.contains(event.target) && !this.isTargetClicked(event)) {
                        this.visible = false;
                    }
                };
                document.addEventListener('click', this.outsideClickListener);
            }
        },
        unbindOutsideClickListener() {
            if (this.outsideClickListener) {
                document.removeEventListener('click', this.outsideClickListener);
                this.outsideClickListener = null;
            }
        },
        isTargetClicked() {
            return this.target && (this.target === event.target || this.target.contains(event.target));
        }
    } 
}
</script>
