<template>
    <Portal :appendTo="appendTo">
        <div v-if="containerVisible" :ref="maskRef" :class="cx('mask')" :style="sx('mask', true, { position, modal })" @click="onMaskClick" v-bind="ptm('mask')">
            <transition name="p-dialog" @before-enter="onBeforeEnter" @enter="onEnter" @before-leave="onBeforeLeave" @leave="onLeave" @after-leave="onAfterLeave" appear v-bind="ptm('transition')">
                <div v-if="visible" :ref="containerRef" v-focustrap="{ disabled: !modal }" :class="cx('root')" :style="sx('root')" role="dialog" :aria-labelledby="ariaLabelledById" :aria-modal="modal" v-bind="ptmi('root')">
                    <slot v-if="$slots.container" name="container" :onClose="close" :onMaximize="(event) => maximize(event)" :closeCallback="close" :maximizeCallback="(event) => maximize(event)"></slot>
                    <template v-else>
                        <div v-if="showHeader" :ref="headerContainerRef" :class="cx('header')" @mousedown="initDrag" v-bind="ptm('header')">
                            <slot name="header" :class="cx('title')">
                                <span v-if="header" :id="ariaLabelledById" :class="cx('title')" v-bind="ptm('title')">{{ header }}</span>
                            </slot>
                            <div :class="cx('icons')" v-bind="ptm('icons')">
                                <button
                                    v-if="maximizable"
                                    :ref="maximizableRef"
                                    v-ripple
                                    :autofocus="focusableMax"
                                    :class="cx('maximizableButton')"
                                    @click="maximize"
                                    type="button"
                                    :tabindex="maximizable ? '0' : '-1'"
                                    v-bind="ptm('maximizableButton')"
                                    data-pc-group-section="headericon"
                                >
                                    <slot name="maximizeicon" :maximized="maximized" :class="cx('maximizableIcon')">
                                        <component :is="maximizeIconComponent" :class="[cx('maximizableIcon'), maximized ? minimizeIcon : maximizeIcon]" v-bind="ptm('maximizableIcon')" />
                                    </slot>
                                </button>
                                <button
                                    v-if="closable"
                                    :ref="closeButtonRef"
                                    v-ripple
                                    :autofocus="focusableClose"
                                    :class="cx('closeButton')"
                                    @click="close"
                                    :aria-label="closeAriaLabel"
                                    type="button"
                                    v-bind="{ ...closeButtonProps, ...ptm('closeButton') }"
                                    data-pc-group-section="headericon"
                                >
                                    <slot name="closeicon" :class="cx('closeButtonIcon')">
                                        <component :is="closeIcon ? 'span' : 'TimesIcon'" :class="[cx('closeButtonIcon'), closeIcon]" v-bind="ptm('closeButtonIcon')"></component>
                                    </slot>
                                </button>
                            </div>
                        </div>
                        <div :ref="contentRef" :class="[cx('content'), contentClass]" :style="contentStyle" v-bind="{ ...contentProps, ...ptm('content') }">
                            <slot></slot>
                        </div>
                        <div v-if="footer || $slots.footer" :ref="footerContainerRef" :class="cx('footer')" v-bind="ptm('footer')">
                            <slot name="footer">{{ footer }}</slot>
                        </div>
                    </template>
                </div>
            </transition>
        </div>
    </Portal>
</template>

<script>
import FocusTrap from 'primevue/focustrap';
import TimesIcon from 'primevue/icons/times';
import WindowMaximizeIcon from 'primevue/icons/windowmaximize';
import WindowMinimizeIcon from 'primevue/icons/windowminimize';
import Portal from 'primevue/portal';
import Ripple from 'primevue/ripple';
import { DomHandler, UniqueComponentId, ZIndexUtils } from 'primevue/utils';
import { computed } from 'vue';
import BaseDialog from './BaseDialog.vue';

