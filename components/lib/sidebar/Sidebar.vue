<template>
    <Portal>
        <div v-if="containerVisible" :ref="maskRef" @mousedown="onMaskClick" :class="cx('mask')" :style="sx('mask', true, { position })" v-bind="ptm('mask')">
            <transition name="p-sidebar" @enter="onEnter" @after-enter="onAfterEnter" @before-leave="onBeforeLeave" @leave="onLeave" @after-leave="onAfterLeave" appear>
                <div v-if="visible" :ref="containerRef" v-focustrap :class="cx('root')" role="complementary" :aria-modal="modal" @keydown="onKeydown" v-bind="{ ...$attrs, ...ptm('root') }">
                    <div :ref="headerContainerRef" :class="cx('header')" v-bind="ptm('header')">
                        <div v-if="$slots.header" :class="cx('headerContent')" v-bind="ptm('headerContent')">
                            <slot name="header"></slot>
                        </div>
                        <button v-if="showCloseIcon" :ref="closeButtonRef" v-ripple autofocus type="button" :class="cx('closeButton')" :aria-label="closeAriaLabel" @click="hide" v-bind="ptm('closeButton')" data-pc-group-section="iconcontainer">
                            <slot name="closeicon">
                                <component :is="closeIcon ? 'span' : 'TimesIcon'" :class="[cx('closeIcon'), closeIcon]" v-bind="ptm('closeIcon')"></component>
                            </slot>
                        </button>
                    </div>
                    <div :ref="contentRef" :class="cx('content')" v-bind="ptm('content')">
                        <slot></slot>
                    </div>
                </div>
            </transition>
        </div>
    </Portal>
</template>

<script>
import FocusTrap from 'primevue/focustrap';
import TimesIcon from 'primevue/icons/times';
import Portal from 'primevue/portal';
import Ripple from 'primevue/ripple';
import { DomHandler, ZIndexUtils } from 'primevue/utils';
import BaseSidebar from './BaseSidebar.vue';

export default {
    name: 'Sidebar',
    extends: BaseSidebar,
    inheritAttrs: false,
    emits: ['update:visible', 'show', 'hide', 'after-hide'],
    data() {
        return {
            containerVisible: this.visible
        };
    },
    container: null,
    mask: null,
    content: null,
    headerContainer: null,
    closeButton: null,
    outsideClickListener: null,
    updated() {
        if (this.visible) {
            this.containerVisible = this.visible;
        }
    },
    beforeUnmount() {
        this.disableDocumentSettings();

        if (this.mask && this.autoZIndex) {
            ZIndexUtils.clear(this.mask);
        }

        this.container = null;
        this.mask = null;
    },
    methods: {
        hide() {
            this.$emit('update:visible', false);
        },
        onEnter() {
            this.$emit('show');
            this.focus();

            if (this.autoZIndex) {
                ZIndexUtils.set('modal', this.mask, this.baseZIndex || this.$primevue.config.zIndex.modal);
            }
        },
        onAfterEnter() {
            this.enableDocumentSettings();
        },
        onBeforeLeave() {
            if (this.modal) {
                !this.isUnstyled && DomHandler.addClass(this.mask, 'p-component-overlay-leave');
            }
        },
        onLeave() {
            this.$emit('hide');
        },
        onAfterLeave() {
            if (this.autoZIndex) {
                ZIndexUtils.clear(this.mask);
            }

            this.containerVisible = false;
            this.disableDocumentSettings();
            this.$emit('after-hide');
        },
        onMaskClick(event) {
            if (this.dismissable && this.modal && this.mask === event.target) {
                this.hide();
            }
        },
        focus() {
            const findFocusableElement = (container) => {
                return container.querySelector('[autofocus]');
            };

            let focusTarget = this.$slots.default && findFocusableElement(this.content);

            if (!focusTarget) {
                focusTarget = this.$slots.header && findFocusableElement(this.headerContainer);

                if (!focusTarget) {
                    focusTarget = findFocusableElement(this.container);
                }
            }

            focusTarget && focusTarget.focus();
        },
        enableDocumentSettings() {
            if (this.dismissable && !this.modal) {
                this.bindOutsideClickListener();
            }

            if (this.blockScroll) {
                DomHandler.addClass(document.body, 'p-overflow-hidden');
            }
        },
        disableDocumentSettings() {
            this.unbindOutsideClickListener();

            if (this.blockScroll) {
                DomHandler.removeClass(document.body, 'p-overflow-hidden');
            }
        },
        onKeydown(event) {
            if (event.code === 'Escape') {
                this.hide();
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
        closeButtonRef(el) {
            this.closeButton = el;
        },
        bindOutsideClickListener() {
            if (!this.outsideClickListener) {
                this.outsideClickListener = (event) => {
                    if (this.isOutsideClicked(event)) {
                        this.hide();
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
        isOutsideClicked(event) {
            return this.container && !this.container.contains(event.target);
        }
    },
    computed: {
        fullScreen() {
            return this.position === 'full';
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
