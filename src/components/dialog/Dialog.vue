<template>
    <transition name="p-dialog" @enter="onEnter" @leave="onLeave">
        <div ref="container" :class="containerClass" v-if="visible">
            <div class="p-dialog-titlebar" v-if="showHeader">
                <slot name="header">
                    <span class="p-dialog-title" v-if="header">{{header}}</span>
                </slot>
                <div class="p-dialog-titlebar-icons">
                    <button class="p-dialog-titlebar-icon p-dialog-titlebar-close p-link" @click="close" v-if="closable">
                        <span class="p-dialog-titlebar-close-icon pi pi-times"></span>
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
</template>

<script>
import DomHandler from '../utils/DomHandler';

export default {
    props: {
		header: null,
		footer: null,
        visible: Boolean,
        modal: Boolean,
		contentStyle: null,
        rtl: Boolean,
        closable: {
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
        }
    },
    mask: null,
    documentKeydownListener: null,
    destroyed() {
        if (this.modal) {
            this.disableModality();
        }
    },
    methods: {
        close() {
            this.$emit('update:visible', false);
        },
        onEnter() {
            this.$emit('show');

            if (this.autoZIndex) {
                this.$refs.container.style.zIndex = String(this.baseZIndex + DomHandler.generateZIndex());
            }
            this.focus();
            if (this.modal) {
                this.enableModality();
            }
        },
        onLeave() {
            this.$emit('hide');

            if (this.modal) {
                this.disableModality();
            }
        },
        focus() {
            let focusable = DomHandler.findSingle(this.$refs.container, 'input,button');
            if (focusable) {
                focusable.focus();
            }
        },
        enableModality() {
            if (!this.mask) {
                this.mask = document.createElement('div');
                this.mask.style.zIndex = String(parseInt(this.$refs.container.style.zIndex, 10) - 1);
                DomHandler.addMultipleClasses(this.mask, 'p-component-overlay p-dialog-mask p-fadein');
                document.body.appendChild(this.mask);
                DomHandler.addClass(document.body, 'p-overflow-hidden');
                this.bindDocumentKeydownListener();
            }
        },
        disableModality() {
            if (this.mask) {
                document.body.removeChild(this.mask);
                DomHandler.removeClass(document.body, 'p-overflow-hidden');
                this.mask = null;
                this.unbindDocumentKeydownListener();
            }
        },
        onKeyDown(event) {
            if (event.which === 9) {
                event.preventDefault();

                let focusableElements = DomHandler.getFocusableElements(this.$refs.container);

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
        }
    },
    computed: {
        containerClass() {
            return ['p-dialog p-component', {
                'p-dialog-rtl': this.rtl
            }];
        }
    }
}
</script>

<style>
.p-dialog {
    position: fixed;
    padding: 0;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
}
.p-dialog-visible {
    display: block;
}
.p-dialog .p-dialog-titlebar {
	padding: .5em .75em;
    position: relative;
    border: 0;
}
.p-dialog .p-dialog-content {
    position: relative;
    border: 0;
    padding: .5em .75em;
    background: none;
    zoom: 1;
}
.p-dialog-resizable .p-dialog-content {
    overflow: auto;
}
.p-dialog .p-resizable-handle {
    width: 14px;
    height: 14px;
    right: 3px;
    bottom: 3px;
    position: absolute;
    font-size: .1px;
    display: block;
    cursor: se-resize;
}
.p-draggable .p-dialog-titlebar {
    cursor: move;
}
.p-dialog .p-dialog-titlebar-icons {
    float: right;
}
.p-dialog .p-dialog-titlebar-icons:after {
    content: "";
    display: table;
    clear: both;
}
.p-dialog .p-dialog-titlebar-icon {
    text-decoration: none;
    padding: .125em;
    cursor: pointer;
    display: inline-block;
    vertical-align: middle;
    border: 1px solid transparent;
}

.p-dialog .p-dialog-titlebar-icon span {
    display: block;
    margin: 0;
}
.p-dialog-footer {
    padding: 1em;
    text-align: right;
}

.p-dialog-mask {
    position: fixed;
    width: 100%;
    height: 100%;
}

/* ConfirmDialog */
.p-confirmdialog {
    width: 30em;
}

.p-confirmdialog.p-dialog .p-dialog-content {
    padding: 1em 2em;
}
.p-confirmdialog .p-dialog-content .p-confirmdialog-icon {
    font-size: 1.5em;
    vertical-align: middle;
    margin-right: .5em;
}
.p-confirmdialog .p-dialog-content .p-confirmdialog-message {
    vertical-align: middle;
}

/* Fluid */
.p-fluid .p-dialog-footer .p-button {
    width: auto;
}

/* RTL */
.p-rtl .p-dialog .p-dialog-titlebar-close  {
    float: left;
}

.p-rtl .p-dialog .p-dialog-footer {
    text-align: left;
}

@media screen and (max-width: 40em) {
    .p-confirmdialog {
        width: 90%;
    }
}

/* Animation */
.p-dialog-enter-active {
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}

.p-dialog-leave-active {
    transition: all 75ms cubic-bezier(0.4, 0.0, 0.2, 1);
}

.p-dialog-enter,
.p-dialog-leave-to {
    opacity: 0;
    transform: translateX(-50%) translateY(-50%) scale(0.7);
}

/* Maximize */
.p-dialog-maximized {
    -webkit-transition: none;
    transition: none;
    transform: none;
    width: 100vw !important;
    top: 0;
    left: 0;
}

.p-dialog-maximized .p-dialog-content {
    -webkit-transition: height .3s;
    transition: height .3s;
}
</style>