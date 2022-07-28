<template>
    <div ref="container" :class="containerClass">
        <input ref="input" type="text" :class="inputClass" readonly="readonly" :tabindex="tabindex" :disabled="disabled"
            @click="onInputClick" @keydown="onInputKeydown" v-if="!inline"/>
        <Portal :appendTo="appendTo" :disabled="inline">
            <transition name="p-connected-overlay" @enter="onOverlayEnter" @leave="onOverlayLeave" @after-leave="onOverlayAfterLeave">
                <div :ref="pickerRef" :class="pickerClass" v-if="inline ? true : overlayVisible" @click="onOverlayClick">
                    <div class="p-colorpicker-content">
                        <div :ref="colorSelectorRef" class="p-colorpicker-color-selector" @mousedown="onColorMousedown($event)"
                            @touchstart="onColorDragStart($event)" @touchmove="onDrag($event)" @touchend="onDragEnd()">
                            <div class="p-colorpicker-color">
                                <div :ref="colorHandleRef" class="p-colorpicker-color-handle"></div>
                            </div>
                        </div>
                        <div :ref="hueViewRef" class="p-colorpicker-hue" @mousedown="onHueMousedown($event)"
                            @touchstart="onHueDragStart($event)" @touchmove="onDrag($event)" @touchend="onDragEnd()">
                            <div :ref="hueHandleRef" class="p-colorpicker-hue-handle"></div>
                        </div>
                    </div>
                </div>
            </transition>
        </Portal>
    </div>
</template>

<script>
import {ConnectedOverlayScrollHandler,DomHandler,ZIndexUtils} from 'primevue/utils';
import OverlayEventBus from 'primevue/overlayeventbus';
import Portal from 'primevue/portal';

