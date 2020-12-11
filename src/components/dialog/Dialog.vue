<template>
    <div ref="mask" :class="maskClass" v-if="maskVisible" @click="onMaskClick">
        <transition name="p-dialog" @before-enter="onBeforeEnter" @enter="onEnter" @before-leave="onBeforeLeave" @leave="onLeave" @after-leave="onAfterLeave" @appear="onAppear">
            <div ref="dialog" :class="dialogClass" :style="dialogStyle" v-if="visible" v-bind="$attrs" v-on="listeners" role="dialog" :aria-labelledby="ariaLabelledById" :aria-modal="modal">
                <div class="p-dialog-header" v-if="showHeader">
                    <slot name="header">
                        <span :id="ariaLabelledById" class="p-dialog-title" v-if="header" >{{header}}</span>
                    </slot>
                    <div class="p-dialog-header-icons">
                        <button class="p-dialog-header-icon p-dialog-header-maximize p-link" @click="maximize" v-if="maximizable" type="button" tabindex="-1" v-ripple>
                            <span :class="maximizeIconClass"></span>
                        </button>
                        <button class="p-dialog-header-icon p-dialog-header-close p-link" @click="close" v-if="closable" :aria-label="ariaCloseLabel" type="button" tabindex="-1" v-ripple>
                            <span class="p-dialog-header-close-icon pi pi-times"></span>
                        </button>
                    </div>
                </div>
                <div class="p-dialog-content" :style="contentStyle">
                    <slot></slot>
                </div>
                <div class="p-dialog-footer" v-if="footer || $slots.footer">
                    <slot name="footer">{{footer}}</slot>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
import UniqueComponentId from '../utils/UniqueComponentId';
import DomHandler from '../utils/DomHandler';
import Ripple from '../ripple/Ripple';

