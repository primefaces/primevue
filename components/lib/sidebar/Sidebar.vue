<template>
    <Portal>
        <div v-if="containerVisible" :ref="maskRef" :class="maskClass" @mousedown="onMaskClick" v-bind="ptm('mask')">
            <transition name="p-sidebar" @enter="onEnter" @after-enter="onAfterEnter" @before-leave="onBeforeLeave" @leave="onLeave" @after-leave="onAfterLeave" appear>
                <div v-if="visible" :ref="containerRef" v-focustrap :class="containerClass" role="complementary" :aria-modal="modal" @keydown="onKeydown" v-bind="{ ...$attrs, ...ptm('root') }">
                    <div :ref="headerContainerRef" class="p-sidebar-header" v-bind="ptm('header')">
                        <div v-if="$slots.header" class="p-sidebar-header-content" v-bind="ptm('headerContent')">
                            <slot name="header"></slot>
                        </div>
                        <button v-if="showCloseIcon" :ref="closeButtonRef" v-ripple autofocus type="button" class="p-sidebar-close p-sidebar-icon p-link" :aria-label="closeAriaLabel" @click="hide" v-bind="ptm('closeButton')">
                            <slot name="closeicon">
                                <component :is="closeIcon ? 'span' : 'TimesIcon'" :class="['p-sidebar-close-icon ', closeIcon]" v-bind="ptm('closeIcon')"></component>
                            </slot>
                        </button>
                    </div>
                    <div :ref="contentRef" class="p-sidebar-content" v-bind="ptm('content')">
                        <slot></slot>
                    </div>
                </div>
            </transition>
        </div>
    </Portal>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';
import FocusTrap from 'primevue/focustrap';
import TimesIcon from 'primevue/icons/times';
import Portal from 'primevue/portal';
import Ripple from 'primevue/ripple';
import { DomHandler, ZIndexUtils } from 'primevue/utils';

export default {
    name: 'Sidebar',
    extends: BaseComponent,
    inheritAttrs: false,
    emits: ['update:visible', 'show', 'hide', 'after-hide'],
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        position: {
            type: String,
            default: 'left'
        },
        baseZIndex: {
            type: Number,
            default: 0
        },
        autoZIndex: {
            type: Boolean,
            default: true
        },
        dismissable: {
            type: Boolean,
            default: true
        },
        showCloseIcon: {
            type: Boolean,
            default: true
        },
        closeIcon: {
            type: String,
            default: undefined
        },
        modal: {
            type: Boolean,
            default: true
        },
        blockScroll: {
            type: Boolean,
            default: false
        }
    },
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
                DomHandler.addClass(this.mask, 'p-component-overlay-leave');
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
        getPositionClass() {
            const positions = ['left', 'right', 'top', 'bottom'];
            const pos = positions.find((item) => item === this.position);

            return pos ? `p-sidebar-${pos}` : '';
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
        containerClass() {
            return [
                'p-sidebar p-component',
                {
                    'p-input-filled': this.$primevue.config.inputStyle === 'filled',
                    'p-ripple-disabled': this.$primevue.config.ripple === false,
                    'p-sidebar-full': this.fullScreen
                }
            ];
        },
        fullScreen() {
            return this.position === 'full';
        },
        closeAriaLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.close : undefined;
        },
        maskClass() {
            return [
                'p-sidebar-mask',
                this.getPositionClass(),
                {
                    'p-component-overlay p-component-overlay-enter': this.modal,
                    'p-sidebar-mask-scrollblocker': this.blockScroll,
                    'p-sidebar-visible': this.containerVisible,
                    'p-sidebar-full': this.fullScreen
                }
            ];
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

<style>
.p-sidebar-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    justify-content: center;
    align-items: center;
    pointer-events: none;
    background-color: transparent;
    transition-property: background-color;
}

.p-sidebar-mask.p-component-overlay {
    pointer-events: auto;
}

.p-sidebar-visible {
    display: flex;
}

.p-sidebar {
    display: flex;
    flex-direction: column;
    pointer-events: auto;
    transform: translate3d(0px, 0px, 0px);
    position: relative;
    transition: transform 0.3s;
}

.p-sidebar-content {
    overflow-y: auto;
    flex-grow: 1;
}

.p-sidebar-header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-shrink: 0;
}

.p-sidebar-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
}

.p-sidebar-full .p-sidebar {
    transition: none;
    transform: none;
    width: 100vw !important;
    height: 100vh !important;
    max-height: 100%;
    top: 0px !important;
    left: 0px !important;
}

/* Animation */
/* Center */
.p-sidebar-left .p-sidebar-enter-from,
.p-sidebar-left .p-sidebar-leave-to {
    transform: translateX(-100%);
}
.p-sidebar-right .p-sidebar-enter-from,
.p-sidebar-right .p-sidebar-leave-to {
    transform: translateX(100%);
}
.p-sidebar-top .p-sidebar-enter-from,
.p-sidebar-top .p-sidebar-leave-to {
    transform: translateY(-100%);
}
.p-sidebar-bottom .p-sidebar-enter-from,
.p-sidebar-bottom .p-sidebar-leave-to {
    transform: translateY(100%);
}
.p-sidebar-full .p-sidebar-enter-from,
.p-sidebar-full .p-sidebar-leave-to {
    opacity: 0;
}
.p-sidebar-full .p-sidebar-enter-active,
.p-sidebar-full .p-sidebar-leave-active {
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}

/* Position */
.p-sidebar-left {
    justify-content: flex-start;
}

.p-sidebar-right {
    justify-content: flex-end;
}

.p-sidebar-top {
    align-items: flex-start;
}

.p-sidebar-bottom {
    align-items: flex-end;
}

/* Size */
.p-sidebar-left .p-sidebar {
    width: 20rem;
    height: 100%;
}

.p-sidebar-right .p-sidebar {
    width: 20rem;
    height: 100%;
}

.p-sidebar-top .p-sidebar {
    height: 10rem;
    width: 100%;
}

.p-sidebar-bottom .p-sidebar {
    height: 10rem;
    width: 100%;
}

.p-sidebar-left .p-sidebar-sm,
.p-sidebar-right .p-sidebar-sm {
    width: 20rem;
}

.p-sidebar-left .p-sidebar-md,
.p-sidebar-right .p-sidebar-md {
    width: 40rem;
}

.p-sidebar-left .p-sidebar-lg,
.p-sidebar-right .p-sidebar-lg {
    width: 60rem;
}

.p-sidebar-top .p-sidebar-sm,
.p-sidebar-bottom .p-sidebar-sm {
    height: 10rem;
}

.p-sidebar-top .p-sidebar-md,
.p-sidebar-bottom .p-sidebar-md {
    height: 20rem;
}

.p-sidebar-top .p-sidebar-lg,
.p-sidebar-bottom .p-sidebar-lg {
    height: 30rem;
}

.p-sidebar-left .p-sidebar-content,
.p-sidebar-right .p-sidebar-content,
.p-sidebar-top .p-sidebar-content,
.p-sidebar-bottom .p-sidebar-content {
    width: 100%;
    height: 100%;
}

@media screen and (max-width: 64em) {
    .p-sidebar-left .p-sidebar-lg,
    .p-sidebar-left .p-sidebar-md,
    .p-sidebar-right .p-sidebar-lg,
    .p-sidebar-right .p-sidebar-md {
        width: 20rem;
    }
}
</style>