export default {
    name: 'ColorPicker',
    emits: ['update:modelValue', 'change', 'show', 'hide'],
    props: {
        modelValue: {
            type: null,
            default: null
        },
        defaultColor: {
            type: null,
            default: 'ff0000'
        },
        inline: {
            type: Boolean,
            default: false
        },
        format: {
            type: String,
            default: 'hex'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        tabindex: {
            type: String,
            default: null
        },
        autoZIndex: {
            type: Boolean,
            default: true
        },
        baseZIndex: {
            type: Number,
            default: 0
        },
        appendTo: {
            type: String,
            default: 'body'
        },
        panelClass: null
    },
    data() {
        return {
            overlayVisible: false,
            hsbValue: {
                h: 0,
                s: 100,
                b: 100
            },
            outsideClickListener: null,
            documentMouseMoveListener: null,
            documentMouseUpListener: null,
            scrollHandler: null,
            resizeListener: null,
            hueDragging: false,
            colorDragging: false,
            picker: null,
            colorSelector: null,
            colorHandle: null,
            hueView: null,
            hueHandle: null,
        };
    },
    beforeUnmount() {
        this.unbindOutsideClickListener();
        this.unbindDragListeners();
        this.unbindResizeListener();

        if (this.scrollHandler) {
            this.scrollHandler.destroy();
            this.scrollHandler = null;
        }

        if (this.picker && this.autoZIndex) {
            ZIndexUtils.clear(this.picker);
        }

        this.clearRefs();
    },
    mounted() {
        this.updateUI();
        this.updateModel();
    },
    methods: {
        pickColor(event) {
            let rect = this.colorSelector.getBoundingClientRect();
            let top = rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
            let left = rect.left + document.body.scrollLeft;
            let saturation = Math.floor(100 * (Math.max(0, Math.min(150, ((event.pageX || event.changedTouches[0].pageX)- left)))) / 150);
            let brightness = Math.floor(100 * (150 - Math.max(0, Math.min(150, ((event.pageY || event.changedTouches[0].pageY) - top)))) / 150);
            this.hsbValue = this.validateHSB({
                h: this.hsbValue.h,
                s: saturation,
                b: brightness
            });

            this.updateColorHandle();
            this.updateInput();
            this.updateModel();
            this.$emit('change', {event: event, value: this.modelValue});
        },
        pickHue(event) {
            let top = this.hueView.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
            const hueInput = Math.floor(360 * (150 - Math.max(0, Math.min(150, ((event.pageY || event.changedTouches[0].pageY) - top)))) / 150);
            this.hsbValue.h = Math.min(360, Math.max(0, hueInput));

            this.updateColorSelector();
            this.updateHue();
            this.updateModel();
            this.updateInput();
            this.$emit('change', {event: event, value: this.modelValue});
        },
        updateModel() {
            switch(this.format) {
                case 'hex':
                    this.$emit('update:modelValue', this.HSBtoHEX(this.hsbValue));
                break;

                case 'rgb':
                    this.$emit('update:modelValue', this.HSBtoRGB(this.hsbValue));
                break;

                case 'hsb':
                    this.$emit('update:modelValue', this.hsbValue);
                break;

                default:
                    //NoOp
                break;
            }
        },
        updateColorSelector() {
            if (this.colorSelector) {
                this.hsbValue = this.validateHSB(this.hsbValue);
                this.colorSelector.style.backgroundColor = '#' + this.HSBtoHEX({
                    h: this.hsbValue.h,
                    s: 100,
                    b: 100
                });
            }
        },
        updateColorHandle() {
            if (this.colorHandle) {
                this.colorHandle.style.left = Math.floor(150 * this.hsbValue.s / 100) + 'px';
                this.colorHandle.style.top = Math.floor(150 * (100 - this.hsbValue.b) / 100) + 'px';
            }
        },
        updateHue() {
            if (this.hueHandle) {
                this.hueHandle.style.top = Math.floor(150 - (150 * this.hsbValue.h / 360)) + 'px';
            }
        },
        updateInput() {
            if (this.$refs.input) {
                this.$refs.input.style.backgroundColor = '#' + this.HSBtoHEX(this.hsbValue);
            }
        },
        updateUI() {
            this.updateHue();
            this.updateColorHandle();
            this.updateInput();
            this.updateColorSelector();
        },
        validateHSB(hsb) {
            return {
                h: Math.min(360, Math.max(0, hsb.h)),
                s: Math.min(100, Math.max(0, hsb.s)),
                b: Math.min(100, Math.max(0, hsb.b))
            };
        },
        validateRGB(rgb) {
            return {
                r: Math.min(255, Math.max(0, rgb.r)),
                g: Math.min(255, Math.max(0, rgb.g)),
                b: Math.min(255, Math.max(0, rgb.b))
            };
        },
        validateHEX(hex) {
            const len = 6 - hex.length;
            if (len > 0) {
                let o = [];
                for (let i=0; i<len; i++) {
                    o.push('0');
                }
                o.push(hex);
                hex = o.join('');
            }
            return hex;
        },
        HSBtoRGB(hsb) {
            let rgb = {
                r: null, g: null, b: null
            };
            let h = Math.round(hsb.h);
            const s = Math.round(hsb.s*255/100);
            const v = Math.round(hsb.b*255/100);
            if (s === 0) {
                rgb = {
                    r: v,
                    g: v,
                    b: v
                }
            }
            else {
                let t1 = v;
                let t2 = (255-s)*v/255;
                let t3 = (t1-t2)*(h%60)/60;
                if (h===360) h = 0;
                if (h<60) {rgb.r=t1; rgb.b=t2; rgb.g=t2+t3}
                else if (h<120) {rgb.g=t1; rgb.b=t2; rgb.r=t1-t3}
                else if (h<180) {rgb.g=t1; rgb.r=t2; rgb.b=t2+t3}
                else if (h<240) {rgb.b=t1; rgb.r=t2; rgb.g=t1-t3}
                else if (h<300) {rgb.b=t1; rgb.g=t2; rgb.r=t2+t3}
                else if (h<360) {rgb.r=t1; rgb.g=t2; rgb.b=t1-t3}
                else {rgb.r=0; rgb.g=0;	rgb.b=0}
            }
            return {r:Math.round(rgb.r), g:Math.round(rgb.g), b:Math.round(rgb.b)};
        },
        RGBtoHEX(rgb) {
            let hex = [
                rgb.r.toString(16),
                rgb.g.toString(16),
                rgb.b.toString(16)
            ];

            for (let key in hex) {
                if (hex[key].length === 1) {
                    hex[key] = '0' + hex[key];
                }
            }

            return hex.join('');
        },
        HSBtoHEX(hsb) {
            return this.RGBtoHEX(this.HSBtoRGB(hsb));
        },
        onOverlayEnter(el) {
            this.updateUI();
            this.alignOverlay();
            this.bindOutsideClickListener();
            this.bindScrollListener();
            this.bindResizeListener();

            if (this.autoZIndex) {
                ZIndexUtils.set('overlay', el, this.$primevue.config.zIndex.overlay);
            }

            this.$emit('show');
        },
        onOverlayLeave() {
            this.unbindOutsideClickListener();
            this.unbindScrollListener();
            this.unbindResizeListener();
            this.clearRefs();
            this.$emit('hide');
        },
        onOverlayAfterLeave(el) {
            if (this.autoZIndex) {
                ZIndexUtils.clear(el);
            }
        },
        alignOverlay() {
            if (this.appendTo === 'self')
                DomHandler.relativePosition(this.picker, this.$refs.input);
            else
                DomHandler.absolutePosition(this.picker, this.$refs.input);
        },
        onInputClick() {
            if (this.disabled) {
                return;
            }

            this.overlayVisible = !this.overlayVisible;
        },
        onInputKeydown(event) {
            switch(event.which) {
                //space
                case 32:
                    this.overlayVisible = !this.overlayVisible;
                    event.preventDefault();
                break;

                //escape and tab
                case 27:
                case 9:
                    this.overlayVisible = false;
                break;

                default:
                    //NoOp
                break;
            }
        },
        onColorMousedown(event) {
            if (this.disabled) {
                return;
            }

            this.bindDragListeners();
            this.onColorDragStart(event);
        },
        onColorDragStart(event) {
            if (this.disabled) {
                return;
            }

            this.colorDragging = true;
            this.pickColor(event);
            DomHandler.addClass(this.$el, 'p-colorpicker-dragging');
            event.preventDefault();
        },
        onDrag(event) {
            if (this.colorDragging) {
                this.pickColor(event);
                event.preventDefault();
            }

            if (this.hueDragging) {
                this.pickHue(event);
                event.preventDefault();
            }
        },
        onDragEnd() {
            this.colorDragging = false;
            this.hueDragging = false;
            DomHandler.removeClass(this.$el, 'p-colorpicker-dragging');
            this.unbindDragListeners();
        },
        onHueMousedown(event) {
            if (this.disabled) {
                return;
            }

            this.bindDragListeners();
            this.onHueDragStart(event);
        },
        onHueDragStart(event) {
            if (this.disabled) {
                return;
            }

            this.hueDragging = true;
            this.pickHue(event);
            DomHandler.addClass(this.$el, 'p-colorpicker-dragging');
        },
        isInputClicked(event) {
            return this.$refs.input && this.$refs.input.isSameNode(event.target);
        },
        bindDragListeners() {
            this.bindDocumentMouseMoveListener();
            this.bindDocumentMouseUpListener();
        },
        unbindDragListeners() {
            this.unbindDocumentMouseMoveListener();
            this.unbindDocumentMouseUpListener();
        },
        bindOutsideClickListener() {
            if (!this.outsideClickListener) {
                this.outsideClickListener = (event) => {
                    if (this.overlayVisible && this.picker && !this.picker.contains(event.target) && !this.isInputClicked(event)) {
                        this.overlayVisible = false;
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
                this.scrollHandler = new ConnectedOverlayScrollHandler(this.$refs.container, () => {
                    if (this.overlayVisible) {
                        this.overlayVisible = false;
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
                    if (this.overlayVisible && !DomHandler.isTouchDevice()) {
                        this.overlayVisible = false;
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
        bindDocumentMouseMoveListener() {
            if (!this.documentMouseMoveListener) {
                this.documentMouseMoveListener = this.onDrag.bind(this);
                document.addEventListener('mousemove', this.documentMouseMoveListener);
            }
        },
        unbindDocumentMouseMoveListener() {
            if (this.documentMouseMoveListener) {
                document.removeEventListener('mousemove', this.documentMouseMoveListener);
                this.documentMouseMoveListener = null;
            }
        },
        bindDocumentMouseUpListener() {
            if (!this.documentMouseUpListener) {
                this.documentMouseUpListener = this.onDragEnd.bind(this);
                document.addEventListener('mouseup', this.documentMouseUpListener);
            }
        },
        unbindDocumentMouseUpListener() {
            if (this.documentMouseUpListener) {
                document.removeEventListener('mouseup', this.documentMouseUpListener);
                this.documentMouseUpListener = null;
            }
        },
        pickerRef(el) {
            this.picker = el
        },
        colorSelectorRef(el) {
            this.colorSelector = el;
        },
        colorHandleRef(el) {
            this.colorHandle = el;
        },
        hueViewRef(el) {
            this.hueView = el;
        },
        hueHandleRef(el) {
            this.hueHandle = el;
        },
        clearRefs() {
            this.picker = null;
            this.colorSelector = null;
            this.colorHandle = null;
            this.hueView = null;
            this.hueHandle = null;
        },
        onOverlayClick(event) {
            OverlayEventBus.emit('overlay-click', {
                originalEvent: event,
                target: this.$el
            });
        }
    },
    computed: {
        containerClass() {
            return ['p-colorpicker p-component', {'p-colorpicker-overlay': !this.inline}];
        },
        inputClass() {
            return ['p-colorpicker-preview p-inputtext', {'p-disabled': this.disabled}];
        },
        pickerClass() {
            return ['p-colorpicker-panel', this.panelClass, {
                'p-colorpicker-overlay-panel': !this.inline, 'p-disabled': this.disabled,
                'p-input-filled': this.$primevue.config.inputStyle === 'filled',
                'p-ripple-disabled': this.$primevue.config.ripple === false
            }];
        }
    },
    components: {
        'Portal': Portal
    }
}
</script>

<style>
.p-colorpicker {
    display: inline-block;
}

.p-colorpicker-dragging {
    cursor: pointer;
}

.p-colorpicker-overlay {
    position: relative;
}

.p-colorpicker-panel {
    position: relative;
    width: 193px;
    height: 166px;
}

.p-colorpicker-overlay-panel {
    position: absolute;
    top: 0;
    left: 0;
}

.p-colorpicker-preview {
    cursor: pointer;
}

.p-colorpicker-panel .p-colorpicker-content {
    position: relative;
}

.p-colorpicker-panel .p-colorpicker-color-selector {
    width: 150px;
    height: 150px;
    top: 8px;
    left: 8px;
    position: absolute;
}

.p-colorpicker-panel .p-colorpicker-color {
     width: 150px;
     height: 150px;
}

.p-colorpicker-panel .p-colorpicker-color-handle {
     position: absolute;
     top: 0px;
     left: 150px;
     border-radius: 100%;
     width: 10px;
     height: 10px;
     border-width: 1px;
     border-style: solid;
     margin: -5px 0 0 -5px;
     cursor: pointer;
     opacity: .85;
}

.p-colorpicker-panel .p-colorpicker-hue {
    width: 17px;
    height: 150px;
    top: 8px;
    left: 167px;
    position: absolute;
    opacity: .85;
}

.p-colorpicker-panel .p-colorpicker-hue-handle {
     position: absolute;
     top: 150px;
     left: 0px;
     width: 21px;
     margin-left: -2px;
     margin-top: -5px;
     height: 10px;
     border-width: 2px;
     border-style: solid;
     opacity: .85;
     cursor: pointer;
}
</style>
