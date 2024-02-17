<template>
    <Portal>
        <transition name="p-confirm-popup" @enter="onEnter" @after-enter="onAfterEnter" @leave="onLeave" @after-leave="onAfterLeave" v-bind="ptm('transition')">
            <div v-if="visible" :ref="containerRef" v-focustrap role="alertdialog" :class="cx('root')" :aria-modal="visible" @click="onOverlayClick" @keydown="onOverlayKeydown" v-bind="ptmi('root')">
                <slot v-if="$slots.container" name="container" :message="confirmation" :onAccept="accept" :onReject="reject" :acceptCallback="accept" :rejectCallback="reject"></slot>
                <template v-else>
                    <template v-if="!$slots.message">
                        <div :class="cx('content')" v-bind="ptm('content')">
                            <slot name="icon">
                                <component v-if="$slots.icon" :is="$slots.icon" :class="cx('icon')" />
                                <span v-else-if="confirmation.icon" :class="[confirmation.icon, cx('icon')]" v-bind="ptm('icon')" />
                            </slot>
                            <span :class="cx('message')" v-bind="ptm('message')">{{ confirmation.message }}</span>
                        </div>
                    </template>
                    <component v-else :is="$slots.message" :message="confirmation"></component>
                    <div :class="cx('footer')" v-bind="ptm('footer')">
                        <CPButton :label="rejectLabel" @click="reject()" @keydown="onRejectKeydown" :autofocus="autoFocusReject" :class="[cx('rejectButton'), confirmation.rejectClass]" :unstyled="unstyled" :pt="ptm('rejectButton')">
                            <template v-if="rejectIcon || $slots.rejecticon" #icon="iconProps">
                                <slot name="rejecticon">
                                    <span :class="[rejectIcon, iconProps.class]" v-bind="ptm('rejectButton')['icon']" data-pc-section="rejectbuttonicon" />
                                </slot>
                            </template>
                        </CPButton>
                        <CPButton :label="acceptLabel" @click="accept()" @keydown="onAcceptKeydown" :autofocus="autoFocusAccept" :class="[cx('acceptButton'), confirmation.acceptClass]" :unstyled="unstyled" :pt="ptm('acceptButton')">
                            <template v-if="acceptIcon || $slots.accepticon" #icon="iconProps">
                                <slot name="accepticon">
                                    <span :class="[acceptIcon, iconProps.class]" v-bind="ptm('acceptButton')['icon']" data-pc-section="acceptbuttonicon" />
                                </slot>
                            </template>
                        </CPButton>
                    </div>
                </template>
            </div>
        </transition>
    </Portal>
</template>

<script>
import Button from 'primevue/button';
import ConfirmationEventBus from 'primevue/confirmationeventbus';
import FocusTrap from 'primevue/focustrap';
import OverlayEventBus from 'primevue/overlayeventbus';
import Portal from 'primevue/portal';
import { ConnectedOverlayScrollHandler, DomHandler, ZIndexUtils } from 'primevue/utils';
import BaseConfirmPopup from './BaseConfirmPopup.vue';

export default {
    name: 'ConfirmPopup',
    extends: BaseConfirmPopup,
    inheritAttrs: false,
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
            if (event.code === 'Space' || event.code === 'Enter' || event.code === 'NumpadEnter') {
                this.accept();
                DomHandler.focus(this.target);
                event.preventDefault();
            }
        },
        onRejectKeydown(event) {
            if (event.code === 'Space' || event.code === 'Enter' || event.code === 'NumpadEnter') {
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
            DomHandler.absolutePosition(this.container, this.target, false);

            const containerOffset = DomHandler.getOffset(this.container);
            const targetOffset = DomHandler.getOffset(this.target);
            let arrowLeft = 0;

            if (containerOffset.left < targetOffset.left) {
                arrowLeft = targetOffset.left - containerOffset.left;
            }

            this.container.style.setProperty('--overlayArrowLeft', `${arrowLeft}px`);

            if (containerOffset.top < targetOffset.top) {
                this.container.setAttribute('data-p-confirm-popup-flipped', 'true');
                !this.isUnstyled && DomHandler.addClass(this.container, 'p-confirm-popup-flipped');
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
        },
        getCXOptions(icon, iconProps) {
            return { contenxt: { icon, iconClass: iconProps.class } };
        }
    },
    computed: {
        message() {
            return this.confirmation ? this.confirmation.message : null;
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
