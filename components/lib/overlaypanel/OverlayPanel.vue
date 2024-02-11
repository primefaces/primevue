<template>
    <Portal :appendTo="appendTo">
        <transition name="p-overlaypanel" @enter="onEnter" @leave="onLeave" @after-leave="onAfterLeave" v-bind="ptm('transition')">
            <div v-if="visible" :ref="containerRef" v-focustrap role="dialog" :aria-modal="visible" @click="onOverlayClick" :class="cx('root')" v-bind="ptmi('root')">
                <slot v-if="$slots.container" name="container" :onClose="hide" :onKeydown="(event) => onButtonKeydown(event)" :closeCallback="hide" :keydownCallback="(event) => onButtonKeydown(event)"></slot>
                <template v-else>
                    <div :class="cx('content')" @click="onContentClick" @mousedown="onContentClick" @keydown="onContentKeydown" v-bind="ptm('content')">
                        <slot></slot>
                    </div>
                    <button v-if="showCloseIcon" v-ripple :class="cx('closeButton')" :aria-label="closeAriaLabel" type="button" autofocus @click="hide" @keydown="onButtonKeydown" v-bind="ptm('closeButton')">
                        <slot name="closeicon">
                            <component :is="closeIcon ? 'span' : 'TimesIcon'" :class="[cx('closeIcon'), closeIcon]" v-bind="ptm('closeIcon')"></component>
                        </slot>
                    </button>
                </template>
            </div>
        </transition>
    </Portal>
</template>

<script>
import FocusTrap from 'primevue/focustrap';
import TimesIcon from 'primevue/icons/times';
import OverlayEventBus from 'primevue/overlayeventbus';
import Portal from 'primevue/portal';
import Ripple from 'primevue/ripple';
import { ConnectedOverlayScrollHandler, DomHandler, UniqueComponentId, ZIndexUtils } from 'primevue/utils';
import BaseOverlayPanel from './BaseOverlayPanel.vue';

export default {
    name: 'OverlayPanel',
    extends: BaseOverlayPanel,
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
            ZIndexUtils.clear(this.container);
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
            DomHandler.addStyles(el, { position: 'absolute', top: '0', left: '0' });
            this.alignOverlay();

            if (this.dismissable) {
                this.bindOutsideClickListener();
            }

            this.bindScrollListener();
            this.bindResizeListener();

            if (this.autoZIndex) {
                ZIndexUtils.set('overlay', el, this.baseZIndex + this.$primevue.config.zIndex.overlay);
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
                ZIndexUtils.clear(el);
            }
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
                this.container.setAttribute('data-p-overlaypanel-flipped', 'true');
                !this.isUnstyled && DomHandler.addClass(this.container, 'p-overlaypanel-flipped');
            }
        },
        onContentKeydown(event) {
            if (event.code === 'Escape' && this.closeOnEscape) {
                this.hide();
                DomHandler.focus(this.target);
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
            if (!this.outsideClickListener && DomHandler.isClient()) {
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
                DomHandler.setAttribute(this.styleElement, 'nonce', this.$primevue?.config?.csp?.nonce);
                document.head.appendChild(this.styleElement);

                let innerHTML = '';

                for (let breakpoint in this.breakpoints) {
                    innerHTML += `
                        @media screen and (max-width: ${breakpoint}) {
                            .p-overlaypanel[${this.attributeSelector}] {
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
        },
        closeAriaLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.close : undefined;
        }
    },
    directives: {
        focustrap: FocusTrap,
        ripple: Ripple
    },
    components: {
        Portal: Portal,
        TimesIcon
    }
};
</script>
