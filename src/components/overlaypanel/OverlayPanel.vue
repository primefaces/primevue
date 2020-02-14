<template>
    <transition name="p-overlaypanel" @enter="onEnter" @leave="onLeave">
        <div class="p-overlaypanel p-component" v-if="visible" ref="container">
            <div class="p-overlaypanel-content">
                <slot></slot>
            </div>
            <button class="p-overlaypanel-close p-link" @click="hide" v-if="showCloseIcon" :aria-label="ariaCloseLabel" type="button">
                <span class="p-overlaypanel-close-icon pi pi-times"></span>
            </button>
        </div>
    </transition>
</template>

<script>
import DomHandler from '../utils/DomHandler';

export default {
    props: {
		dismissable: {
			type: Boolean,
			default: true
		},
		showCloseIcon: {
			type: Boolean,
			default: false
		},
        appendTo: {
			type: String,
			default: null
		},
        baseZIndex: {
            type: Number,
            default: 0
        },
        autoZIndex: {
            type: Boolean,
            default: true
        },
        ariaCloseLabel: {
            type: String,
            default: 'close'
        }
    },
    data() {
        return {
            visible: false
        }
    },
    target: null,
    outsideClickListener: null,
    resizeListener: null,
    beforeDestroy() {
        this.restoreAppend();
        this.unbindResizeListener();
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
            this.target = event.currentTarget;
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

            this.bindResizeListener();

            if (this.autoZIndex) {
                this.$refs.container.style.zIndex = String(this.baseZIndex + DomHandler.generateZIndex());
            }
        },
        onLeave() {
            this.unbindOutsideClickListener();
            this.unbindResizeListener();
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
        bindResizeListener() {
            if (!this.resizeListener) {
                this.resizeListener = () => {
                    if (this.visible) {
                        this.visible = false;
                    }
                };
                window.addEventListener('resize', this.resizeListener);
            }
        },
        unbindResizeListener() {
            if (this.resizeListener) {
                window.removeEventListener('resize', this.resizeListener);
                this.resizeListener = null;
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

<style>
.p-overlaypanel {
    padding: 0;
    margin: 0;
    position: absolute;
    margin-top: 10px;
}

.p-overlaypanel-flipped {
    margin-top: 0;
    margin-bottom: 10px;
}

.p-overlaypanel-content {
    padding: 0.5em 1em;
}

.p-overlaypanel-close {
    position: absolute;
    top: -1em;
    right: -1em;
    width: 2em;
    height: 2em;
    line-height: 2em;
    text-align: center;
    -moz-border-radius: 100%;
    -webkit-border-radius: 100%;
    border-radius: 100%;
}

.p-overlaypanel-close-icon {
    line-height: inherit;
}

/* Animation */
.p-overlaypanel-enter,
.p-overlaypanel-leave-to {
    opacity: 0;
    transform: translate3d(-50%, -25%, 0) scale(0.9);
}

.p-overlaypanel-enter-active,
.p-overlaypanel-leave-active {
    transition: all 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}

.p-overlaypanel-enter,
.p-overlaypanel-leave-to {
    opacity: 0;
    -webkit-transform: translateY(5%);
    -ms-transform: translateY(5%);
    transform: translateY(5%);
}

.p-overlaypanel-enter-active,
.p-overlaypanel-leave-active {
    -webkit-transition: transform .3s, opacity .15s;
    transition: transform .3s, opacity .15s;
}

.p-overlaypanel:after, .p-overlaypanel:before {
	bottom: 100%;
	left: 1.25em;
	border: solid transparent;
	content: " ";
	height: 0;
	width: 0;
	position: absolute;
	pointer-events: none;
}

.p-overlaypanel:after {
	border-width: 8px;
	margin-left: -8px;
}

.p-overlaypanel:before {
	border-width: 10px;
	margin-left: -10px;
}

.p-overlaypanel-flipped:after, .p-overlaypanel-flipped:before {
    bottom: auto;
    top: 100%;
}

.p-overlaypanel.p-overlaypanel-flipped:after {
    border-bottom-color: transparent;
}

.p-overlaypanel.p-overlaypanel-flipped:before {
    border-bottom-color: transparent
}
</style>
