<template>
    <Portal>
        <transition name="p-confirm-popup" @enter="onEnter" @after-enter="onAfterEnter" @leave="onLeave" @after-leave="onAfterLeave">
            <div v-if="visible" :ref="containerRef" v-focustrap role="alertdialog" :class="containerClass" :aria-modal="visible" @click="onOverlayClick" @keydown="onOverlayKeydown" v-bind="{ ...$attrs, ...ptm('root') }">
                <template v-if="!$slots.message">
                    <div class="p-confirm-popup-content" v-bind="ptm('content')">
                        <slot name="icon" class="p-confirm-popup-icon">
                            <component v-if="$slots.icon" :is="$slots.icon" class="p-confirm-popup-icon" />
                            <span v-else-if="confirmation.icon" :class="iconClass" v-bind="ptm('icon')" />
                        </slot>
                        <span class="p-confirm-popup-message" v-bind="ptm('message')">{{ confirmation.message }}</span>
                    </div>
                </template>
                <component v-else :is="$slots.message" :message="confirmation"></component>
                <div class="p-confirm-popup-footer" v-bind="ptm('footer')">
                    <CPButton :label="rejectLabel" :class="rejectClass" @click="reject()" @keydown="onRejectKeydown" :autofocus="autoFocusReject" :pt="ptm('rejectButton')">
                        <template #icon="iconProps">
                            <slot name="rejecticon">
                                <span :class="[rejectIcon, iconProps.class]" v-bind="ptm('rejectButton')['icon']" />
                            </slot>
                        </template>
                    </CPButton>
                    <CPButton :label="acceptLabel" :class="acceptClass" @click="accept()" @keydown="onAcceptKeydown" :autofocus="autoFocusAccept" :pt="ptm('acceptButton')">
                        <template #icon="iconProps">
                            <slot name="accepticon">
                                <span :class="[acceptIcon, iconProps.class]" v-bind="ptm('acceptButton')['icon']" />
                            </slot>
                        </template>
                    </CPButton>
                </div>
            </div>
        </transition>
    </Portal>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';
import Button from 'primevue/button';
import ConfirmationEventBus from 'primevue/confirmationeventbus';
import FocusTrap from 'primevue/focustrap';
import OverlayEventBus from 'primevue/overlayeventbus';
import Portal from 'primevue/portal';
import { ConnectedOverlayScrollHandler, DomHandler, ZIndexUtils } from 'primevue/utils';