export default {
    name: 'Dialog',
    extends: BaseDialog,
    inheritAttrs: false,
    emits: ['update:visible', 'show', 'hide', 'after-hide', 'maximize', 'unmaximize', 'dragend'],
    provide() {
        return {
            dialogRef: computed(() => this._instance)
        };
    },
    data() {
        return {
            id: this.$attrs.id,
            containerVisible: this.visible,
            maximized: false,
            focusableMax: null,
            focusableClose: null
        };
    },
    watch: {
        '$attrs.id': function (newValue) {
            this.id = newValue || UniqueComponentId();
        }
    },
    documentKeydownListener: null,
    container: null,
    mask: null,
    content: null,
    headerContainer: null,
    footerContainer: null,
    maximizableButton: null,
    closeButton: null,
    styleElement: null,
    dragging: null,
    documentDragListener: null,
    documentDragEndListener: null,
    lastPageX: null,
    lastPageY: null,
    updated() {
        if (this.visible) {
            this.containerVisible = this.visible;
        }
    },
    beforeUnmount() {
        this.unbindDocumentState();
        this.unbindGlobalListeners();
        this.destroyStyle();

        if (this.mask && this.autoZIndex) {
            ZIndexUtils.clear(this.mask);
        }

        this.container = null;
        this.mask = null;
    },
    mounted() {
        this.id = this.id || UniqueComponentId();

        if (this.breakpoints) {
            this.createStyle();
        }
    },
    methods: {
        close() {
            this.$emit('update:visible', false);
        },
        onBeforeEnter(el) {
            el.setAttribute(this.attributeSelector, '');
        },
        onEnter() {
            this.$emit('show');
            this.focus();
            this.enableDocumentSettings();
            this.bindGlobalListeners();

            if (this.autoZIndex) {
                ZIndexUtils.set('modal', this.mask, this.baseZIndex + this.$primevue.config.zIndex.modal);
            }
        },
        onBeforeLeave() {
            if (this.modal) {
                !this.isUnstyled && DomHandler.addClass(this.mask, 'p-component-overlay-leave');
            }
        },
        onLeave() {
            this.$emit('hide');
            this.focusableClose = null;
            this.focusableMax = null;
        },
        onAfterLeave() {
            if (this.autoZIndex) {
                ZIndexUtils.clear(this.mask);
            }

            this.containerVisible = false;
            this.unbindDocumentState();
            this.unbindGlobalListeners();
            this.$emit('after-hide');
        },
        onMaskClick(event) {
            if (this.dismissableMask && this.modal && this.mask === event.target) {
                this.close();
            }
        },
        focus() {
            const findFocusableElement = (container) => {
                return container && container.querySelector('[autofocus]');
            };

            let focusTarget = this.$slots.footer && findFocusableElement(this.footerContainer);

            if (!focusTarget) {
                focusTarget = this.$slots.header && findFocusableElement(this.headerContainer);

                if (!focusTarget) {
                    focusTarget = this.$slots.default && findFocusableElement(this.content);

                    if (!focusTarget) {
                        if (this.maximizable) {
                            this.focusableMax = true;
                            focusTarget = this.maximizableButton;
                        } else {
                            this.focusableClose = true;
                            focusTarget = this.closeButton;
                        }
                    }
                }
            }

            if (focusTarget) {
                DomHandler.focus(focusTarget, { focusVisible: true });
            }
        },
        maximize(event) {
            if (this.maximized) {
                this.maximized = false;
                this.$emit('unmaximize', event);
            } else {
                this.maximized = true;
                this.$emit('maximize', event);
            }

            if (!this.modal) {
                this.maximized ? DomHandler.blockBodyScroll() : DomHandler.unblockBodyScroll();
            }
        },
        enableDocumentSettings() {
            if (this.modal || (!this.modal && this.blockScroll) || (this.maximizable && this.maximized)) {
                DomHandler.blockBodyScroll();
            }
        },
        unbindDocumentState() {
            if (this.modal || (!this.modal && this.blockScroll) || (this.maximizable && this.maximized)) {
                DomHandler.unblockBodyScroll();
            }
        },
        onKeyDown(event) {
            if (event.code === 'Escape' && this.closeOnEscape) {
                this.close();
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
        containerRef(el) {
            this.container = el;
        },
        maskRef(el) {
            this.mask = el;
        },
        contentRef(el) {
            this.content = el;
        },
        headerContainerRef(el) {
            this.headerContainer = el;
        },
        footerContainerRef(el) {
            this.footerContainer = el;
        },
        maximizableRef(el) {
            this.maximizableButton = el;
        },
        closeButtonRef(el) {
            this.closeButton = el;
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
                            .p-dialog[${this.attributeSelector}] {
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
        initDrag(event) {
            if (event.target.closest('div').getAttribute('data-pc-section') === 'icons') {
                return;
            }

            if (this.draggable) {
                this.dragging = true;
                this.lastPageX = event.pageX;
                this.lastPageY = event.pageY;

                this.container.style.margin = '0';
                document.body.setAttribute('data-p-unselectable-text', 'true');
                !this.isUnstyled && DomHandler.addClass(document.body, 'p-unselectable-text');
            }
        },
        bindGlobalListeners() {
            if (this.draggable) {
                this.bindDocumentDragListener();
                this.bindDocumentDragEndListener();
            }

            if (this.closeOnEscape && this.closable) {
                this.bindDocumentKeyDownListener();
            }
        },
        unbindGlobalListeners() {
            this.unbindDocumentDragListener();
            this.unbindDocumentDragEndListener();
            this.unbindDocumentKeyDownListener();
        },
        bindDocumentDragListener() {
            this.documentDragListener = (event) => {
                if (this.dragging) {
                    let width = DomHandler.getOuterWidth(this.container);
                    let height = DomHandler.getOuterHeight(this.container);
                    let deltaX = event.pageX - this.lastPageX;
                    let deltaY = event.pageY - this.lastPageY;
                    let offset = this.container.getBoundingClientRect();
                    let leftPos = offset.left + deltaX;
                    let topPos = offset.top + deltaY;
                    let viewport = DomHandler.getViewport();
                    let containerComputedStyle = getComputedStyle(this.container);
                    let marginLeft = parseFloat(containerComputedStyle.marginLeft);
                    let marginTop = parseFloat(containerComputedStyle.marginTop);

                    this.container.style.position = 'fixed';

                    if (this.keepInViewport) {
                        if (leftPos >= this.minX && leftPos + width < viewport.width) {
                            this.lastPageX = event.pageX;
                            this.container.style.left = leftPos - marginLeft + 'px';
                        }

                        if (topPos >= this.minY && topPos + height < viewport.height) {
                            this.lastPageY = event.pageY;
                            this.container.style.top = topPos - marginTop + 'px';
                        }
                    } else {
                        this.lastPageX = event.pageX;
                        this.container.style.left = leftPos - marginLeft + 'px';
                        this.lastPageY = event.pageY;
                        this.container.style.top = topPos - marginTop + 'px';
                    }
                }
            };

            window.document.addEventListener('mousemove', this.documentDragListener);
        },
        unbindDocumentDragListener() {
            if (this.documentDragListener) {
                window.document.removeEventListener('mousemove', this.documentDragListener);
                this.documentDragListener = null;
            }
        },
        bindDocumentDragEndListener() {
            this.documentDragEndListener = (event) => {
                if (this.dragging) {
                    this.dragging = false;
                    document.body.removeAttribute('data-p-unselectable-text');
                    !this.isUnstyled && DomHandler.removeClass(document.body, 'p-unselectable-text');

                    this.$emit('dragend', event);
                }
            };

            window.document.addEventListener('mouseup', this.documentDragEndListener);
        },
        unbindDocumentDragEndListener() {
            if (this.documentDragEndListener) {
                window.document.removeEventListener('mouseup', this.documentDragEndListener);
                this.documentDragEndListener = null;
            }
        }
    },
    computed: {
        maximizeIconComponent() {
            return this.maximized ? (this.minimizeIcon ? 'span' : 'WindowMinimizeIcon') : this.maximizeIcon ? 'span' : 'WindowMaximizeIcon';
        },
        ariaLabelledById() {
            return this.header != null || this.$attrs['aria-labelledby'] !== null ? this.id + '_header' : null;
        },
        closeAriaLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.close : undefined;
        },
        attributeSelector() {
            return UniqueComponentId();
        }
    },
    directives: {
        ripple: Ripple,
        focustrap: FocusTrap
    },
    components: {
        Portal: Portal,
        WindowMinimizeIcon,
        WindowMaximizeIcon,
        TimesIcon
    }
};
</script>
