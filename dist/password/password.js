this.primevue = this.primevue || {};
this.primevue.password = (function (utils, OverlayEventBus, InputText, vue) {
    'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var OverlayEventBus__default = /*#__PURE__*/_interopDefaultLegacy(OverlayEventBus);
    var InputText__default = /*#__PURE__*/_interopDefaultLegacy(InputText);

    var script = {
        name: 'Password',
        emits: ['update:modelValue'],
        inheritAttrs: false,
        props: {
            modelValue: String,
            promptLabel: {
                type: String,
                default: null
            },
            mediumRegex: {
                type: String,
                default: '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})' // eslint-disable-line
            },
            strongRegex: {
                type: String,
                default: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})' // eslint-disable-line
            },
            weakLabel: {
                type: String,
                default: null
            },
            mediumLabel: {
                type: String,
                default: null
            },
            strongLabel: {
                type: String,
                default: null
            },
            feedback: {
                type: Boolean,
                default: true
            },
            appendTo: {
                type: String,
                default: 'body'
            },
            toggleMask: {
                type: Boolean,
                default: false
            },
            hideIcon: {
                type: String,
                default: 'pi pi-eye-slash'
            },
            showIcon: {
                type: String,
                default: 'pi pi-eye'
            },
            inputClass: null,
            inputStyle: null,
            style: null,
            class: String,
            panelClass: String
        },
        data() {
            return {
                overlayVisible: false,
                meter: null,
                infoText: null,
                focused: false,
                unmasked: false
            };
        },
        mediumCheckRegExp: null,
        strongCheckRegExp: null,
        resizeListener: null,
        scrollHandler: null,
        overlay: null,
        mounted() {
            this.infoText = this.promptText;
            this.mediumCheckRegExp = new RegExp(this.mediumRegex);
            this.strongCheckRegExp = new RegExp(this.strongRegex);
        },
        beforeUnmount() {
            this.unbindResizeListener();
            if (this.scrollHandler) {
                this.scrollHandler.destroy();
                this.scrollHandler = null;
            }

            if (this.overlay) {
                utils.ZIndexUtils.clear(this.overlay);
                this.overlay = null;
            }
        },
        methods: {
            onOverlayEnter(el) {
                utils.ZIndexUtils.set('overlay', el, this.$primevue.config.zIndex.overlay);
                this.alignOverlay();
                this.bindScrollListener();
                this.bindResizeListener();
            },
            onOverlayLeave() {
                this.unbindScrollListener();
                this.unbindResizeListener();
                this.overlay = null;
            },
            onOverlayAfterLeave(el) {
                utils.ZIndexUtils.clear(el);
            },
            alignOverlay() {
                if (this.appendDisabled) {
                    utils.DomHandler.relativePosition(this.overlay, this.$refs.input.$el);
                }
                else {
                    this.overlay.style.minWidth = utils.DomHandler.getOuterWidth(this.$refs.input.$el) + 'px';
                    utils.DomHandler.absolutePosition(this.overlay, this.$refs.input.$el);
                }
            },
            testStrength(str) {
                let level = 0;

                if (this.strongCheckRegExp.test(str))
                    level = 3;
                else if (this.mediumCheckRegExp.test(str))
                    level = 2;
                else if (str.length)
                    level = 1;

                return level;
            },
            onInput(event)  {
                this.$emit('update:modelValue', event.target.value);
            },
            onFocus() {
                this.focused = true;
                if (this.feedback) {
                    this.overlayVisible = true;
                }
            },
            onBlur() {
                this.focused = false;
                if (this.feedback) {
                    this.overlayVisible = false;
                }
            },
            onKeyUp(event) {
                if (this.feedback) {
                    const value = event.target.value;
                    let label = null;
                    let meter = null;

                    switch (this.testStrength(value)) {
                        case 1:
                            label = this.weakText;
                            meter = {
                                strength: 'weak',
                                width: '33.33%'
                            };
                            break;

                        case 2:
                            label = this.mediumText;
                            meter = {
                                strength: 'medium',
                                width: '66.66%'
                            };
                            break;

                        case 3:
                            label = this.strongText;
                            meter = {
                                strength: 'strong',
                                width: '100%'
                            };
                            break;

                        default:
                            label = this.promptText;
                            meter = null;
                            break;
                    }

                    this.meter = meter;
                    this.infoText = label;

                    if (!this.overlayVisible) {
                        this.overlayVisible = true;
                    }
                }
            },
            bindScrollListener() {
                if (!this.scrollHandler) {
                    this.scrollHandler = new utils.ConnectedOverlayScrollHandler(this.$refs.input.$el, () => {
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
            overlayRef(el) {
                this.overlay = el;
            },
            onMaskToggle() {
                this.unmasked = !this.unmasked;
            },
            onOverlayClick(event) {
                OverlayEventBus__default["default"].emit('overlay-click', {
                    originalEvent: event,
                    target: this.$el
                });
            }
        },
        computed: {
            containerClass() {
                return ['p-password p-component p-inputwrapper', this.class, {
                    'p-inputwrapper-filled': this.filled,
                    'p-inputwrapper-focus': this.focused,
                    'p-input-icon-right': this.toggleMask
                }];
            },
            inputFieldClass() {
                return ['p-password-input', this.inputClass, {
                    'p-disabled': this.$attrs.disabled
                }];
            },
            panelStyleClass() {
                return ['p-password-panel p-component', this.panelClass, {
                    'p-input-filled': this.$primevue.config.inputStyle === 'filled',
                    'p-ripple-disabled': this.$primevue.config.ripple === false
                }];
            },
            toggleIconClass() {
                return this.unmasked ? this.hideIcon : this.showIcon;
            },
            strengthClass() {
                return `p-password-strength ${this.meter ? this.meter.strength : ''}`;
            },
            inputType() {
                return this.unmasked ? 'text' : 'password';
            },
            filled() {
                return (this.modelValue != null && this.modelValue.toString().length > 0)
            },
            weakText() {
                return this.weakLabel || this.$primevue.config.locale.weak;
            },
            mediumText() {
                return this.mediumLabel || this.$primevue.config.locale.medium;
            },
            strongText() {
                return this.strongLabel || this.$primevue.config.locale.strong;
            },
            promptText() {
                return this.promptLabel || this.$primevue.config.locale.passwordPrompt;
            },
            appendDisabled() {
                return this.appendTo === 'self';
            },
            appendTarget() {
                return this.appendDisabled ? null : this.appendTo;
            }
        },
        components: {
            'PInputText': InputText__default["default"]
        }
    };

    const _hoisted_1 = { class: "p-password-meter" };
    const _hoisted_2 = { class: "p-password-info" };

    function render(_ctx, _cache, $props, $setup, $data, $options) {
      const _component_PInputText = vue.resolveComponent("PInputText");

      return (vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass($options.containerClass),
        style: vue.normalizeStyle($props.style)
      }, [
        vue.createVNode(_component_PInputText, vue.mergeProps({
          ref: "input",
          class: $options.inputFieldClass,
          style: $props.inputStyle,
          type: $options.inputType,
          value: $props.modelValue,
          onInput: $options.onInput,
          onFocus: $options.onFocus,
          onBlur: $options.onBlur,
          onKeyup: $options.onKeyUp
        }, _ctx.$attrs), null, 16, ["class", "style", "type", "value", "onInput", "onFocus", "onBlur", "onKeyup"]),
        ($props.toggleMask)
          ? (vue.openBlock(), vue.createElementBlock("i", {
              key: 0,
              class: vue.normalizeClass($options.toggleIconClass),
              onClick: _cache[0] || (_cache[0] = (...args) => ($options.onMaskToggle && $options.onMaskToggle(...args)))
            }, null, 2))
          : vue.createCommentVNode("", true),
        (vue.openBlock(), vue.createBlock(vue.Teleport, {
          to: $options.appendTarget,
          disabled: $options.appendDisabled
        }, [
          vue.createVNode(vue.Transition, {
            name: "p-connected-overlay",
            onEnter: $options.onOverlayEnter,
            onLeave: $options.onOverlayLeave,
            onAfterLeave: $options.onOverlayAfterLeave
          }, {
            default: vue.withCtx(() => [
              ($data.overlayVisible)
                ? (vue.openBlock(), vue.createElementBlock("div", {
                    key: 0,
                    ref: $options.overlayRef,
                    class: vue.normalizeClass($options.panelStyleClass),
                    onClick: _cache[1] || (_cache[1] = (...args) => ($options.onOverlayClick && $options.onOverlayClick(...args)))
                  }, [
                    vue.renderSlot(_ctx.$slots, "header"),
                    vue.renderSlot(_ctx.$slots, "content", {}, () => [
                      vue.createElementVNode("div", _hoisted_1, [
                        vue.createElementVNode("div", {
                          class: vue.normalizeClass($options.strengthClass),
                          style: vue.normalizeStyle({'width': $data.meter ? $data.meter.width : ''})
                        }, null, 6)
                      ]),
                      vue.createElementVNode("div", _hoisted_2, vue.toDisplayString($data.infoText), 1)
                    ]),
                    vue.renderSlot(_ctx.$slots, "footer")
                  ], 2))
                : vue.createCommentVNode("", true)
            ]),
            _: 3
          }, 8, ["onEnter", "onLeave", "onAfterLeave"])
        ], 8, ["to", "disabled"]))
      ], 6))
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

    var css_248z = "\n.p-password {\n    position: relative;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n}\n.p-password-panel {\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.p-password .p-password-panel {\n    min-width: 100%;\n}\n.p-password-meter {\n    height: 10px;\n}\n.p-password-strength {\n    height: 100%;\n    width: 0;\n    -webkit-transition: width 1s ease-in-out;\n    transition: width 1s ease-in-out;\n}\n.p-fluid .p-password {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n";
    styleInject(css_248z);

    script.render = render;

    return script;

})(primevue.utils, primevue.overlayeventbus, primevue.inputtext, Vue);
