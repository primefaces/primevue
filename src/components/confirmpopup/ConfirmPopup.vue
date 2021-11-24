<template>
    <transition name="p-confirm-popup" @enter="onEnter" @leave="onLeave">
        <div class="p-confirm-popup p-component" v-if="visible" ref="container">
            <slot name="message" v-if="$scopedSlots.message"></slot>
            <template v-else>
                <div class="p-confirm-popup-content">
                    <i :class="iconClass" />
                    <span class="p-confirm-popup-message">{{confirmation.message}}</span>
                </div>
            </template>
            <div class="p-confirm-popup-footer">
                <CPButton :label="rejectLabel" :icon="rejectIcon" :class="rejectClass" @click="reject()"/>
                <CPButton :label="acceptLabel" :icon="acceptIcon" :class="acceptClass" @click="accept()" autofocus />
            </div>
        </div>
    </transition>
</template>

<script>
import ConfirmationEventBus from '../confirmationeventbus/ConfirmationEventBus';
import ConnectedOverlayScrollHandler from '../utils/ConnectedOverlayScrollHandler';
import DomHandler from '../utils/DomHandler';
import Button from '../button/Button';

export default {
    props: {
        group: String
    },
    data() {
        return {
            visible: false,
            confirmation: null
        }
    },
    target: null,
    outsideClickListener: null,
    scrollHandler: null,
    resizeListener: null,
    container: null,
    mounted() {
        ConfirmationEventBus.on('confirm', (options) => {
            if (!options) {
                return;
            }

            if (options.group === this.group) {
                this.confirmation = options;
                this.target = options.target;
                this.visible = true;
            }
        });

        ConfirmationEventBus.on('close', () => {
            this.visible = false;
            this.confirmation = null;
        });
    },
    beforeDestroy() {
        ConfirmationEventBus.off('confirm');
        ConfirmationEventBus.off('close');

        this.restoreAppend();
        this.unbindOutsideClickListener();
        if (this.scrollHandler) {
            this.scrollHandler.destroy();
            this.scrollHandler = null;
        }
        this.unbindResizeListener();
        this.target = null;
        this.container = null;
        this.confirmation = null;
    },
    methods: {
        accept() {
            if (this.confirmation.accept) {
                this.confirmation.accept();
            }

            this.visible = false;
        },
        reject() {
            if (this.confirmation.reject) {
                this.confirmation.reject();
            }

            this.visible = false;
        },
        onEnter() {
            this.appendContainer();
            this.alignOverlay();
            this.bindOutsideClickListener();
            this.bindScrollListener();
            this.bindResizeListener();
            this.$refs.container.style.zIndex = String(this.baseZIndex + DomHandler.generateZIndex());
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
                DomHandler.addClass(this.$refs.container, 'p-confirm-popup-flipped');
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
            document.body.append(this.$refs.container);
        },
        restoreAppend() {
            if (this.container) {
                document.body.remove(this.$refs.container);
            }
        }
    },
    computed: {
        message() {
            return this.confirmation ? this.confirmation.message : null;
        },
        iconClass() {
            return ['p-confirm-popup-icon', this.confirmation ? this.confirmation.icon : null];
        },
        acceptLabel() {
            return this.confirmation ? (this.confirmation.acceptLabel || this.$primevue.config.locale.accept) : null;
        },
        rejectLabel() {
            return this.confirmation ? (this.confirmation.rejectLabel || this.$primevue.config.locale.reject) : null;
        },
        acceptIcon() {
            return this.confirmation ? this.confirmation.acceptIcon : null;
        },
        rejectIcon() {
            return this.confirmation ? this.confirmation.rejectIcon : null;
        },
        acceptClass() {
            return ['p-confirm-popup-accept p-button-sm', this.confirmation ? this.confirmation.acceptClass : null];
        },
        rejectClass() {
            return ['p-confirm-popup-reject p-button-sm', this.confirmation ? (this.confirmation.rejectClass || 'p-button-text') : null];
        }
    },
    components: {
        'CPButton': Button
    }
}
</script>

<style>
.p-confirm-popup {
    position: absolute;
    margin-top: 10px;
}

.p-confirm-popup-flipped {
    margin-top: 0;
    margin-bottom: 10px;
}

/* Animation */
.p-confirm-popup-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-confirm-popup-leave-to {
    opacity: 0;
}

.p-confirm-popup-enter-active {
    transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
}

.p-confirm-popup-leave-active {
    transition: opacity .1s linear;
}

.p-confirm-popup:after, .p-confirm-popup:before {
	bottom: 100%;
	left: calc(var(--overlayArrowLeft, 0) + 1.25rem);
	content: " ";
	height: 0;
	width: 0;
	position: absolute;
	pointer-events: none;
}

.p-confirm-popup:after {
	border-width: 8px;
	margin-left: -8px;
}

.p-confirm-popup:before {
	border-width: 10px;
	margin-left: -10px;
}

.p-confirm-popup-flipped:after, .p-confirm-popup-flipped:before {
    bottom: auto;
    top: 100%;
}

.p-confirm-popup.p-confirm-popup-flipped:after {
    border-bottom-color: transparent;
}

.p-confirm-popup.p-confirm-popup-flipped:before {
    border-bottom-color: transparent
}

.p-confirm-popup .p-confirm-popup-content {
    display: flex;
    align-items: center;
}
</style>