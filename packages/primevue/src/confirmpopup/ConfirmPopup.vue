<template>
    <Portal>
        <transition name="p-anchored-overlay" @enter="onEnter" @after-enter="onAfterEnter" @leave="onLeave" @after-leave="onAfterLeave" v-bind="ptm('transition')">
            <div v-if="visible" :ref="containerRef" v-focustrap role="alertdialog" :class="cx('root')" :aria-modal="visible" @click="onOverlayClick" @keydown="onOverlayKeydown" v-bind="ptmi('root')">
                <slot v-if="$slots.container" name="container" :message="confirmation" :acceptCallback="accept" :rejectCallback="reject"></slot>
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
                        <Button
                            :class="[cx('pcRejectButton'), confirmation.rejectClass]"
                            :autofocus="autoFocusReject"
                            :unstyled="unstyled"
                            :size="confirmation.rejectProps?.size || 'small'"
                            :text="confirmation.rejectProps?.text || false"
                            @click="reject()"
                            @keydown="onRejectKeydown"
                            v-bind="confirmation.rejectProps"
                            :label="rejectLabel"
                            :pt="ptm('pcRejectButton')"
                        >
                            <template v-if="rejectIcon || $slots.rejecticon" #icon="iconProps">
                                <slot name="rejecticon">
                                    <span :class="[rejectIcon, iconProps.class]" v-bind="ptm('pcRejectButton')['icon']" data-pc-section="rejectbuttonicon" />
                                </slot>
                            </template>
                        </Button>
                        <Button
                            :class="[cx('pcAcceptButton'), confirmation.acceptClass]"
                            :autofocus="autoFocusAccept"
                            :unstyled="unstyled"
                            :size="confirmation.acceptProps?.size || 'small'"
                            @click="accept()"
                            @keydown="onAcceptKeydown"
                            v-bind="confirmation.acceptProps"
                            :label="acceptLabel"
                            :pt="ptm('pcAcceptButton')"
                        >
                            <template v-if="acceptIcon || $slots.accepticon" #icon="iconProps">
                                <slot name="accepticon">
                                    <span :class="[acceptIcon, iconProps.class]" v-bind="ptm('pcAcceptButton')['icon']" data-pc-section="acceptbuttonicon" />
                                </slot>
                            </template>
                        </Button>
                    </div>
                </template>
            </div>
        </transition>
    </Portal>
</template>

<script>
import { $dt } from '@primeuix/styled';
import { absolutePosition, addClass, focus, getOffset, isTouchDevice } from '@primeuix/utils/dom';
import { ZIndex } from '@primeuix/utils/zindex';
import { ConnectedOverlayScrollHandler } from '@primevue/core/utils';
import Button from 'primevue/button';
import ConfirmationEventBus from 'primevue/confirmationeventbus';
import FocusTrap from 'primevue/focustrap';
import OverlayEventBus from 'primevue/overlayeventbus';
import Portal from 'primevue/portal';
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
            autoFocusReject: null,
            target: null
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
            ZIndex.clear(this.container);
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
                focus(this.target);
                event.preventDefault();
            }
        },
        onRejectKeydown(event) {
            if (event.code === 'Space' || event.code === 'Enter' || event.code === 'NumpadEnter') {
                this.reject();
                focus(this.target);
                event.preventDefault();
            }
        },
        onEnter(el) {
            this.autoFocusAccept = this.confirmation.defaultFocus === undefined || this.confirmation.defaultFocus === 'accept' ? true : false;
            this.autoFocusReject = this.confirmation.defaultFocus === 'reject' ? true : false;

            this.target = this.target || document.activeElement;

            this.bindOutsideClickListener();
            this.bindScrollListener();
            this.bindResizeListener();

            ZIndex.set('overlay', el, this.$primevue.config.zIndex.overlay);
        },
        onAfterEnter() {
            this.focus();
        },
        onLeave() {
            this.autoFocusAccept = null;
            this.autoFocusReject = null;

            focus(this.target);
            this.target = null;

            this.unbindOutsideClickListener();
            this.unbindScrollListener();
            this.unbindResizeListener();
        },
        onAfterLeave(el) {
            ZIndex.clear(el);
        },
        alignOverlay() {
            absolutePosition(this.container, this.target, false);

            const containerOffset = getOffset(this.container);
            const targetOffset = getOffset(this.target);
            let arrowLeft = 0;

            if (containerOffset.left < targetOffset.left) {
                arrowLeft = targetOffset.left - containerOffset.left;
            }

            this.container.style.setProperty($dt('confirmpopup.arrow.left').name, `${arrowLeft}px`);

            if (containerOffset.top < targetOffset.top) {
                this.container.setAttribute('data-p-confirmpopup-flipped', 'true');
                !this.isUnstyled && addClass(this.container, 'p-confirmpopup-flipped');
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
                    if (this.visible && !isTouchDevice()) {
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
                focus(this.target);
            }
        }
    },
    computed: {
        message() {
            return this.confirmation ? this.confirmation.message : null;
        },
        acceptLabel() {
            if (this.confirmation) {
                const confirmation = this.confirmation;

                return confirmation.acceptLabel || confirmation.acceptProps?.label || this.$primevue.config.locale.accept;
            }

            return this.$primevue.config.locale.accept;
        },
        rejectLabel() {
            if (this.confirmation) {
                const confirmation = this.confirmation;

                return confirmation.rejectLabel || confirmation.rejectProps?.label || this.$primevue.config.locale.reject;
            }

            return this.$primevue.config.locale.reject;
        },
        acceptIcon() {
            return this.confirmation ? this.confirmation.acceptIcon : this.confirmation?.acceptProps ? this.confirmation.acceptProps.icon : null;
        },
        rejectIcon() {
            return this.confirmation ? this.confirmation.rejectIcon : this.confirmation?.rejectProps ? this.confirmation.rejectProps.icon : null;
        }
    },
    components: {
        Button,
        Portal
    },
    directives: {
        focustrap: FocusTrap
    }
};
</script>
