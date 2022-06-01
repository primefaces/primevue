import { ZIndexUtils, DomHandler, ConnectedOverlayScrollHandler } from 'primevue/utils';
import OverlayEventBus from 'primevue/overlayeventbus';
import { openBlock, createElementBlock, normalizeClass, createCommentVNode, createBlock, Teleport, createVNode, Transition, withCtx, createElementVNode } from 'vue';

var script = {
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
        ariaLabelledBy: {
            type: String,
            default: null
        },
        appendTo: {
            type: String,
            default: 'body'
        },
        panelClass: null
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
    picker: null,
    colorSelector: null,
    colorHandle: null,
    hueView: null,
    hueHandle: null,
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
    },
    watch: {
        modelValue: {
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

            this.selfUpdate = true;
            this.updateColorHandle();
            this.updateInput();
            this.updateModel();
            this.$emit('change', {event: event, value: this.modelValue});
        },
        pickHue(event) {
            let top = this.hueView.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
            this.hsbValue = this.validateHSB({
                h: Math.floor(360 * (150 - Math.max(0, Math.min(150, ((event.pageY || event.changedTouches[0].pageY) - top)))) / 150),
                s: 100,
                b: 100
            });

            this.selfUpdate = true;
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
            }
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
                };
            }
            else {
                var t1 = v;
                var t2 = (255-s)*v/255;
                var t3 = (t1-t2)*(h%60)/60;
                if (h===360) h = 0;
                if (h<60) {rgb.r=t1;	rgb.b=t2; rgb.g=t2+t3;}
                else if (h<120) {rgb.g=t1; rgb.b=t2;	rgb.r=t1-t3;}
                else if (h<180) {rgb.g=t1; rgb.r=t2;	rgb.b=t2+t3;}
                else if (h<240) {rgb.b=t1; rgb.r=t2;	rgb.g=t1-t3;}
                else if (h<300) {rgb.b=t1; rgb.g=t2;	rgb.r=t2+t3;}
                else if (h<360) {rgb.r=t1; rgb.g=t2;	rgb.b=t1-t3;}
                else {rgb.r=0; rgb.g=0;	rgb.b=0;}
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
                }
            }
            else {
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
            if (this.appendDisabled)
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
        },
        appendDisabled() {
            return this.appendTo === 'self' || this.inline;
        },
        appendTarget() {
            return this.appendDisabled ? null : this.appendTo;
        }
    }
};

const _hoisted_1 = ["tabindex", "disabled", "aria-labelledby"];
const _hoisted_2 = { class: "p-colorpicker-content" };
const _hoisted_3 = { class: "p-colorpicker-color" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", {
    ref: "container",
    class: normalizeClass($options.containerClass)
  }, [
    (!$props.inline)
      ? (openBlock(), createElementBlock("input", {
          key: 0,
          ref: "input",
          type: "text",
          class: normalizeClass($options.inputClass),
          readonly: "readonly",
          tabindex: $props.tabindex,
          disabled: $props.disabled,
          onClick: _cache[0] || (_cache[0] = (...args) => ($options.onInputClick && $options.onInputClick(...args))),
          onKeydown: _cache[1] || (_cache[1] = (...args) => ($options.onInputKeydown && $options.onInputKeydown(...args))),
          "aria-labelledby": $props.ariaLabelledBy
        }, null, 42, _hoisted_1))
      : createCommentVNode("", true),
    (openBlock(), createBlock(Teleport, {
      to: $options.appendTarget,
      disabled: $options.appendDisabled
    }, [
      createVNode(Transition, {
        name: "p-connected-overlay",
        onEnter: $options.onOverlayEnter,
        onLeave: $options.onOverlayLeave,
        onAfterLeave: $options.onOverlayAfterLeave
      }, {
        default: withCtx(() => [
          ($props.inline ? true : $data.overlayVisible)
            ? (openBlock(), createElementBlock("div", {
                key: 0,
                ref: $options.pickerRef,
                class: normalizeClass($options.pickerClass),
                onClick: _cache[10] || (_cache[10] = (...args) => ($options.onOverlayClick && $options.onOverlayClick(...args)))
              }, [
                createElementVNode("div", _hoisted_2, [
                  createElementVNode("div", {
                    ref: $options.colorSelectorRef,
                    class: "p-colorpicker-color-selector",
                    onMousedown: _cache[2] || (_cache[2] = $event => ($options.onColorMousedown($event))),
                    onTouchstart: _cache[3] || (_cache[3] = $event => ($options.onColorDragStart($event))),
                    onTouchmove: _cache[4] || (_cache[4] = $event => ($options.onDrag($event))),
                    onTouchend: _cache[5] || (_cache[5] = $event => ($options.onDragEnd()))
                  }, [
                    createElementVNode("div", _hoisted_3, [
                      createElementVNode("div", {
                        ref: $options.colorHandleRef,
                        class: "p-colorpicker-color-handle"
                      }, null, 512)
                    ])
                  ], 544),
                  createElementVNode("div", {
                    ref: $options.hueViewRef,
                    class: "p-colorpicker-hue",
                    onMousedown: _cache[6] || (_cache[6] = $event => ($options.onHueMousedown($event))),
                    onTouchstart: _cache[7] || (_cache[7] = $event => ($options.onHueDragStart($event))),
                    onTouchmove: _cache[8] || (_cache[8] = $event => ($options.onDrag($event))),
                    onTouchend: _cache[9] || (_cache[9] = $event => ($options.onDragEnd()))
                  }, [
                    createElementVNode("div", {
                      ref: $options.hueHandleRef,
                      class: "p-colorpicker-hue-handle"
                    }, null, 512)
                  ], 544)
                ])
              ], 2))
            : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["onEnter", "onLeave", "onAfterLeave"])
    ], 8, ["to", "disabled"]))
  ], 2))
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "\n.p-colorpicker {\n    display: inline-block;\n}\n.p-colorpicker-dragging {\n    cursor: pointer;\n}\n.p-colorpicker-overlay {\n    position: relative;\n}\n.p-colorpicker-panel {\n    position: relative;\n    width: 193px;\n    height: 166px;\n}\n.p-colorpicker-overlay-panel {\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.p-colorpicker-preview {\n    cursor: pointer;\n}\n.p-colorpicker-panel .p-colorpicker-content {\n    position: relative;\n}\n.p-colorpicker-panel .p-colorpicker-color-selector {\n    width: 150px;\n    height: 150px;\n    top: 8px;\n    left: 8px;\n    position: absolute;\n}\n.p-colorpicker-panel .p-colorpicker-color {\n     width: 150px;\n     height: 150px;\n}\n.p-colorpicker-panel .p-colorpicker-color-handle {\n     position: absolute;\n     top: 0px;\n     left: 150px;\n     border-radius: 100%;\n     width: 10px;\n     height: 10px;\n     border-width: 1px;\n     border-style: solid;\n     margin: -5px 0 0 -5px;\n     cursor: pointer;\n     opacity: .85;\n}\n.p-colorpicker-panel .p-colorpicker-hue {\n    width: 17px;\n    height: 150px;\n    top: 8px;\n    left: 167px;\n    position: absolute;\n    opacity: .85;\n}\n.p-colorpicker-panel .p-colorpicker-hue-handle {\n     position: absolute;\n     top: 150px;\n     left: 0px;\n     width: 21px;\n     margin-left: -2px;\n     margin-top: -5px;\n     height: 10px;\n     border-width: 2px;\n     border-style: solid;\n     opacity: .85;\n     cursor: pointer;\n}\n";
styleInject(css_248z);

script.render = render;

export { script as default };
