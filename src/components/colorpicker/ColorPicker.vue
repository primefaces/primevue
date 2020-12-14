<template>
    <div :class="containerClass">
        <input ref="input" type="text" :class="inputClass" readonly="readonly" :tabindex="tabindex" :disabled="disabled"
            @click="onInputClick" @keydown="onInputKeydown" v-if="!inline" :aria-labelledby="ariaLabelledBy"/>
        <transition name="p-connected-overlay" @enter="onOverlayEnter" @leave="onOverlayLeave">
            <div ref="picker" :class="pickerClass" v-if="inline ? true : overlayVisible">
                <div class="p-colorpicker-content">
                    <div ref="colorSelector" class="p-colorpicker-color-selector" @mousedown="onColorMousedown">
                        <div class="p-colorpicker-color">
                            <div ref="colorHandle" class="p-colorpicker-color-handle"></div>
                        </div>
                    </div>
                    <div ref="hueView" class="p-colorpicker-hue" @mousedown="onHueMousedown">
                        <div ref="hueHandle" class="p-colorpicker-hue-handle"></div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import ConnectedOverlayScrollHandler from '../utils/ConnectedOverlayScrollHandler';
import DomHandler from '../utils/DomHandler';

export default {
    props: {
        value: {
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
        ariaLabelledBy: {
            type: String,
            default: null
        }
    },
    data() {
        return {
            overlayVisible: false
        };
    },
    hsbValue: null,
    outsideClickListener: null,
    documentMouseMoveListener: null,
    documentMouseUpListener: null,
    scrollHandler: null,
    resizeListener: null,
    hueDragging: null,
    colorDragging: null,
    selfUpdate: null,
    beforeDestroy() {
        this.unbindOutsideClickListener();
        this.unbindDocumentMouseMoveListener();
        this.unbindDocumentMouseUpListener();

        this.unbindResizeListener();

        if (this.scrollHandler) {
            this.scrollHandler.destroy();
            this.scrollHandler = null;
        }
    },
    mounted() {
        this.updateUI();
    },
    watch: {
        value: {
            immediate: true,
            handler(newValue) {
                this.hsbValue = this.toHSB(newValue);

                if (this.selfUpdate)
                    this.selfUpdate = false;
                else
                    this.updateUI();
            }
        }
    },
    methods: {
        pickColor(event) {
            let rect = this.$refs.colorSelector.getBoundingClientRect();
            let top = rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
            let left = rect.left + document.body.scrollLeft;
            let saturation = Math.floor(100 * (Math.max(0, Math.min(150, (event.pageX - left)))) / 150);
            let brightness = Math.floor(100 * (150 - Math.max(0, Math.min(150, (event.pageY - top)))) / 150);
            this.hsbValue = this.validateHSB({
                h: this.hsbValue.h,
                s: saturation,
                b: brightness
            });

            this.selfUpdate = true;
            this.updateColorHandle();
            this.updateInput();
            this.updateModel();
        },
        pickHue(event) {
            let top = this.$refs.hueView.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
            this.hsbValue = this.validateHSB({
                h: Math.floor(360 * (150 - Math.max(0, Math.min(150, (event.pageY - top)))) / 150),
                s: 100,
                b: 100
            });

            this.selfUpdate = true;
            this.updateColorSelector();
            this.updateHue();
            this.updateModel();
            this.updateInput();
        },
        updateModel() {
            switch(this.format) {
                case 'hex':
                    this.$emit('input', this.HSBtoHEX(this.hsbValue));
                break;

                case 'rgb':
                    this.$emit('input', this.HSBtoRGB(this.hsbValue));
                break;

                case 'hsb':
                    this.$emit('input', this.hsbValue);
                break;

                default:
                    //NoOp
                break;
            }
        },
        updateColorSelector() {
            if (this.$refs.colorSelector) {
                let hsbValue = this.validateHSB({
                    h: this.hsbValue.h,
                    s: 100,
                    b: 100
                });
                this.$refs.colorSelector.style.backgroundColor = '#' + this.HSBtoHEX(hsbValue);
            }
        },
        updateColorHandle() {
            if (this.$refs.colorHandle) {
                this.$refs.colorHandle.style.left = Math.floor(150 * this.hsbValue.s / 100) + 'px';
                this.$refs.colorHandle.style.top = Math.floor(150 * (100 - this.hsbValue.b) / 100) + 'px';
            }
        },
        updateHue() {
            if (this.$refs.hueHandle) {
                this.$refs.hueHandle.style.top = Math.floor(150 - (150 * this.hsbValue.h / 360)) + 'px';
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
            var len = 6 - hex.length;
            if (len > 0) {
                var o = [];
                for (var i=0; i<len; i++) {
                    o.push('0');
                }
                o.push(hex);
                hex = o.join('');
            }
            return hex;
        },
        HEXtoRGB(hex) {
            let hexValue = parseInt(((hex.indexOf('#') > -1) ? hex.substring(1) : hex), 16);
            return {r: hexValue >> 16, g: (hexValue & 0x00FF00) >> 8, b: (hexValue & 0x0000FF)};
        },
        HEXtoHSB(hex) {
            return this.RGBtoHSB(this.HEXtoRGB(hex));
        },
        RGBtoHSB(rgb) {
            var hsb = {
                h: 0,
                s: 0,
                b: 0
            };
            var min = Math.min(rgb.r, rgb.g, rgb.b);
            var max = Math.max(rgb.r, rgb.g, rgb.b);
            var delta = max - min;
            hsb.b = max;
            hsb.s = max !== 0 ? 255 * delta / max : 0;
            if (hsb.s !== 0) {
                if (rgb.r === max) {
                    hsb.h = (rgb.g - rgb.b) / delta;
                } else if (rgb.g === max) {
                    hsb.h = 2 + (rgb.b - rgb.r) / delta;
                } else {
                    hsb.h = 4 + (rgb.r - rgb.g) / delta;
                }
            } else {
                hsb.h = -1;
            }
            hsb.h *= 60;
            if (hsb.h < 0) {
                hsb.h += 360;
            }
            hsb.s *= 100/255;
            hsb.b *= 100/255;
            return hsb;
        },
        HSBtoRGB(hsb) {
            var rgb = {
                r: null, g: null, b: null
            };
            var h = Math.round(hsb.h);
            var s = Math.round(hsb.s*255/100);
            var v = Math.round(hsb.b*255/100);
            if (s === 0) {
                rgb = {
                    r: v,
                    g: v,
                    b: v
                }
            }
            else {
                var t1 = v;
                var t2 = (255-s)*v/255;
                var t3 = (t1-t2)*(h%60)/60;
                if (h===360) h = 0;
                if (h<60) {rgb.r=t1;	rgb.b=t2; rgb.g=t2+t3}
                else if (h<120) {rgb.g=t1; rgb.b=t2;	rgb.r=t1-t3}
                else if (h<180) {rgb.g=t1; rgb.r=t2;	rgb.b=t2+t3}
                else if (h<240) {rgb.b=t1; rgb.r=t2;	rgb.g=t1-t3}
                else if (h<300) {rgb.b=t1; rgb.g=t2;	rgb.r=t2+t3}
                else if (h<360) {rgb.r=t1; rgb.g=t2;	rgb.b=t1-t3}
                else {rgb.r=0; rgb.g=0;	rgb.b=0}
            }
            return {r:Math.round(rgb.r), g:Math.round(rgb.g), b:Math.round(rgb.b)};
        },
        RGBtoHEX(rgb) {
            var hex = [
                rgb.r.toString(16),
                rgb.g.toString(16),
                rgb.b.toString(16)
            ];

            for (var key in hex) {
                if (hex[key].length === 1) {
                    hex[key] = '0' + hex[key];
                }
            }

            return hex.join('');
        },
        HSBtoHEX(hsb) {
            return this.RGBtoHEX(this.HSBtoRGB(hsb));
        },
        toHSB(value) {
            let hsb;

            if (value) {
                switch (this.format) {
                    case 'hex':
                        hsb = this.HEXtoHSB(value);
                    break;

                    case 'rgb':
                        hsb = this.RGBtoHSB(value);
                    break;

                    case 'hsb':
                        hsb = value;
                    break;

                    default:
                        break;
                }
            }
            else {
                hsb = this.HEXtoHSB(this.defaultColor);
            }

            return hsb;
        },
        onOverlayEnter() {
            this.updateUI();
            this.alignOverlay();
            this.bindOutsideClickListener();
            this.bindScrollListener();
            this.bindResizeListener();

            if (this.autoZIndex) {
                this.$refs.picker.style.zIndex = String(this.baseZIndex + DomHandler.generateZIndex());
            }
        },
        onOverlayLeave() {
            this.unbindOutsideClickListener();
            this.unbindScrollListener();
            this.unbindResizeListener();
        },
        alignOverlay() {
            DomHandler.relativePosition(this.$refs.picker, this.$refs.input);
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

            this.colorDragging = true;
            this.bindDocumentMouseMoveListener();
            this.bindDocumentMouseUpListener();
            this.pickColor(event);
            DomHandler.addClass(this.$el, 'p-colorpicker-dragging');
        },
        onHueMousedown(event) {
            if (this.disabled) {
                return;
            }

            this.hueDragging = true;
            this.bindDocumentMouseMoveListener();
            this.bindDocumentMouseUpListener();
            this.pickHue(event);
            DomHandler.addClass(this.$el, 'p-colorpicker-dragging');
        },
        isInputClicked(event) {
            return this.$refs.input && this.$refs.input.isSameNode(event.target);
        },
        bindOutsideClickListener() {
            if (!this.outsideClickListener) {
                this.outsideClickListener = (event) => {
                    if (this.overlayVisible && this.$refs.picker && !this.$refs.picker.contains(event.target) && !this.isInputClicked(event)) {
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
                this.scrollHandler = new ConnectedOverlayScrollHandler(this.$el, () => {
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
                    if (this.overlayVisible) {
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
                this.documentMouseMoveListener = (event) => {
                    if (this.colorDragging) {
                        this.pickColor(event);
                    }

                    if (this.hueDragging) {
                        this.pickHue(event);
                    }
                };
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
                this.documentMouseUpListener = () => {
                    this.colorDragging = false;
                    this.hueDragging = false;
                    DomHandler.removeClass(this.$el, 'p-colorpicker-dragging');
                    this.unbindDocumentMouseMoveListener();
                    this.unbindDocumentMouseUpListener();
                };
                document.addEventListener('mouseup', this.documentMouseUpListener);
            }
        },
        unbindDocumentMouseUpListener() {
            if (this.documentMouseUpListener) {
                document.removeEventListener('mouseup', this.documentMouseUpListener);
                this.documentMouseUpListener = null;
            }
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
            return ['p-colorpicker-panel', {'p-colorpicker-overlay-panel': !this.inline, 'p-disabled': this.disabled}];
        }
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