export default {
    name: 'ConfirmPopup',
    extends: BaseComponent,
    inheritAttrs: false,
    props: {
        group: String
    },
    data() {
        return {
            visible: false,
            confirmation: null,
            autoFocusAccept: null,
            autoFocusReject: null
        };
    },
    target: null,
    outsideClickListener: null,
    scrollHandler: null,
    resizeListener: null,
    container: null,
    confirmListener: null,
    closeListener: null,
    mounted() {
        this.confirmListener = (options) => {
            if (!options) {
                return;
            }

            if (options.group === this.group) {
                this.confirmation = options;
                this.target = options.target;

                if (this.confirmation.onShow) {
                    this.confirmation.onShow();
                }

                this.visible = true;
            }
        };

        this.closeListener = () => {
            this.visible = false;
            this.confirmation = null;
        };

        ConfirmationEventBus.on('confirm', this.confirmListener);
        ConfirmationEventBus.on('close', this.closeListener);
    },
    beforeUnmount() {
        ConfirmationEventBus.off('confirm', this.confirmListener);
        ConfirmationEventBus.off('close', this.closeListener);

        this.unbindOutsideClickListener();

        if (this.scrollHandler) {
            this.scrollHandler.destroy();
            this.scrollHandler = null;
        }

        this.unbindResizeListener();

        if (this.container) {
            ZIndexUtils.clear(this.container);
            this.container = null;
        }

        this.target = null;
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
        onHide() {
            if (this.confirmation.onHide) {
                this.confirmation.onHide();
            }

            this.visible = false;
        },
        onAcceptKeydown(event) {
            if (event.code === 'Space' || event.code === 'Enter') {
                this.accept();
                DomHandler.focus(this.target);
                event.preventDefault();
            }
        },
        onRejectKeydown(event) {
            if (event.code === 'Space' || event.code === 'Enter') {
                this.reject();
                DomHandler.focus(this.target);
                event.preventDefault();
            }
        },
        onEnter(el) {
            this.autoFocusAccept = this.confirmation.defaultFocus === undefined || this.confirmation.defaultFocus === 'accept' ? true : false;
            this.autoFocusReject = this.confirmation.defaultFocus === 'reject' ? true : false;

            this.bindOutsideClickListener();
            this.bindScrollListener();
            this.bindResizeListener();

            ZIndexUtils.set('overlay', el, this.$primevue.config.zIndex.overlay);
        },
        onAfterEnter() {
            this.focus();
        },
        onLeave() {
            this.autoFocusAccept = null;
            this.autoFocusReject = null;

            this.unbindOutsideClickListener();
            this.unbindScrollListener();
            this.unbindResizeListener();
        },
        onAfterLeave(el) {
            ZIndexUtils.clear(el);
        },
        alignOverlay() {
            DomHandler.absolutePosition(this.container, this.target);

            const containerOffset = DomHandler.getOffset(this.container);
            const targetOffset = DomHandler.getOffset(this.target);
            let arrowLeft = 0;

            if (containerOffset.left < targetOffset.left) {
                arrowLeft = targetOffset.left - containerOffset.left;
            }

            this.container.style.setProperty('--overlayArrowLeft', `${arrowLeft}px`);

            if (containerOffset.top < targetOffset.top) {
                DomHandler.addClass(this.container, 'p-confirm-popup-flipped');
            }
        },
        bindOutsideClickListener() {
            if (!this.outsideClickListener) {
                this.outsideClickListener = (event) => {
                    if (this.visible && this.container && !this.container.contains(event.target) && !this.isTargetClicked(event)) {
                        if (this.confirmation.onHide) {
                            this.confirmation.onHide();
                        }

                        this.visible = false;
                    } else {
                        this.alignOverlay();
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
                    if (this.visible && !DomHandler.isTouchDevice()) {
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
        focus() {
            let focusTarget = this.container.querySelector('[autofocus]');

            if (focusTarget) {
                focusTarget.focus({ preventScroll: true }); // Firefox requires preventScroll
            }
        },
        isTargetClicked(event) {
            return this.target && (this.target === event.target || this.target.contains(event.target));
        },
        containerRef(el) {
            this.container = el;
        },
        onOverlayClick(event) {
            OverlayEventBus.emit('overlay-click', {
                originalEvent: event,
                target: this.target
            });
        },
        onOverlayKeydown(event) {
            if (event.code === 'Escape') {
                ConfirmationEventBus.emit('close', this.closeListener);
                DomHandler.focus(this.target);
            }
        }
    },
    computed: {
        containerClass() {
            return [
                'p-confirm-popup p-component',
                {
                    'p-input-filled': this.$primevue.config.inputStyle === 'filled',
                    'p-ripple-disabled': this.$primevue.config.ripple === false
                }
            ];
        },
        message() {
            return this.confirmation ? this.confirmation.message : null;
        },
        iconClass() {
            return ['p-confirm-popup-icon', this.confirmation ? this.confirmation.icon : null];
        },
        acceptLabel() {
            return this.confirmation ? this.confirmation.acceptLabel || this.$primevue.config.locale.accept : null;
        },
        rejectLabel() {
            return this.confirmation ? this.confirmation.rejectLabel || this.$primevue.config.locale.reject : null;
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
            return ['p-confirm-popup-reject p-button-sm', this.confirmation ? this.confirmation.rejectClass || 'p-button-text' : null];
        }
    },
    components: {
        CPButton: Button,
        Portal: Portal
    },
    directives: {
        focustrap: FocusTrap
    }
};
</script>

<style>
.p-confirm-popup {
    position: absolute;
    margin-top: 10px;
    top: 0;
    left: 0;
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
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-confirm-popup-leave-active {
    transition: opacity 0.1s linear;
}

.p-confirm-popup:after,
.p-confirm-popup:before {
    bottom: 100%;
    left: calc(var(--overlayArrowLeft, 0) + 1.25rem);
    content: ' ';
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

.p-confirm-popup-flipped:after,
.p-confirm-popup-flipped:before {
    bottom: auto;
    top: 100%;
}

.p-confirm-popup.p-confirm-popup-flipped:after {
    border-bottom-color: transparent;
}

.p-confirm-popup.p-confirm-popup-flipped:before {
    border-bottom-color: transparent;
}

.p-confirm-popup .p-confirm-popup-content {
    display: flex;
    align-items: center;
}
</style>
