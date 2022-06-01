import { ZIndexUtils, DomHandler, ConnectedOverlayScrollHandler } from 'primevue/utils';
import OverlayEventBus from 'primevue/overlayeventbus';
import InputText from 'primevue/inputtext';
import { resolveComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, createVNode, mergeProps, createCommentVNode, createBlock, Teleport, Transition, withCtx, renderSlot, createElementVNode, toDisplayString } from 'vue';

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
            ZIndexUtils.clear(this.overlay);
            this.overlay = null;
        }
    },
    methods: {
        onOverlayEnter(el) {
            ZIndexUtils.set('overlay', el, this.$primevue.config.zIndex.overlay);
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
            ZIndexUtils.clear(el);
        },
        alignOverlay() {
            if (this.appendDisabled) {
                DomHandler.relativePosition(this.overlay, this.$refs.input.$el);
            }
            else {
                this.overlay.style.minWidth = DomHandler.getOuterWidth(this.$refs.input.$el) + 'px';
                DomHandler.absolutePosition(this.overlay, this.$refs.input.$el);
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
                this.scrollHandler = new ConnectedOverlayScrollHandler(this.$refs.input.$el, () => {
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
            OverlayEventBus.emit('overlay-click', {
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
        'PInputText': InputText
    }
};

const _hoisted_1 = { class: "p-password-meter" };
const _hoisted_2 = { class: "p-password-info" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_PInputText = resolveComponent("PInputText");

  return (openBlock(), createElementBlock("div", {
    class: normalizeClass($options.containerClass),
    style: normalizeStyle($props.style)
  }, [
    createVNode(_component_PInputText, mergeProps({
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
      ? (openBlock(), createElementBlock("i", {
          key: 0,
          class: normalizeClass($options.toggleIconClass),
          onClick: _cache[0] || (_cache[0] = (...args) => ($options.onMaskToggle && $options.onMaskToggle(...args)))
        }, null, 2))
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
          ($data.overlayVisible)
            ? (openBlock(), createElementBlock("div", {
                key: 0,
                ref: $options.overlayRef,
                class: normalizeClass($options.panelStyleClass),
                onClick: _cache[1] || (_cache[1] = (...args) => ($options.onOverlayClick && $options.onOverlayClick(...args)))
              }, [
                renderSlot(_ctx.$slots, "header"),
                renderSlot(_ctx.$slots, "content", {}, () => [
                  createElementVNode("div", _hoisted_1, [
                    createElementVNode("div", {
                      class: normalizeClass($options.strengthClass),
                      style: normalizeStyle({'width': $data.meter ? $data.meter.width : ''})
                    }, null, 6)
                  ]),
                  createElementVNode("div", _hoisted_2, toDisplayString($data.infoText), 1)
                ]),
                renderSlot(_ctx.$slots, "footer")
              ], 2))
            : createCommentVNode("", true)
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

export { script as default };
