<template>
    <Portal>
        <div v-if="containerVisible" :ref="maskRef" @mousedown="onMaskClick" :class="cx('mask')" :style="sx('mask', true, { position })" v-bind="ptm('mask')">
            <transition name="p-drawer" @enter="onEnter" @after-enter="onAfterEnter" @before-leave="onBeforeLeave" @leave="onLeave" @after-leave="onAfterLeave" appear v-bind="ptm('transition')">
                <div v-if="visible" :ref="containerRef" v-focustrap :class="cx('root')" role="complementary" :aria-modal="modal" v-bind="ptmi('root')">
                    <slot v-if="$slots.container" name="container" :closeCallback="hide"></slot>
                    <template v-else>
                        <div :ref="headerContainerRef" :class="cx('header')" v-bind="ptm('header')">
                            <slot name="header" :class="cx('title')">
                                <div v-if="header" :class="cx('title')" v-bind="ptm('title')">{{ header }}</div>
                            </slot>
                            <Button
                                v-if="showCloseIcon"
                                :ref="closeButtonRef"
                                type="button"
                                :class="cx('pcCloseButton')"
                                :aria-label="closeAriaLabel"
                                :unstyled="unstyled"
                                @click="hide"
                                v-bind="closeButtonProps"
                                :pt="ptm('pcCloseButton')"
                                data-pc-group-section="iconcontainer"
                            >
                                <template #icon="slotProps">
                                    <slot name="closeicon">
                                        <component :is="closeIcon ? 'span' : 'TimesIcon'" :class="[closeIcon, slotProps.class]" v-bind="ptm('pcCloseButton')['icon']"></component>
                                    </slot>
                                </template>
                            </Button>
                        </div>
                        <div :ref="contentRef" :class="cx('content')" v-bind="ptm('content')">
                            <slot></slot>
                        </div>
                        <div v-if="$slots.footer" :ref="footerContainerRef" :class="cx('footer')" v-bind="ptm('footer')">
                            <slot name="footer"> </slot>
                        </div>
                    </template>
                </div>
            </transition>
        </div>
    </Portal>
</template>

<script>
import { addClass, blockBodyScroll, focus, unblockBodyScroll } from '@primeuix/utils/dom';
import { ZIndex } from '@primeuix/utils/zindex';
import TimesIcon from '@primevue/icons/times';
import Button from 'primevue/button';
import FocusTrap from 'primevue/focustrap';
import Portal from 'primevue/portal';
import BaseDrawer from './BaseDrawer.vue';

export default {
    name: 'Drawer',
    extends: BaseDrawer,
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
    footerContainer: null,
    closeButton: null,
    outsideClickListener: null,
    documentKeydownListener: null,
    updated() {
        if (this.visible) {
            this.containerVisible = this.visible;
        }
    },
    beforeUnmount() {
        this.disableDocumentSettings();

        if (this.mask && this.autoZIndex) {
            ZIndex.clear(this.mask);
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
            this.bindDocumentKeyDownListener();

            if (this.autoZIndex) {
                ZIndex.set('modal', this.mask, this.baseZIndex || this.$primevue.config.zIndex.modal);
            }
        },
        onAfterEnter() {
            this.enableDocumentSettings();
        },
        onBeforeLeave() {
            if (this.modal) {
                !this.isUnstyled && addClass(this.mask, 'p-overlay-mask-leave');
            }
        },
        onLeave() {
            this.$emit('hide');
        },
        onAfterLeave() {
            if (this.autoZIndex) {
                ZIndex.clear(this.mask);
            }

            this.unbindDocumentKeyDownListener();
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
                return container && container.querySelector('[autofocus]');
            };

            let focusTarget = this.$slots.header && findFocusableElement(this.headerContainer);

            if (!focusTarget) {
                focusTarget = this.$slots.default && findFocusableElement(this.container);

                if (!focusTarget) {
                    focusTarget = this.$slots.footer && findFocusableElement(this.footerContainer);

                    if (!focusTarget) {
                        focusTarget = this.closeButton;
                    }
                }
            }

            focusTarget && focus(focusTarget);
        },
        enableDocumentSettings() {
            if (this.dismissable && !this.modal) {
                this.bindOutsideClickListener();
            }

            if (this.blockScroll) {
                blockBodyScroll();
            }
        },
        disableDocumentSettings() {
            this.unbindOutsideClickListener();

            if (this.blockScroll) {
                unblockBodyScroll();
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
        footerContainerRef(el) {
            this.footerContainer = el;
        },
        closeButtonRef(el) {
            this.closeButton = el ? el.$el : undefined;
        },
        bindDocumentKeyDownListener() {
            if (!this.documentKeydownListener) {
                this.documentKeydownListener = this.onKeydown;
                document.addEventListener('keydown', this.documentKeydownListener);
            }
        },
        unbindDocumentKeyDownListener() {
            if (this.documentKeydownListener) {
                document.removeEventListener('keydown', this.documentKeydownListener);
                this.documentKeydownListener = null;
            }
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
        focustrap: FocusTrap
    },
    components: {
        Button,
        Portal,
        TimesIcon
    }
};
</script>
