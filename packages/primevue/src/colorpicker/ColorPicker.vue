<template>
    <div ref="container" :class="cx('root')" v-bind="ptmi('root')">
        <input v-if="!inline" ref="input" :id="inputId" type="text" :class="cx('preview')" readonly="readonly" :tabindex="tabindex" :disabled="disabled" @click="onInputClick" @keydown="onInputKeydown" v-bind="ptm('preview')" />
        <Portal :appendTo="appendTo" :disabled="inline">
            <transition name="p-connected-overlay" @enter="onOverlayEnter" @leave="onOverlayLeave" @after-leave="onOverlayAfterLeave" v-bind="ptm('transition')">
                <div v-if="inline ? true : overlayVisible" :ref="pickerRef" :class="[cx('panel'), panelClass, overlayClass]" @click="onOverlayClick" v-bind="{ ...ptm('panel'), ...ptm('overlay') }">
                    <div :class="cx('content')" v-bind="ptm('content')">
                        <div :ref="colorSelectorRef" :class="cx('colorSelector')" @mousedown="onColorMousedown($event)" @touchstart="onColorDragStart($event)" @touchmove="onDrag($event)" @touchend="onDragEnd()" v-bind="ptm('colorSelector')">
                            <div :class="cx('colorBackground')" v-bind="ptm('colorBackground')">
                                <div :ref="colorHandleRef" :class="cx('colorHandle')" v-bind="ptm('colorHandle')"></div>
                            </div>
                        </div>
                        <div :ref="hueViewRef" :class="cx('hue')" @mousedown="onHueMousedown($event)" @touchstart="onHueDragStart($event)" @touchmove="onDrag($event)" @touchend="onDragEnd()" v-bind="ptm('hue')">
                            <div :ref="hueHandleRef" :class="cx('hueHandle')" v-bind="ptm('hueHandle')"></div>
                        </div>
                    </div>
                </div>
            </transition>
        </Portal>
    </div>
</template>

<script>
import { absolutePosition, addClass, isTouchDevice, relativePosition, removeClass } from '@primeuix/utils/dom';
import { ZIndex } from '@primeuix/utils/zindex';
import { ConnectedOverlayScrollHandler } from '@primevue/core/utils';
import OverlayEventBus from 'primevue/overlayeventbus';
import Portal from 'primevue/portal';
import BaseColorPicker from './BaseColorPicker.vue';

