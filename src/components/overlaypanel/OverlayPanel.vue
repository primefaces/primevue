<template>
    <transition name="p-overlaypanel" @enter="onEnter" @leave="onLeave">
        <div class="p-overlaypanel p-component" v-if="visible" ref="container">
            <div class="p-overlaypanel-content">
                <slot></slot>
            </div>
            <button class="p-overlaypanel-close p-link" @click="hide" v-if="showCloseIcon">
                <span class="p-overlaypanel-close-icon pi pi-times"></span>
            </button>
        </div>
    </transition>
</template>

<script>
import DomHandler from '../utils/DomHandler';

export default {
    props: {
        appendTo: String,
        showCloseIcon: {
            type: Boolean,
            default: false
        },
        dismissable: {
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
        this.restoreAppend();
        if (this.dismissable) {
            this.unbindOutsideClickListener();
        }
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
            this.appendContainer();
            this.alignOverlay();

            if (this.dismissable) {
                this.bindOutsideClickListener();
            }

            if (this.autoZIndex) {
                this.$refs.container.style.zIndex = String(this.baseZIndex + DomHandler.generateZIndex());
            }
        },
        onLeave() {
            if (this.dismissable) {
                this.unbindOutsideClickListener();
            }
        },
        alignOverlay() {
            DomHandler.absolutePosition(this.$refs.container, this.target);

            if (DomHandler.getOffset(this.$refs.container).top < DomHandler.getOffset(this.target).top) {
                DomHandler.addClass(this.$refs.container, 'p-overlaypanel-flipped');
            }
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
        },
        appendContainer() {
            if (this.appendTo) {
                if (this.appendTo === 'body')
                    document.body.appendChild(this.$refs.container);
                else
                    document.getElementById(this.appendTo).appendChild(this.$refs.container);
            }
        },
        restoreAppend() {
            if (this.$refs.container && this.appendTo) {
                if (this.appendTo === 'body')
                    document.body.removeChild(this.$refs.container);
                else
                    document.getElementById(this.appendTo).removeChild(this.$refs.container);
            }
        }
    } 
}
</script>
