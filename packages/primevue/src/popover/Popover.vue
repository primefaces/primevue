<template>
    <Portal :appendTo="appendTo">
        <transition name="p-popover" @enter="onEnter" @leave="onLeave" @after-leave="onAfterLeave" v-bind="ptm('transition')">
            <div v-if="visible" :ref="containerRef" v-focustrap role="dialog" :aria-modal="visible" @click="onOverlayClick" :class="cx('root')" v-bind="ptmi('root')">
                <slot v-if="$slots.container" name="container" :closeCallback="hide" :keydownCallback="(event) => onButtonKeydown(event)"></slot>
                <template v-else>
                    <div :class="cx('content')" @click="onContentClick" @mousedown="onContentClick" @keydown="onContentKeydown" v-bind="ptm('content')">
                        <slot></slot>
                    </div>
                </template>
            </div>
        </transition>
    </Portal>
</template>

<script>
import { ConnectedOverlayScrollHandler, UniqueComponentId } from '@primevue/core/utils';
import { addStyle, absolutePosition, getOffset, addClass, focus, isClient, isTouchDevice, setAttribute } from '@primeuix/utils/dom';
import { ZIndex } from '@primeuix/utils/zindex';
import { $dt } from '@primeuix/styled';
import FocusTrap from 'primevue/focustrap';
import OverlayEventBus from 'primevue/overlayeventbus';
import Portal from 'primevue/portal';
import Ripple from 'primevue/ripple';
import BasePopover from './BasePopover.vue';

export default {
    name: 'Popover',
    extends: BasePopover,
    inheritAttrs: false,
    emits: ['show', 'hide'],
    data() {
        return {
            visible: false
        };
    },
    watch: {
        dismissable: {
            immediate: true,
            handler(newValue) {
                if (newValue) {
                    this.bindOutsideClickListener();
                } else {
                    this.unbindOutsideClickListener();
                }
            }
        }
    },
    selfClick: false,
    target: null,
    eventTarget: null,
    outsideClickListener: null,
    scrollHandler: null,
    resizeListener: null,
    container: null,
    styleElement: null,
    overlayEventListener: null,
    documentKeydownListener: null,
    beforeUnmount() {
        if (this.dismissable) {
            this.unbindOutsideClickListener();
        }

        if (this.scrollHandler) {
            this.scrollHandler.destroy();
            this.scrollHandler = null;
        }

        this.destroyStyle();
        this.unbindResizeListener();
        this.target = null;

        if (this.container && this.autoZIndex) {
            ZIndex.clear(this.container);
        }

        if (this.overlayEventListener) {
            OverlayEventBus.off('overlay-click', this.overlayEventListener);
            this.overlayEventListener = null;
        }

        this.container = null;
    },
    mounted() {
        if (this.breakpoints) {
            this.createStyle();
        }
    },
    methods: {
        toggle(event, target) {
            if (this.visible) this.hide();
            else this.show(event, target);
        },
        show(event, target) {
            this.visible = true;
            this.eventTarget = event.currentTarget;
            this.target = target || event.currentTarget;
        },
        hide() {
            this.visible = false;
        },
        onContentClick() {
            this.selfClick = true;
        },
        onEnter(el) {
            this.container.setAttribute(this.attributeSelector, '');
            addStyle(el, { position: 'absolute', top: '0', left: '0' });
            this.alignOverlay();

            if (this.dismissable) {
                this.bindOutsideClickListener();
            }

            this.bindScrollListener();
            this.bindResizeListener();

            if (this.autoZIndex) {
                ZIndex.set('overlay', el, this.baseZIndex + this.$primevue.config.zIndex.overlay);
            }

            this.overlayEventListener = (e) => {
                if (this.container.contains(e.target)) {
                    this.selfClick = true;
                }
            };

            this.focus();
            OverlayEventBus.on('overlay-click', this.overlayEventListener);
            this.$emit('show');

            if (this.closeOnEscape) {
                this.bindDocumentKeyDownListener();
            }
        },
        onLeave() {
            this.unbindOutsideClickListener();
            this.unbindScrollListener();
            this.unbindResizeListener();
            this.unbindDocumentKeyDownListener();
            OverlayEventBus.off('overlay-click', this.overlayEventListener);
            this.overlayEventListener = null;
            this.$emit('hide');
        },
        onAfterLeave(el) {
            if (this.autoZIndex) {
                ZIndex.clear(el);
            }
        },
        alignOverlay() {
            absolutePosition(this.container, this.target, false);

            const containerOffset = getOffset(this.container);
            const targetOffset = getOffset(this.target);
            let arrowLeft = 0;

            if (containerOffset.left < targetOffset.left) {
                arrowLeft = targetOffset.left - containerOffset.left;
            }

            this.container.style.setProperty($dt('popover.arrow.left').name, `${arrowLeft}px`);

            if (containerOffset.top < targetOffset.top) {
                this.container.setAttribute('data-p-popover-flipped', 'true');
                !this.isUnstyled && addClass(this.container, 'p-popover-flipped');
            }
        },
        onContentKeydown(event) {
            if (event.code === 'Escape' && this.closeOnEscape) {
                this.hide();
                focus(this.target);
            }
        },
        onButtonKeydown(event) {
            switch (event.code) {
                case 'ArrowDown':
                case 'ArrowUp':
                case 'ArrowLeft':
                case 'ArrowRight':
                    event.preventDefault();

                default:
                    break;
            }
        },
        focus() {
            let focusTarget = this.container.querySelector('[autofocus]');

            if (focusTarget) {
                focusTarget.focus();
            }
        },
        onKeyDown(event) {
            if (event.code === 'Escape' && this.closeOnEscape) {
                this.visible = false;
            }
        },
        bindDocumentKeyDownListener() {
            if (!this.documentKeydownListener) {
                this.documentKeydownListener = this.onKeyDown.bind(this);
                window.document.addEventListener('keydown', this.documentKeydownListener);
            }
        },
        unbindDocumentKeyDownListener() {
            if (this.documentKeydownListener) {
                window.document.removeEventListener('keydown', this.documentKeydownListener);
                this.documentKeydownListener = null;
            }
        },
        bindOutsideClickListener() {
            if (!this.outsideClickListener && isClient()) {
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
                this.selfClick = false;
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
        isTargetClicked(event) {
            return this.eventTarget && (this.eventTarget === event.target || this.eventTarget.contains(event.target));
        },
        containerRef(el) {
            this.container = el;
        },
        createStyle() {
            if (!this.styleElement && !this.isUnstyled) {
                this.styleElement = document.createElement('style');
                this.styleElement.type = 'text/css';
                setAttribute(this.styleElement, 'nonce', this.$primevue?.config?.csp?.nonce);
                document.head.appendChild(this.styleElement);

                let innerHTML = '';

                for (let breakpoint in this.breakpoints) {
                    innerHTML += `
                        @media screen and (max-width: ${breakpoint}) {
                            .p-popover[${this.attributeSelector}] {
                                width: ${this.breakpoints[breakpoint]} !important;
                            }
                        }
                    `;
                }

                this.styleElement.innerHTML = innerHTML;
            }
        },
        destroyStyle() {
            if (this.styleElement) {
                document.head.removeChild(this.styleElement);
                this.styleElement = null;
            }
        },
        onOverlayClick(event) {
            OverlayEventBus.emit('overlay-click', {
                originalEvent: event,
                target: this.target
            });
        }
    },
    computed: {
        attributeSelector() {
            return UniqueComponentId();
        }
    },
    directives: {
        focustrap: FocusTrap,
        ripple: Ripple
    },
    components: {
        Portal
    }
};
</script>