export default {
    inheritAttrs: false,
    props: {
        header: null,
        footer: null,
        visible: Boolean,
        modal: Boolean,
        contentStyle: null,
        rtl: Boolean,
        maximizable: Boolean,
        dismissableMask: Boolean,
        closable: {
            type: Boolean,
            default: true
        },
        closeOnEscape: {
            type: Boolean,
            default: true
        },
        showHeader: {
            type: Boolean,
            default: true
        },
        baseZIndex: {
            type: Number,
            default: 0
        },
        autoZIndex: {
            type: Boolean,
            default: true
        },
        ariaCloseLabel: {
            type: String,
            default: 'close'
        },
        position: {
            type: String,
            default: 'center'
        }
    },
    data() {
        return {
            dialogClasses: null,
            dialogStyles: null,
            maskVisible: this.visible,
            maximized: false
        }
    },
    documentKeydownListener: null,
    updated() {
        this.removeStylesFromMask();

        if (this.visible && !this.maskVisible) {
            this.maskVisible = true;
        }

        if (this.modal && this.$refs.mask && !DomHandler.hasClass(this.$refs.mask, 'p-component-overlay')) {
            DomHandler.addClass(this.$refs.mask, 'p-component-overlay');
        }
    },
    mounted() {
        this.removeStylesFromMask();
    },
    beforeDestroy() {
        this.disableDocumentSettings();
    },
    methods: {
        close() {
            this.$emit('update:visible', false);
        },
        onBeforeEnter(el) {
            if (this.autoZIndex) {
                el.style.zIndex = String(this.baseZIndex + DomHandler.generateZIndex());
            }
        },
        onEnter() {
            this.$refs.mask.style.zIndex = String(parseInt(this.$refs.dialog.style.zIndex, 10) - 1);

            this.$emit('show');
            this.focus();
            this.enableDocumentSettings();
        },
        onBeforeLeave() {
            DomHandler.addClass(this.$refs.mask, 'p-dialog-mask-leave');
        },
        onLeave() {
            this.$emit('hide');
        },
        onAfterLeave() {
            this.maskVisible = false;
            this.disableDocumentSettings();
        },
        onAppear() {
            if (this.visible) {
                this.onEnter();
            }
        },
        onMaskClick(event) {
            if (this.dismissableMask && this.closable && this.modal && this.$refs.mask === event.target) {
                this.close();
            }
        },
        focus() {
            let focusTarget = this.$refs.dialog.querySelector('[autofocus]');
            if (focusTarget) {
                focusTarget.focus();
            }
        },
        maximize() {
            this.maximized = !this.maximized;

            if (!this.modal) {
                if (this.maximized)
                    DomHandler.addClass(document.body, 'p-overflow-hidden');
                else
                    DomHandler.removeClass(document.body, 'p-overflow-hidden');
            }
        },
        enableDocumentSettings() {
            if (this.modal) {
                DomHandler.addClass(document.body, 'p-overflow-hidden');
                this.bindDocumentKeydownListener();
            }
            else if (this.maximizable && this.maximized) {
                DomHandler.addClass(document.body, 'p-overflow-hidden');
            }
        },
        disableDocumentSettings() {
            if (this.modal) {
                DomHandler.removeClass(document.body, 'p-overflow-hidden');
                this.unbindDocumentKeydownListener();
            }
            else if (this.maximizable && this.maximized) {
                DomHandler.removeClass(document.body, 'p-overflow-hidden');
            }
        },
        onKeyDown(event) {
            if (event.which === 9) {
                event.preventDefault();
                let focusableElements = DomHandler.getFocusableElements(this.$refs.dialog);
                if (focusableElements && focusableElements.length > 0) {
                    if (!document.activeElement) {
                        focusableElements[0].focus();
                    }
                    else {
                        let focusedIndex = focusableElements.indexOf(document.activeElement);
                        if (event.shiftKey) {
                            if (focusedIndex == -1 || focusedIndex === 0)
                                focusableElements[focusableElements.length - 1].focus();
                            else
                                focusableElements[focusedIndex - 1].focus();
                        }
                        else {
                            if (focusedIndex == -1 || focusedIndex === (focusableElements.length - 1))
                                focusableElements[0].focus();
                            else
                                focusableElements[focusedIndex + 1].focus();
                        }
                    }
                }
            } else if (event.which === 27 && this.closeOnEscape) {
                this.close();
            }
        },
        bindDocumentKeydownListener() {
            if (!this.documentKeydownListener) {
                this.documentKeydownListener = this.onKeyDown.bind(this);
                window.document.addEventListener('keydown', this.documentKeydownListener);
            }
        },
        unbindDocumentKeydownListener() {
            if (this.documentKeydownListener) {
                window.document.removeEventListener('keydown', this.documentKeydownListener);
                this.documentKeydownListener = null;
            }
        },
        getPositionClass() {
            const positions = ['left', 'right', 'top', 'topleft', 'topright', 'bottom', 'bottomleft', 'bottomright'];
            const pos = positions.find(item => item === this.position);

            return pos ? `p-dialog-${pos}` : '';
        },
        removeStylesFromMask() {
            if (this.$refs.mask) {
                this.dialogStyles = this.$vnode.data.style;
                if (this.dialogStyles) {
                    Object.keys(this.dialogStyles).forEach((key) => {
                        this.$refs.mask.style[key] = '';
                    });
                }

                this.dialogClasses = this.$vnode.data.class || this.$vnode.data.staticClass;
                if (this.dialogClasses) {
                    this.$refs.mask.classList = 'p-dialog-mask' + (this.modal && ' p-component-overlay ') + this.getPositionClass();
                }
            }
        }
    },
    computed: {
        listeners() {
            return {
                ...this.$listeners
            };
        },
        maskClass() {
            return ['p-dialog-mask', this.getPositionClass()];
        },
        dialogClass() {
            return ['p-dialog p-component', {
                'p-dialog-rtl': this.rtl,
                'p-dialog-maximized': this.maximizable && this.maximized
            }, this.dialogClasses];
        },
        maximizeIconClass() {
            return ['p-dialog-header-maximize-icon pi', {
                'pi-window-maximize': !this.maximized,
                'pi-window-minimize': this.maximized
            }];
        },
        dialogStyle() {
            return this.dialogStyles;
        },
        ariaId() {
            return UniqueComponentId();
        },
        ariaLabelledById() {
            return this.header != null ? this.ariaId + '_header' : null;
        }
    },
    directives: {
        'ripple': Ripple
    }
}
</script>
<style>
.p-dialog-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
    background-color: transparent;
    transition-property: background-color;
}

.p-dialog-mask.p-component-overlay {
    pointer-events: auto;
}

.p-dialog {
    display: flex;
    flex-direction: column;
    pointer-events: auto;
    max-height: 90%;
    transform: scale(1);
}