export default {
    name: 'ColorPicker',
    extends: BaseColorPicker,
    inheritAttrs: false,
    emits: ['update:modelValue', 'change', 'show', 'hide'],
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
    picker: null,
    colorSelector: null,
    colorHandle: null,
    hueView: null,
    hueHandle: null,
    watch: {
        modelValue: {
            immediate: true,
            handler(newValue) {
                this.hsbValue = this.toHSB(newValue);

                if (this.selfUpdate) this.selfUpdate = false;
                else this.updateUI();
            }
        }
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
            ZIndex.clear(this.picker);
        }

        this.clearRefs();
    },
    mounted() {
        this.updateUI();
    },
    methods: {
        pickColor(event) {
            let rect = this.colorSelector.getBoundingClientRect();
            let top = rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
            let left = rect.left + document.body.scrollLeft;
            let saturation = Math.floor((100 * Math.max(0, Math.min(150, (event.pageX || event.changedTouches[0].pageX) - left))) / 150);
            let brightness = Math.floor((100 * (150 - Math.max(0, Math.min(150, (event.pageY || event.changedTouches[0].pageY) - top)))) / 150);

            this.hsbValue = this.validateHSB({
                h: this.hsbValue.h,
                s: saturation,
                b: brightness
            });

            this.selfUpdate = true;
            this.updateColorHandle();
            this.updateInput();
            this.updateModel(event);
        },
        pickHue(event) {
            let top = this.hueView.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);

            this.hsbValue = this.validateHSB({
                h: Math.floor((360 * (150 - Math.max(0, Math.min(150, (event.pageY || event.changedTouches[0].pageY) - top)))) / 150),
                s: 100,
                b: 100
            });

            this.selfUpdate = true;
            this.updateColorSelector();
            this.updateHue();
            this.updateModel(event);
            this.updateInput();
        },
        updateModel(event) {
            let value = this.modelValue;

            switch (this.format) {
                case 'hex':
                    value = this.HSBtoHEX(this.hsbValue);
                    break;

                case 'rgb':
                    value = this.HSBtoRGB(this.hsbValue);
                    break;

                case 'hsb':
                    value = this.hsbValue;
                    break;

                default:
                    //NoOp
                    break;
            }

            this.$emit('update:modelValue', value);
            this.$emit('change', { event, value });
        },
        updateColorSelector() {
            if (this.colorSelector) {
                let hsbValue = this.validateHSB({
                    h: this.hsbValue.h,
                    s: 100,
                    b: 100
                });

                this.colorSelector.style.backgroundColor = '#' + this.HSBtoHEX(hsbValue);
            }
        },
        updateColorHandle() {
            if (this.colorHandle) {
                this.colorHandle.style.left = Math.floor((150 * this.hsbValue.s) / 100) + 'px';
                this.colorHandle.style.top = Math.floor((150 * (100 - this.hsbValue.b)) / 100) + 'px';
            }
        },
        updateHue() {
            if (this.hueHandle) {
                this.hueHandle.style.top = Math.floor(150 - (150 * this.hsbValue.h) / 360) + 'px';
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

                for (var i = 0; i < len; i++) {
                    o.push('0');
                }

                o.push(hex);
                hex = o.join('');
            }

            return hex;
        },
        HEXtoRGB(hex) {
            let hexValue = parseInt(hex.indexOf('#') > -1 ? hex.substring(1) : hex, 16);

            return { r: hexValue >> 16, g: (hexValue & 0x00ff00) >> 8, b: hexValue & 0x0000ff };
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
            hsb.s = max !== 0 ? (255 * delta) / max : 0;

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

            hsb.s *= 100 / 255;
            hsb.b *= 100 / 255;

            return hsb;
        },
        HSBtoRGB(hsb) {
            var rgb = {
                r: null,
                g: null,
                b: null
            };
            var h = Math.round(hsb.h);
            var s = Math.round((hsb.s * 255) / 100);
            var v = Math.round((hsb.b * 255) / 100);

            if (s === 0) {
                rgb = {
                    r: v,
                    g: v,
                    b: v
                };
            } else {
                var t1 = v;
                var t2 = ((255 - s) * v) / 255;
                var t3 = ((t1 - t2) * (h % 60)) / 60;

                if (h === 360) h = 0;

                if (h < 60) {
                    rgb.r = t1;
                    rgb.b = t2;
                    rgb.g = t2 + t3;
                } else if (h < 120) {
                    rgb.g = t1;
                    rgb.b = t2;
                    rgb.r = t1 - t3;
                } else if (h < 180) {
                    rgb.g = t1;
                    rgb.r = t2;
                    rgb.b = t2 + t3;
                } else if (h < 240) {
                    rgb.b = t1;
                    rgb.r = t2;
                    rgb.g = t1 - t3;
                } else if (h < 300) {
                    rgb.b = t1;
                    rgb.g = t2;
                    rgb.r = t2 + t3;
                } else if (h < 360) {
                    rgb.r = t1;
                    rgb.g = t2;
                    rgb.b = t1 - t3;
                } else {
                    rgb.r = 0;
                    rgb.g = 0;
                    rgb.b = 0;
                }
            }

            return { r: Math.round(rgb.r), g: Math.round(rgb.g), b: Math.round(rgb.b) };
        },
        RGBtoHEX(rgb) {
            var hex = [rgb.r.toString(16), rgb.g.toString(16), rgb.b.toString(16)];

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
            } else {
                hsb = this.HEXtoHSB(this.defaultColor);
            }

            return hsb;
        },
        onOverlayEnter(el) {
            this.updateUI();
            this.alignOverlay();
            this.bindOutsideClickListener();
            this.bindScrollListener();
            this.bindResizeListener();

            if (this.autoZIndex) {
                ZIndex.set('overlay', el, this.baseZIndex, this.$primevue.config.zIndex.overlay);
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
                ZIndex.clear(el);
            }
        },
        alignOverlay() {
            if (this.appendTo === 'self') relativePosition(this.picker, this.$refs.input);
            else absolutePosition(this.picker, this.$refs.input);
        },
        onInputClick() {
            if (this.disabled) {
                return;
            }

            this.overlayVisible = !this.overlayVisible;
        },
        onInputKeydown(event) {
            switch (event.code) {
                case 'Space':
                    this.overlayVisible = !this.overlayVisible;
                    event.preventDefault();
                    break;

                case 'Escape':
                case 'Tab':
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
            this.$el.setAttribute('p-colorpicker-dragging', 'true');
            !this.isUnstyled && addClass(this.$el, 'p-colorpicker-dragging');
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
            this.$el.setAttribute('p-colorpicker-dragging', 'false');
            !this.isUnstyled && removeClass(this.$el, 'p-colorpicker-dragging');
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
            !this.isUnstyled && addClass(this.$el, 'p-colorpicker-dragging');
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
                    if (this.overlayVisible && !isTouchDevice()) {
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
            this.picker = el;
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
    components: {
        Portal: Portal
    }
};
</script>
