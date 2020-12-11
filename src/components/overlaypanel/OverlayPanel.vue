<template>
    <transition name="p-overlaypanel" @enter="onEnter" @leave="onLeave">
        <div class="p-overlaypanel p-component" v-if="visible" ref="container">
            <div class="p-overlaypanel-content" @click="onContentClick">
                <slot></slot>
            </div>
            <button class="p-overlaypanel-close p-link" @click="hide" v-if="showCloseIcon" :aria-label="ariaCloseLabel" type="button" v-ripple>
                <span class="p-overlaypanel-close-icon pi pi-times"></span>
            </button>
        </div>
    </transition>
</template>

<script>
import ConnectedOverlayScrollHandler from '../utils/ConnectedOverlayScrollHandler';
import DomHandler from '../utils/DomHandler';
import Ripple from '../ripple/Ripple';

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
    selfClick: false,
    target: null,
    outsideClickListener: null,
    scrollHandler: null,
    resizeListener: null,
    beforeDestroy() {
        this.restoreAppend();
        if (this.dismissable) {
            this.unbindOutsideClickListener();
        }
        if (this.scrollHandler) {
            this.scrollHandler.destroy();
            this.scrollHandler = null;
        }
        this.unbindResizeListener();
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
        onContentClick() {
            this.selfClick = true;
        },
        onEnter() {
            this.appendContainer();
            this.alignOverlay();
            if (this.dismissable) {
                this.bindOutsideClickListener();
            }

            this.bindScrollListener();
            this.bindResizeListener();

            if (this.autoZIndex) {
                this.$refs.container.style.zIndex = String(this.baseZIndex + DomHandler.generateZIndex());
            }
        },
        onLeave() {
            this.unbindOutsideClickListener();
            this.unbindScrollListener();
            this.unbindResizeListener();
        },
        alignOverlay() {
            DomHandler.absolutePosition(this.$refs.container, this.target);

            const containerOffset = DomHandler.getOffset(this.$refs.container);
            const targetOffset = DomHandler.getOffset(this.target);
            let arrowLeft = 0;

            if (containerOffset.left < targetOffset.left) {
                arrowLeft = targetOffset.left - containerOffset.left;
            }
            this.$refs.container.style.setProperty('--overlayArrowLeft', `${arrowLeft}px`);

            if (containerOffset.top < targetOffset.top) {
                DomHandler.addClass(this.$refs.container, 'p-overlaypanel-flipped');
            }
        },
        bindOutsideClickListener() {
            if (!this.outsideClickListener) {
                this.outsideClickListener = (event) => {
                    if (this.visible && !this.selfClick && !this.isTargetClicked(event)) {
                        this.visible = false;
                    }
                    this.selfClick = false;
                };
                document.addEventListener('click', this.outsideClickListener);
            }
        },
        unbindOutsideClickListener() {
            if (this.outsideClickListener) {
                document.removeEventListener('click', this.outsideClickListener);
                this.outsideClickListener = null;
                this.selfClick= false;
            }
        },
        bindScrollListener() {
            if (!this.scrollHandler) {
                this.scrollHandler = new ConnectedOverlayScrollHandler(this.target, () => {
                    if (this.visible) {
                        this.visible = false;
                    }
                });
            }

            this.scrollHandler.bindScrollListener();
        },
        unbindScrollListener() {
            if (this.scrollHandler) {
                this.scrollHandler.unbindScrollListener();
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
    },
    directives: {
        'ripple': Ripple
    }
}
</script>

<style>
.p-overlaypanel {
    position: absolute;
    margin-top: 10px;
}

.p-overlaypanel-flipped {
    margin-top: 0;
    margin-bottom: 10px;
}

.p-overlaypanel-close {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
}

/* Animation */
.p-overlaypanel-enter {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-overlaypanel-leave-to {
    opacity: 0;
}

.p-overlaypanel-enter-active {
    transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
}

.p-overlaypanel-leave-active {
    transition: opacity .1s linear;
}

.p-overlaypanel:after, .p-overlaypanel:before {
	bottom: 100%;
    left: calc(var(--overlayArrowLeft, 0) + 1.25rem);
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