.p-dialog-content {
    overflow-y: auto;
}

.p-dialog-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
}

.p-dialog-footer {
    flex-shrink: 0;
}

.p-dialog .p-dialog-header-icons {
    display: flex;
    align-items: center;
}

.p-dialog .p-dialog-header-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
}

/* Fluid */
.p-fluid .p-dialog-footer .p-button {
    width: auto;
}

/* Animation */
/* Center */
.p-dialog-enter-active {
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}
.p-dialog-leave-active {
    transition: all 150ms cubic-bezier(0.4, 0.0, 0.2, 1);
}
.p-dialog-enter,
.p-dialog-leave-to {
    opacity: 0;
    transform: scale(0.7);
}

.p-dialog-mask.p-dialog-mask-leave {
    background-color: transparent;
}

/* Top, Bottom, Left, Right, Top* and Bottom* */
.p-dialog-top .p-dialog,
.p-dialog-bottom .p-dialog,
.p-dialog-left .p-dialog,
.p-dialog-right .p-dialog,
.p-dialog-topleft .p-dialog,
.p-dialog-topright .p-dialog,
.p-dialog-bottomleft .p-dialog,
.p-dialog-bottomright .p-dialog {
    margin: .75rem;
    transform: translate3d(0px, 0px, 0px);
}
.p-dialog-top .p-dialog-enter-active,
.p-dialog-top .p-dialog-leave-active,
.p-dialog-bottom .p-dialog-enter-active,
.p-dialog-bottom .p-dialog-leave-active,
.p-dialog-left .p-dialog-enter-active,
.p-dialog-left .p-dialog-leave-active,
.p-dialog-right .p-dialog-enter-active,
.p-dialog-right .p-dialog-leave-active,
.p-dialog-topleft .p-dialog-enter-active,
.p-dialog-topleft .p-dialog-leave-active,
.p-dialog-topright .p-dialog-enter-active,
.p-dialog-topright .p-dialog-leave-active,
.p-dialog-bottomleft .p-dialog-enter-active,
.p-dialog-bottomleft .p-dialog-leave-active,
.p-dialog-bottomright .p-dialog-enter-active,
.p-dialog-bottomright .p-dialog-leave-active {
    transition: all .3s ease-out;
}
.p-dialog-top .p-dialog-enter,
.p-dialog-top .p-dialog-leave-to {
    transform: translate3d(0px, -100%, 0px);
}
.p-dialog-bottom .p-dialog-enter,
.p-dialog-bottom .p-dialog-leave-to {
    transform: translate3d(0px, 100%, 0px);
}
.p-dialog-left .p-dialog-enter,
.p-dialog-left .p-dialog-leave-to,
.p-dialog-topleft .p-dialog-enter,
.p-dialog-topleft .p-dialog-leave-to,
.p-dialog-bottomleft .p-dialog-enter,
.p-dialog-bottomleft .p-dialog-leave-to {
    transform: translate3d(-100%, 0px, 0px);
}
.p-dialog-right .p-dialog-enter,
.p-dialog-right .p-dialog-leave-to,
.p-dialog-topright .p-dialog-enter,
.p-dialog-topright .p-dialog-leave-to,
.p-dialog-bottomright .p-dialog-enter,
.p-dialog-bottomright .p-dialog-leave-to {
    transform: translate3d(100%, 0px, 0px);
}

/* Maximize */
.p-dialog-maximized {
    -webkit-transition: none;
    transition: none;
    transform: none;
    width: 100vw !important;
    max-height: 100%;
    height: 100%;
}
.p-dialog-maximized .p-dialog-content {
    flex-grow: 1;
}

/* Position */
.p-dialog-left {
    justify-content: flex-start;
}
.p-dialog-right {
    justify-content: flex-end;
}
.p-dialog-top {
    align-items: flex-start;
}
.p-dialog-topleft {
    justify-content: flex-start;
    align-items: flex-start;
}
.p-dialog-topright {
    justify-content: flex-end;
    align-items: flex-start;
}
.p-dialog-bottom {
    align-items: flex-end;
}
.p-dialog-bottomleft {
    justify-content: flex-start;
    align-items: flex-end;
}
.p-dialog-bottomright {
    justify-content: flex-end;
    align-items: flex-end;
}
</style>
