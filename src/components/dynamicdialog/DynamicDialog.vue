<template>
    <Portal :appendTo="appendTo">
        <div :ref="maskRef" class="p-dialog-mask p-component-overlay p-component-overlay-enter" v-if="containerVisible" @click="onMaskClick">
            <transition name="p-dialog" @before-enter="onBeforeEnter" @enter="onEnter" @before-leave="onBeforeLeave" @leave="onLeave" @after-leave="onAfterLeave" appear>
                <div :ref="containerRef" :class="dialogClass" :style="dialogStyle" v-if="visible" v-bind="$attrs" role="dialog" :aria-labelledby="ariaLabelledById" aria-modal="modal">
                    <div class="p-dialog-header" v-if="dialog.showHeader !== false">
                        <span :id="ariaLabelledById" class="p-dialog-title" v-if="dialog.header">
                            {{dialog.header}}
                        </span>
                        <div class="p-dialog-header-icons">
                            <button class="p-dialog-header-icon p-dialog-header-close p-link" @click="close" v-if="dialog.closable !== false" type="button" v-ripple>
                                <span class="p-dialog-header-close-icon pi pi-times"></span>
                            </button>
                        </div>
                    </div>
                    <div :class="contentStyleClass" :style="dialog.contentStyle">
                        <component :is="dialog.component">
                            <slot />
                        </component>
                    </div>
                    <div class="p-dialog-footer" v-if="dialog.footer">
                        {{dialog.footer}}
                    </div>
                </div>
            </transition>
        </div>
    </Portal>
</template>

<script>
import {markRaw} from 'vue';
import DynamicDialogEventBus from 'primevue/dynamicdialogeventbus';
import {UniqueComponentId,DomHandler,ZIndexUtils} from 'primevue/utils';
import Ripple from 'primevue/ripple';
import Portal from 'primevue/portal';

export default {
    name: 'DynamicDialog',
    inheritAttrs: false,
    emits: ['update:visible','show','hide'],
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        appendTo: {
            type: String,
            default: 'body'
        }
    },
    data() {
        return {
            containerVisible: this.visible
        }
    },
    dialog: null,
    dialogListener: null,
    closeListener: null,
    documentKeydownListener: null,
    container: null,
    mask: null,
    updated() {
        if (this.visible) {
            this.containerVisible = this.visible;
        }
    },
    mounted() {
        this.dialogListener = (dialog) => {
            if (!dialog || !dialog.component) {
                return;
            }

            this.dialog = markRaw(dialog);
            this.$emit('update:visible', true);
        };

        this.closeListener = () => {
            this.dialog = null;
            this.$emit('update:visible', false);
        };

        DynamicDialogEventBus.on('open', this.dialogListener);
        DynamicDialogEventBus.on('close', this.closeListener);
    },
    beforeUnmount() {
        DynamicDialogEventBus.off('open', this.dialogListener);
        DynamicDialogEventBus.off('close', this.closeListener);

        this.unbindGlobalListeners();

        this.mask = null;

        if (this.container && this.dialog.autoZIndex !== false) {
            ZIndexUtils.clear(this.container);
        }
        this.container = null;
    },
    methods: {
        onBeforeEnter(el) {
            if (this.dialog && this.dialog.autoZIndex !== false && this.dialog.baseZIndex !== undefined)
                ZIndexUtils.set('modal', el, this.dialog.baseZIndex + this.$primevue.config.zIndex.modal);
            else
                ZIndexUtils.set('modal', el, this.$primevue.config.zIndex.modal);

            el.setAttribute(this.attributeSelector, '');
        },
        onEnter() {
            this.mask.style.zIndex = String(parseInt(this.container.style.zIndex, 10) - 1);

            this.$emit('show');
            this.focus();
            this.bindGlobalListeners();
        },
        onBeforeLeave() {
            DomHandler.addClass(this.mask, 'p-component-overlay-leave');
        },
        onLeave() {
            this.$emit('hide');
        },
        onAfterLeave(el) {
            if (this.dialog && this.dialog.autoZIndex !== false) {
                ZIndexUtils.clear(el);
            }

            this.containerVisible = false;
            this.unbindGlobalListeners();
        },
        close() {
            this.closeListener();
        },
        onMaskClick(event) {
            if (this.dialog && this.dialog.dismissableMask && this.dialog.closable !== false && this.mask === event.target) {
                this.closeListener();
            }
        },
        focus() {
            let focusTarget = this.container.querySelector('[autofocus]');
            if (focusTarget) {
                focusTarget.focus();
            }
        },
        onKeyDown(event) {
            if (event.which === 9) {
                event.preventDefault();
                let focusableElements = DomHandler.getFocusableElements(this.container);
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
            }
            else if (event.which === 27 && this.dialog.closeOnEscape) {
                this.closeListener();
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
        bindGlobalListeners() {
            if (this.dialog.closeOnEscape && this.dialog.closable !== false) {
                this.bindDocumentKeyDownListener();
            }
        },
        unbindGlobalListeners() {
            this.unbindDocumentKeyDownListener();
        }
    },
    computed: {
        dialogClass() {
            return ['p-dialog p-dynamic-dialog p-component', this.dialog.class, {
                'p-dialog-rtl': this.dialog && this.dialog.rtl,
                'p-input-filled': this.$primevue.config.inputStyle === 'filled',
                'p-ripple-disabled': this.$primevue.config.ripple === false
            }];
        },
        dialogStyle() {
            return [this.dialog.style, {width: this.dialog.width, height: this.dialog.height} ];
        },
        ariaId() {
            return UniqueComponentId();
        },
        ariaLabelledById() {
            return this.dialog.header != null ? this.ariaId + '_header' : null;
        },
        attributeSelector() {
            return UniqueComponentId();
        },
        contentStyleClass() {
            return ['p-dialog-content', this.dialog.contentClass];
        }
    },
    directives: {
        'ripple': Ripple
    },
    components: {
        'Portal': Portal
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
.p-dialog-enter-active {
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}
.p-dialog-leave-active {
    transition: all 150ms cubic-bezier(0.4, 0.0, 0.2, 1);
}
.p-dialog-enter-from,
.p-dialog-leave-to {
    opacity: 0;
    transform: scale(0.7);
}

</style>
